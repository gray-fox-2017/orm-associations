'use strict';
module.exports = function(sequelize, DataTypes) {
  var studentteacher = sequelize.define('studentteacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        studentteacher.belongsTo(models.Student, {
          foreignKey: "studentId"
        }),
          studentteacher.belongsTo(models.Teacher, {
            foreignKey: "teacherId"
          });
      }
    }
  });
  return studentteacher;
};
