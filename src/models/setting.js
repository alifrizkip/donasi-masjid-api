export default function (sequelize, DataTypes) {
  const Setting = sequelize.define('Setting', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
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
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'settings',
  });

  Setting.getKey = key => Setting.findOne({ where: { key } });
  Setting.setKey = (key, value) => Setting.create({ key, value });
  Setting.updateKey = (key, value) => Setting.update({ value }, { where: { key } });

  return Setting;
}
