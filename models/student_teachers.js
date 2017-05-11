'use strict';
module.exports = function(sequelize, DataTypes) {
  var student_teachers = sequelize.define('student_teachers', {
    id_student: DataTypes.INTEGER,
    id_teacher: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return student_teachers;
};