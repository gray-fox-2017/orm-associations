"use strict"

const db = require('./models');

function createThrough(object) {
  db.StudentTeacher.create(object)
  .then(() => {
    console.log("Data created")
  })
  .catch(err => {
    console.log(err);
  })
}

function createTeacher(object) {
  db.Teacher.create(object)
  .then(() => {
    console.log("Data created")
  })
  .catch(err => {
    console.log(err.message);
  })
}

function createStudent(object) {
  db.Student.create(object)
  .then(() => {
    console.log("Data created")
  })
  .catch(err => {
    console.log(err.message);
  })
}

function showTeachers() {
  db.Teacher.findAll()
  .then(teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then(students => {
        console.log(`Guru ini ${teacher.name}, muridnya:`)
        students.forEach(student => {
          console.log(student.name)
        })
      })
    })
  })
}

function showStudents() {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      student.getTeachers()
      .then(teachers => {
        console.log(`Murid ini ${student.name}, gurunya:`)
        teachers.forEach(teacher => {
          console.log(teacher.name)
        })
      })
    })
  })
}


showTeachers()
showStudents()
// createTeacher({name: "Budianto", phone: "08123456172", email:"budi@google.com"})
// createTeacher({name: "Supriyadi", phone: "0823717231", email:"supri@google.com"})
// createTeacher({name: "Andri", phone: "082371712331", email:"andri@google.com"})x
// createTeacher({name: "Anto", phone: "08123566172", email:"anto@google.com"})
// createTeacher({name: "Susi", phone: "08237178231", email:"susi@google.com"})
// createTeacher({name: "Ahmad", phone: "082371719331", email:"ahmad@google.com"})
// createTeacher({name: "Tanto", phone: "08123436172", email:"tanto@google.com"})
// createTeacher({name: "Luna", phone: "08237172531", email:"luna@google.com"})
// createTeacher({name: "Tantri", phone: "0823717172331", email:"tantri@google.com"})

// createStudent({name: "William", phone: "01839819228", email: "will@i.am", teacherId: 1});
// createStudent({name: "Sandi", phone: "083924918923", email: "sandi@google.com", teacherId: 1});
// createStudent({name: "Boy", phone: "0839262218923", email: "boy@google.com"});
// createStudent({name: "Sindi", phone: "0839262278923", email: "sindi@google.com"});
// createStudent({name: "Tuti", phone: "083926221893", email: "tuti@google.com"});
// createStudent({name: "Yulia", phone: "0839232218923", email: "yulia@google.com"});
// createStudent({name: "Kun", phone: "0839262218923", email: "kun@google.com"});
// createStudent({name: "Celi", phone: "0859262218923", email: "celi@google.com"});
// createStudent({name: "Andre", phone: "083243818923", email: "andre@google.com"});