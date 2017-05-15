"use strict"

const db = require('./models');

function createConj(obj) {
  db.StudentTeacher.create(obj)
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
        console.log(`Student ${student.getFullName()}, being teached by:`)
        teachers.forEach(teacher => {
          console.log(teacher.name)
        })
      })
    })
  })
}

showStudents()