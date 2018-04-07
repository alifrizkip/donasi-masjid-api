import Sequelize from 'sequelize';

const DonationStatus = {
  UNVERIFIED: 0,
  VERIFIED: 1,
};

export default function (sequelize, DataTypes) {
  const Donation = sequelize.define('Donation', {
    donation_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'HAMBA ALLOH',
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: 'BUMI ALLOH',
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: 'hamba_alloh@mail.com',
      allowNull: false,
    },
    amount: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    },
    verified: {
      type: DataTypes.TINYINT,
      defaultValue: DonationStatus.UNVERIFIED,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
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
    tableName: 'donations',
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['updated_at', 'deleted_at'],
      },
    },
  });

  Donation.totalVerified = async (condition = {}) => {
    let data = await Donation.find({
      where: condition,
      attributes: [
        [
          Sequelize.fn('SUM', Sequelize.col('amount')), 'total_amount',
        ],
        [
          Sequelize.fn('COUNT', Sequelize.col('donation_id')), 'total_donor',
        ],
      ],
    });
    data = {
      amount: parseInt(data.get('total_amount'), 10),
      donor: parseInt(data.get('total_donor'), 10),
    };
    return data;
  };

  return Donation;
}
