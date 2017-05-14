"use strict";

const db = require('./models');
const repl = require('repl');

let replServer = repl.start({
  prompt:`~ `,
  input: process.stdin,
  output: process.stdout
});

function createThrough(object) {
  db.studentteacher.create(object)
    .then(() => {
      console.log("Association is created");
    })
    .catch(err => {
      console.log(err);
    });
}

function createTeacher(object) {
  db.Teacher.create(object)
    .then(() => {
      console.log("Teacher is added");
    })
    .catch(err => {
      console.log(err.message);
    });
}

function createStudent(object) {
  db.Student.create(object)
    .then(() => {
      console.log("Student is added");
    })
    .catch(err => {
      console.log(err.message);
    });
}

function showTeachers() {
  db.Teacher.findAll()
    .then(teachers => {
      teachers.forEach(teacher => {
        teacher.getStudents()
          .then(students => {
            console.log(`Students of ${teacher.name} are:`);
            students.forEach(student => {
              console.log(`${student.first_name} ${student.last_name}`);
            });
          });
      });
    });
}

function showStudents() {
  db.Student.findAll()
    .then(students => {
      students.forEach(student => {
        student.getTeachers()
          .then(teachers => {
            console.log(`${student.first_name} ${student.last_name} is student of:`);
            teachers.forEach(teacher => {
              console.log(teacher.name);
            });
          });
      });
    });
}

//showTeachers();
//showStudents();
replServer.context.showTeachers = showTeachers;
replServer.context.showStudents = showStudents;
