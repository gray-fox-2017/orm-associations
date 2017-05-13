'use strict'

const repl = require('repl')
const replServer = repl.start('> ')

const db = require('./models')

let addStudent = (inputstudent) => {
  db.student.create({
    firstname: inputstudent.firstname,
    lastname: inputstudent.lastname,
    gender: inputstudent.gender,
    birthday: inputstudent.birthday,
    email: inputstudent.email,
    phone: inputstudent.phone,
    height: inputstudent.height
  })
  .then(inputstudent =>{
      console.log(`\nStudent: ${JSON.stringify(inputstudent.firstname)} ${JSON.stringify(inputstudent.lastname)} Added!`);

  })  
}

let addTeacher = (inputteacher) => {
  db.Teacher.create({
    name: inputteacher.name,
    email: inputteacher.email,
    phone: inputteacher.phone
  })
  .then(teachers=>{
      console.log(`\nTeacher: ${JSON.stringify(inputteacher.name)} Added!`);
  })
}

let addStudentTeacher = (student_id,teacher_id) => {
  db.StudentTeacher.create({
    student_id:student_id,
    teacher_id:teacher_id
  })
  .then(studentteachers =>{
      console.log(`${JSON.stringify(studentteachers.student_id)} Added to student\n${JSON.stringify(studentteachers.teacher_id)} Added to teacher`);
  })
}

let getStudentTeacher = () => {
  db.student.findAll()
  .then(students =>{
    students.forEach((dataS)=>{
      dataS.getTeachers()
      .then(teachers=>{
          console.log(`=======${dataS.firstname}=======`);
        teachers.forEach((dataT)=>{
          console.log(`=======${dataT.name}=======`);
        })
      })
    })
  })
}

let getTeacherStudent = () => {
  db.Teacher.findAll()
  .then(teachers =>{
    teachers.forEach((dataT)=>{
      dataT.getstudents()
      .then(students=>{
          console.log(`=======${dataT.name}=======`);
        students.forEach((dataS)=>{
          console.log(`=======${dataS.firstname}=======`);
        })
      })
    })
  })
}

replServer.context.addStudent = addStudent
replServer.context.addTeacher = addTeacher
replServer.context.addStudentTeacher = addStudentTeacher
replServer.context.getStudentTeacher = getStudentTeacher
replServer.context.getTeacherStudent = getTeacherStudent