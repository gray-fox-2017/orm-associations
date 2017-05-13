'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail:{
          args:true,
          msg:"Email format incorrect"
        },
        isUniqued: (value,next) => {
          Teachers.findAll({ where: {email: value} })
          .then((data) => {
            if (data.length > 0) {
              return next("email already exist");
            }else {
              return next();
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        isAlphanumeric: {
          args: false,
          msg: "Phone must numeric"
        },
        isNumeric: {
          args:true,
          msg: "phone not allow letter"
        },
        len: {
          args: [10,13],
          msg: "phone length must be 10-13"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Teacher.hasMany(models.Student_teacher);
        Teacher.belongsToMany(models.Student,{through: "Student_teacher",foreignKey:'teacherId'});
        // associations can be defined here
      },

      getAllData: function(callback){
        Teacher.findAll().then(function(data){
          data.forEach((value) => {});
          return callback(data)
        });
      }

    }
  });
  return Teacher;
};
