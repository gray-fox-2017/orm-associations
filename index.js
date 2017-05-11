"use strict"

const db = require('./models')

// function getAll() {
//   db.students.findAll()//{
//   //   where: {id: 5}
//   // })
//   .then(students => {
//     students.forEach(students => {
//       console.log(students.getFullname());
//       //console.log(students[0].getFullname());
//     })
//   })
// }

function getAge() {
  db.students.findAll()
  .then(students => {
    students.forEach(students => {
      console.log(students.getAge());
    })
  })
}
var all = db.students.getAllData(function(students) {
  students.forEach(function(students) {
    console.log(`ID         :${students.id}`);
    console.log(`FIRS TNAME :${students.first_name}`);
    console.log(`LAST NAME  :${students.last_name}`);
    console.log(`GENDER     :${students.gender}`);
    console.log(`BIRTHDAY   :${students.birthday}`);
    console.log(`EMAIL      :${students.email}`);
    console.log(`PHONE      :${students.phone}`);
    console.log(`HEIGHT     :${students.height}`);
    console.log(`FULL NAME  :${students.full_name}`);
    console.log('----------------------------------------------------------');
    //console.log(`AGE        :${this.age()}`);
    //console.log(this.getAge());
  })
  console.log('\n');



})
console.log('AGE        :'+getAge());
//getAge()
// getAll()
//
//console.log("AGE      :"+getAge());
//getAge()


function addPerson() {
  //let tes = parseInteger()
  db.students.create({
    first_name : 'Wahyu',
    last_name  : 'Siok',
    gender     : 'laki-laki',
    birthday   : new Date('1996-08-26'),
    email      : 'wahyus@gmail.com',
    phone      : 82252261217,
    height     : 175,
    createdAt  : new Date(),
    updatedAt  : new Date()
  })
  .then(students=> {
    console.log('success');
  })
  .catch(err => {
    console.log("errornya : "+err.message);
  })
}

function addTeacher() {
  //let tes = parseInteger()
  db.teachers.create({
    name       : 'jisam',
    email      : 'su@gmail.com',
    phone      : 089663425838,
    createdAt  : new Date(),
    updatedAt  : new Date()
  })
  .then(students=> {
    console.log('success');
  })
  .catch(err => {
    console.log("errornya : "+err.message);
  })
}

function relasi() {
  //let tes = parseInteger()
  db.student_teachers.create({
    id_student :1,
    id_teacher :3,
    createdAt  : new Date(),
    updatedAt  : new Date()
  })
  .then(students=> {
    console.log('success');
  })
  .catch(err => {
    console.log("errornya : "+err.message);
  })
}

function MyTeacher(id) {
  db.students.findOne({
      where: {
        id: id
      }
    })
    .then(function(students) {
      console.log(`${students.first_name} has teachers: `);
      students.getTeachers()
        .then(function(teachers) {
          teachers.forEach(function(teachers) {
            console.log(`name :${teachers.name} | email : ${teachers.email}`);
          })
        })
    })
}

//addPerson()

const repl = require('repl')

let replServer = repl.start('>>')
//replServer.context.getAge = getAge()
replServer.context.addPerson = addPerson
replServer.context.addTeacher = addTeacher
replServer.context.relasi = relasi
replServer.context.MyTeacher = MyTeacher
