'use strict';
module.exports = function(sequelize, DataTypes) {
  var students_teachers = sequelize.define('students_teachers', {
    id_teacher: DataTypes.INTEGER,
    id_student: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        students_teachers.belongsTo(models.Student, {
          foreignKey: "id_student"
        }),
        students_teachers.belongsTo(models.Teacher, {
          foreignKey: "id_teacher"
        })
        // associations can be defined here
      }
    }
  });
  return students_teachers;
};
