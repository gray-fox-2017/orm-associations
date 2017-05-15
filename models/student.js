'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    id_teacher: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      //  Student.belongsTo(models.Teacher,{foreignKey:'id_teacher'})
        Student.belongsToMany(models.Teacher,{through:'StudentTeachers',foreignKey:'id_student'})
      }
    }
  });
  return Student;
};
