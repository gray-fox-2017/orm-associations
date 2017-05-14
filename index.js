"use strict"
const db = require('./models');
const repl = require('repl');
const replServer = repl.start({
  prompt:'Orm Association>> '
})

function getAllStudent() {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(student.firstName)//.getFullName());
    })
  })
}

function getAllTeacher() {
  db.Teacher.findAll()
  .then(teachers => {
    teachers.forEach(teacher => {
      console.log(teacher.name);
    })
  })
}

function getAllStudentTeacher() {
  db.StudentTeacher.findAll()
  .then(studentteachers => {
    studentteachers.forEach(studentteacher => {
      console.log(studentteacher.id,studentteacher.student_id,studentteacher.teacher_id);
    })
  })
}

function insertStudent(firstname,lastname,birthdate,email,phone,height){
    db.Student.create({
      "firstName" : firstname,
      "lastName" : lastname,
      "birthDate" : birthdate,
      "email" : email,
      "phone" : phone,
      "height" : height
    })
    .then(() => {
      console.log('success!');
    })
    .catch((err) => {
      console.log(err.message);
    })
}

function insertTeacher(name,email,phone) {
    db.Teacher.create({
      "name" : name,
      "email" : email,
      "phone" : phone
    })
    .then(() => {
      console.log('success!');
    })
    .catch((err) => {
      console.log(err.message);
    })
}

function insertStudentTeacher(student_id,teacher_id) {
    db.StudentTeacher.create({
      "student_id" : student_id,
      "teacher_id" : teacher_id
    })
    .then(() => {
      console.log('success!');
    })
    .catch((err) => {
      console.log(err);
    })
}

function showAllStudent(){
  let callback = (rows)=>{
    rows.forEach((row)=>{
      console.log(`${row.id}|${row.firstName}|${row.lastName}|${row.birthDate}|${row.email}|${row.phone}|${row.height}`)
    })
  }
  db.Student.getAllData(callback)
}

function showAllTeacher(){
  let callback = (rows)=>{
    rows.forEach((row)=>{
      console.log(`${row.id}|${row.name}|${row.email}|${row.phone}`)
    })
  }
  db.Teacher.getAllData(callback)
}

function showStudentsTeachers(){
  db.Student.findAll()
  .then(students=>{
    students.forEach(student=>{
      student.getTeachers()
      .then(teachers=>{
        teachers.forEach(teacher=>{
          console.log(`${student.firstName}|${teacher.name}`);
        })
      })
    })
  })
}


replServer.context.getAllStudent = getAllStudent
replServer.context.getAllTeacher = getAllTeacher
replServer.context.getAllStudentTeacher = getAllStudentTeacher
replServer.context.insertStudent = insertStudent
replServer.context.insertTeacher = insertTeacher
replServer.context.insertStudentTeacher = insertStudentTeacher
replServer.context.showAllStudent = showAllStudent
replServer.context.showAllTeacher = showAllTeacher
replServer.context.showStudentsTeachers = showStudentsTeachers