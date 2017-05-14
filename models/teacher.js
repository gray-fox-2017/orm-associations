'use strict';

module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher',
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          msg: "Email tidak sesuai format"
        },
        isUnique: function (value,next){
          if(value){
            Teacher
            .find({ where: {email:value }})
            .then(function (teacher) {
              if (teacher) next ("Email sudah ada");
              else next();
            }).error(function (err) {
              next(err.message);
            });
          }

        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /\d{10,13}/i,
          msg: "Phone harus berupa angka"
        },
      }
    },
    subject : DataTypes.STRING,
    address: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }
  , {
    classMethods: {
      associate: function(models) {
        Teacher.belongsToMany(models.Student, {through: 'StudentTeacher'});
        // Teacher.hasMany(models.Student,{foreignKey:'teacherID'});
      },
      getAllData: function() {
        console.log('===============================TEACHERS=================================')
        Teacher.findAll().then( (teachers) => {
          teachers.forEach((teacher)=>{
            console.log(`${teacher.name}|${teacher.email}|${teacher.phone}|${teacher.address}`);
            teacher.getStudents()
            .then((students)=>{
              students.forEach((student) => {console.log(`${teacher.name} guru dari murid: ${student.getFullName()}`) });
            })
          })
        });
      },
      insertTeacher: function(teacher) {
        Teacher.create(teacher).then(function(teacher) {
          // console.log(teacher.getFullName());
        }).catch(err => {
          console.log(err.message);
        });
      }
    }
  });
  return Teacher;
};