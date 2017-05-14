'use strict'

const repl = require('repl')
const replServer = repl.start({prompt:">"})

const db = require('./models')

function insertTeacher(objTeacher){
  db.Teacher.create({
    name: objTeacher.name,
    email: objTeacher.email,
    phone: objTeacher.phone
  })
  .then(()=>{
    console.log(`Data Added`);
  }).catch((err)=>{
    console.log(err);
  })
}


function insertStudent(objStudent){
  db.Student.create({
    first_name: objStudent.first_name,
    last_name: objStudent.last_name,
    birth_date: objStudent.birth_date,
    gender: objStudent.gender,
    email: objStudent.email,
    height: objStudent.height,
    phone: objStudent.phone
  })
  .then(()=>{
    console.log(`Data Added`);
  }).catch((err)=>{
    console.log(err);
  })
}

//

function insertStudentTeacher(teacherId, studentId){
  db.StudentTeacher.create({
    student_id: studentId,
    teacher_id: teacherId
  })
  .then(()=>{
    console.log(`Data Added`);
  }).catch((err)=>{
    console.log(err);
  })
}


function studentsHasTeacher(){
  db.Student.findAll()
  .then(students =>{
    students.forEach((student)=>{
      student.getTeachers()
      .then (teacher =>{
        console.log(`${teacher.name}`);
          console.log(`${student.first_name}`);
      })
    })
  })
}

// function teacherHasStudent(){
//   db.Teacher.findAll()
//   .then(students =>{
//     students.forEach((student)=>{
//       student.geTeachers()
//       .then (Teachers =>{
//         console.log(`${student.first_name}`);
//         Teachers.forEach((teacher)=>{
//           console.log(`${teacher.name}`);
//         })
//       })
//     })
//   })
// }

replServer.context.insertStudent = insertStudent;
replServer.context.insertTeacher = insertTeacher;
replServer.context.insertStudentTeacher = insertStudentTeacher;
replServer.context.studentsHasTeacher = studentsHasTeacher;
// replServer.context.teacherHasStudent = teacherHasStudent;
