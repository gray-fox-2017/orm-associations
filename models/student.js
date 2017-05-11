'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email must be in correct format"
        },
        isUnique: function(content, next) {
          Student.find({where: {email: content}, attributes: ['id']})
          .then((student) => {
            if(student && this.id !== student.id) {
              return next('Email already in use!')
            }
            return next();
          })
          .catch((err) => {return next(err)})
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsToMany(models.Teacher, {through: 'StudentTeachers'})
      }
    }
  });
  return Student;
};