'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Incorect format email'
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
    phone: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student, {through: 'students_teachers', foreignKey: 'id_teacher'})
      },
      getAll: function(models){
        Teacher.findAll()
        .then(teachers => {
          models(teachers)
        })
      }
    }
  });
  return Teacher;
};
