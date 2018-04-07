import bcrypt from 'bcrypt';

import config from '../../config';

const SALT_ROUND = 8;

export const UserStatus = {
  INACTIVE: 0,
  ACTIVE: 1,
};

export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE(),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    updated_at: {
      type: DataTypes.DATE(),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    deleted_at: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'users',
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['created_at', 'updated_at', 'deleted_at'],
      },
    },
    scopes: {
      activeUser: {
        where: {
          status: 1,
        },
      },
    },
  });

  User.hashPassword = async str => bcrypt.hash(str, SALT_ROUND);
  User.hashPasswordSync = str => bcrypt.hashSync(str, SALT_ROUND);

  User.getByEmail = email => User.scope('activeUser').findOne({ where: { email } });
  User.getAll = (where = {}) => User.findAll({ where });

  User.prototype.verifyPassword = function verifyPassword(string) {
    return bcrypt.compareSync(string, this.get('password'));
  };

  User.prototype.serialize = function serialize() {
    const data = Object.assign({}, this.get());
    delete data.password;
    data.image_path = config.imageUrlPath;
    return data;
  };

  return User;
}
