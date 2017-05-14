'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'email yg betul!!'
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsTo(models.Student_Teacher, {through: 'student_teacher', foreignKey: 'teacher_id'});
      }
    }
  });
  return Teacher;
};