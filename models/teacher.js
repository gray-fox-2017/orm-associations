'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email:{
      type : DataTypes.STRING,
      validate :{
        isEmail : {
          args : true,
          msg : "Must email format"
        },
        isUnique : {
          function(value, next) {
            if(value){
              Students.findOne({ where: { email: value }})
              .then(function(Student) {
                if(Student){
                  next("Email already taken");
                } else {
                  next()
                }
              })
              .catch(function(err) {
                next(err.message)
              })
            }
          }
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Students,{foreignKey:models.Students.TeacherId ,sourceKey: Teacher.id})
      }
    }
  });
  return Teacher;
};
