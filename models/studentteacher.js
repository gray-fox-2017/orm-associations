'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student, {
          foreignKey: "studentId"
        }),
        StudentTeacher.belongsTo(models.Teacher, {
          foreignKey: "teacherId"
        })
      }
    }
  });
  return StudentTeacher;
};