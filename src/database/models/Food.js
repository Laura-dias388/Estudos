module.exports = (sequelize, DataTypes) => sequelize.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull: false,
  },
  name: {
    type : DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  // underscored: true,
  tableName:'foods',
  timestamps: false,
});