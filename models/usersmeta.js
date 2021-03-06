'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usersmeta = sequelize.define('Usersmeta', {
    content: DataTypes.STRING,
    content_type: DataTypes.STRING    
  }, {
    freezeTableName: true,
    paranoid: true,
    classMethods: {
      associate: function(models) {
       Usersmeta.belongsToMany(models.User, {
          onDelete: "CASCADE",
          through:"favorites",
          hooks: true,
          foreignKey: "content_id"
        })
      }
    }
  });
  return Usersmeta;
};