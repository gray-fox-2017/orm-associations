'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('Student-Teacher', {
    TeacherId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student)
        StudentTeacher.belongsTo(models.Teacher)
      }
    }
  });
  return StudentTeacher;
};