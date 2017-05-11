'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email must be in correct format"
        },
        isUnique: function(content, next) {
          Teacher.find({where: {email: content}, attributes: ['id']})
          .then((teacher) => {
            if(teacher && this.id !== teacher.id) {
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
        Teacher.belongsToMany(models.Student, {through: 'StudentTeachers'})
      }
    }
  });
  return Teacher;
};