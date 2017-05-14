'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // StudentTeacher.belongsTo(models.Student, {foreignKey: 'student_id'})
        // StudentTeacher.belongsTo(models.Teacher, {foreignKey: 'teacher_id'})
      }
    }
  });
  return StudentTeacher;
};
