'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
     type: DataTypes.STRING,
     allowNull: false,
     uniqe: true,
     validate: {
       isEmail: true,
       isUnique: function(value, next){
         Teacher.find({
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
        Teacher.belongsToMany(models.Student,{
          through: 'StudentTeachers',
          foreign_key: 'teacher_id'
        })
      }
    }
  });
  return Teacher;
};
