'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING    
  }, {
    tableName: 'users',
    freezeTableName: true,
    paranoid: true,
    classMethods: {
      associate: function(models) {
       User.belongsToMany(models.Usersmeta, {
          onDelete: "CASCADE",
          through: "favorites",
          hooks: true,
          foreignKey: "user_id"
        })
      }
    }
  });
  return User;
};