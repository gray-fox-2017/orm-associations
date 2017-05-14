'use strict';

module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student',
  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail : {
          msg: "Email tidak sesuai format"
        },
        isUnique: function (value,next){
          if(value){
            Student
            .find({ where: {email:value }})
            .then(function (student) {
              if (student) next ("Email sudah ada");
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
    birthdate: DataTypes.DATE,
    tinggi:{
      type: DataTypes.INTEGER,
      validate:{
        min : {args:150,msg:'Tinggi minimum 150cm'}
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }
  , {
    getterMethods : {
      full_name : function() { return this.getFullName()},
      age: function(){return this.getAge();}
    },
    classMethods: {
      associate: function(models) {
        Student.belongsToMany(models.Teacher, {through: 'StudentTeacher'});
        // Student.belongsTo(models.Teacher,{foreignKey:'teacherID'});
      },
      getAllData: function() {
        Student.findAll().then( (students) => {
          students.forEach((student)=>{
            console.log(`${student.getFullName()}|${student.email}|${student.phone}|${student.getAge()}`);
            student.getTeachers().then((teachers)=> {
              teachers.forEach((teacher) => {console.log(`${student.getFullName()} adalah murid dari: ${teacher.name} di kelas ${teacher.subject}`)});
            });
          })
        });
      },
      insertStudent: function(student) {
        Student.create(student).then(function(student) {
          console.log(student.getFullName());
        }).catch(err => {
          console.log(err.message);
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function ()  {
        let currYear = new Date().getFullYear();
        let birthYear= new Date(`${this.birthdate}`).getFullYear() ;
        return (parseInt(currYear) - parseInt(birthYear))
      }
    }
  });
  return Student;
};