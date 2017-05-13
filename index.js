"use strict"
const db = require('./models');
const repl = require('repl');

let replServer = repl.start('>> ');

// var all = db.Student.getAllData(function(Students){
//   Students.forEach(function(Student){
//       console.log(`id        : ${Student.id}`)
//       console.log(`First Name: ${Student.first_name}`);
//       console.log(`Last Name : ${Student.last_name}`);
//       console.log(`gender    : ${Student.gender}`);
//       console.log(`Birtdate  : ${Student.birtdate}`);
//       console.log(`Email     : ${Student.email}`);
//       console.log(`phone     : ${Student.phone}`);
//       console.log(`tinggi_badan: ${Student.tinggi_badan}`);
//       console.log(`Age       : ${Student.getAge()}\n`);
//   });
// });

var all = db.Teacher.getAllData(function(Teachers){
  Teachers.forEach(function(Teacher){
      console.log(`id        : ${Teacher.id}`)
      console.log(`Name      : ${Teacher.name}`);
      console.log(`email     : ${Teacher.email}`);
      console.log(`phone     : ${Teacher.phone}`);
  });
});

function createStudent(){
  db.Student.create({
    first_name: 'rama',
    last_name: 'depok' ,
    gender:'pria' ,
    birtdate: '1988-04-18',
    email: 'rama@yahoo.com',
    phone: '1234577834' ,
    tinggi_badan: 165 })
  .then(Student => console.log('data already added!'))
  .catch(err => console.log(err.message))
}


function createTeacher(){
  db.Teachers.create({
    name:'norma',
    email: 'norma@yahoo.com',
    phone: 8758378957 })
  .then(Teachers => console.log('data already added'))
  .catch(err => console.log(err.message));
}

function assignStudent() {
  db.student_teacher.create({
    studentId : 3,
    teacherId : 1 })
  .then(student_teacher => console.log('data already assign'))
  .catch(err => console.log(err.message));
}


// function findTeacher(studentId) {
//   db.Students.findById(studentId).then(function (find) {
//     find.getTeachers().then(function (data) {
//       console.log(`Teacher(s): \n`);
//       data.forEach(function (get) {
//         console.log(`Id: ${get.id}`);
//         console.log(`Name: ${get.name}`);
//         console.log(`Email: ${get.email}\n`);
//       })
//     })
//   })
// }
// findTeacher(3);
//
// function findStudent(teacherId) {
//   db.Teachers.findById(teacherId).then(function (find) {
//     find.getStudents().then(function (data) {
//       console.log(`Student(s): \n`);
//       data.forEach(function (get) {
//         console.log(`Id: ${get.id}`);
//         console.log(`First Name: ${get.first_name}`);
//         console.log(`Last Name: ${get.last_name}\n`);
//       })
//     })
//   })
// }
// findStudent(1);

replServer.context.createStudent = createStudent;
replServer.context.createTeacher = createTeacher;
replServer.context.assignStudent = assignStudent;
// replServer.context.findTeacher = findTeacher;
