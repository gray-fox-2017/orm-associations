'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.belongsToMany(models.Student, { through: models.StudentTeacher, foreignKey: 'student_id' });
      }
    }
  });
  return Teacher;
};
