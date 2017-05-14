'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     uniqe: true,
     validate: {
       isEmail: true,
       isUnique: function(value, next){
         Student.find({
           where: {
             email: value
           }
         }).then((err)=> {
           if(err)
             return next(`Email is already in use!`);
           next();
         })
       }
     }
    },
  height: DataTypes.INTEGER,
  phone: {
   type: DataTypes.STRING,
   allowNull: false,
   validate: {
     isAlphanumeric: function (value, next) {
       let numPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
       if(numPhone.test(value))
         next();
       return next('Format phone not valid');
     }
   }
  }
}, {
    classMethods: {
          associate: function(models) {
            Student.belongsToMany(models.Teacher,{
              through: 'StudentTeachers',
              foreign_key: 'student_id'
            })
          }
        }
      });
      return Student;
    };
