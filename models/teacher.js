'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Teacher.find({
            where: {
              Email: value
            },
            attributes: ["id"]
          }).done(function(user) {
            if (user) {
              return next("Email address already in use")
            }
            next()
          })
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student,{through:'Student-Teachers'})
      }
    }
  });
  return Teacher;
};