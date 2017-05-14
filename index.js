"use strict"

const db = require('./models')


var studentAll = () => {db.Student.getAll(function(Students) {
    Students.forEach(function(student){
      console.log('Student ID: ',student.id)
      console.log('Fullname: ', student.fullName)
      console.log('Birthday: ', student.birthday)
      console.log('email: ', student.email)
      console.log('Tinggi badan: ', student.tinggi_badan)
      console.log('Phone: ', student.phone)
      console.log('TeacherID: ', student.TeacherId)
      console.log('\n')
    })
  })
}
// studentAll()

function showStudents() {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      student.getTeachers()
      .then(teachers => {
        console.log(`Student ${student.fullName}, gurunya:`)
        teachers.forEach(teacher => {
          console.log(teacher.name);
        })
        console.log('\n');
      })
    })
  })
}
// showStudents()

function showTeachers() {
  db.Teacher.findAll()
  .then(teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then(students => {
        console.log(`Guru ${teacher.name} have students: `)
        students.forEach(student => {
          console.log(student.fullName);
        })
        console.log('\n');
      })
    })
  })
}
showTeachers()

function AddConjuntion(){
  db.students_teachers.create({
    id_student: 3,
    id_teacher: 5
  })
  .then(students => {
    console.log('berhasil ditambahkan');
  })
  .catch(err => console.log(err.message));
}
// AddConjuntion()

var studentUpdate = () => {
  db.Student.update(
    {TeacherId: 1},
    {where: {id: 1}}
  )
  .then(students => {
    console.log('berhasil ditambahkan');
  })
  .catch(err => console.log(err.message));
}
// studentUpdate()

function Add(){
  db.Student.create({
    first_name: 'Abdi',
    last_name: 'Badi',
    gender: 'L',
    birthday: new Date('1992-10-28'),
    email: 'badis@gmail.com',
    tinggi_badan: 168,
    phone: 0896436456672,
    TeacherId: 6
  })
  .then(students => {
    console.log('berhasil ditambahkan');
  })
  .catch(err => console.log(err.message));
}
// Add()


var teacherAll = () => {db.Teacher.getAll(function(Teachers) {
    Teachers.forEach(function(teacher){
      console.log('Student ID: ',teacher.id)
      console.log('Name: ', teacher.name)
      console.log('Phone: ', teacher.phone)
      console.log('Email: ', teacher.email)
      console.log('\n')
    })
  })
}
// teacherAll()
