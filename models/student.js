'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        student.belongsToMany(models.Teacher,{
          through: 'StudentTeacher',
          foreign_key: 'student_id'
        })
      }
    }
  });
  return student;
};