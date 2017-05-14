'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
          StudentTeacher.belongsTo(models.Student,{foreignKey:'studentId'});
          StudentTeacher.belongsTo(models.Teacher,{foreignKey:'teacherId'});
      }
    }
  });
  return StudentTeacher;
};