'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_Teacher = sequelize.define('Student_Teacher', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student_Teacher;
};