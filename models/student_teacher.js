'use strict';
module.exports = function(sequelize, DataTypes) {
  var student_teacher = sequelize.define('student_teacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        student_teacher.belongsTo(models.Student); // ngasih id student ke student_teacher
        student_teacher.belongsTo(models.Teacher);
        // associations can be defined here
      }
    }
  });
  return student_teacher;
};
