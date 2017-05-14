'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.belongsToMany(models.student,{
          through: 'StudentTeachers',
          foreignKey: 'teacher_id'
        })
      }
    }
  });
  return Teacher;
};