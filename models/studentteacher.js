'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    id_student: DataTypes.INTEGER,
    id_teacher: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        //kenapa tetap jalan padahal asosiasinya dicomment????
        // StudentTeacher.belongsTo(models.Student,{foreignKey:'id_student'});
        // StudentTeacher.belongsTo(models.Teacher,{foreignKey:'id_teacher'})
      },
      createSt: function(nameStudent,nameTeacher,date=new Date()){
        sequelize.query(`insert into StudentTeachers (id_student,id_teacher,createdAt,updatedAt) values((select id from Students where first_name='${nameStudent}'),(select id from Teachers where name='${nameTeacher}'),'${date}','${date}')`,{type:sequelize.QueryTypes.SELECT})
        .then (data => {
            console.log(data);
        })
        .catch (err => {
          console.log(err);
        })
      }
    }
  });
  return StudentTeacher;
};
