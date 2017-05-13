'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    tinggi_badan:{
      type: DataTypes.INTEGER,
      validate: {
        min:{
          args: 150,
          msg: "Height must be more than 150"
        }
      }
    },
    birtdate: DataTypes.DATE,
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Email format incorrect"
        },
        isUniqued: function (value, next) {
          Student.findAll({
            where: {
              email: value
            }
          }).then(function (data) {
            if(data.length > 0) {
              return next('Data already exist');
            }
            return next();
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: false,
            msg: "Phone not allow alphanumeric"
        },
        isNumeric: {
          args: true,
          msg: "Phone not allow letters"
        },
        len:{
          args:[10,13],
          msg: "Phone length must be 10-13"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // Student.hasMany(models.student_teacher);// masukin id student ke student_teachers
        Student.belongsToMany(models.Teacher, {through: "student_teacher", foreignKey: 'studentId'});// bisa juga pake FK dsni
        // associations can be defined here
      },
      getAllData: function(callback){
        Student.findAll().then(function(data){
          data.forEach((value) => {
            value.full_name = value.first_name + value.last_name
          });
          return callback(data)
        });
      }

    },
    instanceMethods:{
      getfullName:function(){
        return `${this.first_name} ${this.last_name}`
      },
      getAge:function(){
        let now = new Date();
        return now.getFullYear() - this.birtdate.getFullYear();
      }
    }
  });
  return Student;
};
