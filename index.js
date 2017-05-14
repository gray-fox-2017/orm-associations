"use strict"
var moment = require('moment');
let model = require('./models')
let faker = require('faker')
class Person {
  constructor(data) {
    this.name = data.name || 'John doe';
    this.email = data.email || 'john@mail.com';
    this.phone = data.phone || '01234';
  }
}
class Student extends Person {
  constructor(data) {
    super(data)
    this.birthdate = data.birthdate
  }
  addStudent(data) {
    model.Student.create({
        name: data.name,
        birthdate: data.birthdate,
        email: data.email,
        phone: data.phone
      })
      .then(function() {
        console.log(`${data.name} inserted`);
      })
      .catch(function(err) {
        console.log(err.message);
      })
  }
  generateFakerDataStudent(amont) {
    for (let i = 0; i < amont; i++) {
      this.addStudent({
        name: faker.name.findName(),
        birthdate: moment(faker.date.past())
          .format('DD-MM-YYYY'),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat()
      })
    }
  }
}
class Teacher extends Person {
  constructor(data) {
    super(data)
  }
  addTeacher(data) {
    model.Teacher.create({
        name: data.name,
        email: data.email,
        phone: data.phone
      })
      .then(function() {
        console.log(`${data.name} inserted`);
      })
      .catch(function(err) {
        console.log(err.message);
      })
  }
  generateFakerDataTeacher(amont) {
    for (let i = 0; i < amont; i++) {
      this.addTeacher({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat()
      })
    }
  }
}
let student = new Student(new Person({}))
let teacher = new Teacher(new Person({}))
// student.generateFakerDataStudent(9)
// teacher.generateFakerDataTeacher(9)
function whoIsMyTeacher(id) {
  model.Student.findOne({
      where: {
        id: id
      }
    })
    .then(function(student) {
      console.log(`${student.name} has teachers: `);
      student.getTeachers()
        .then(function(teachers) {
          teachers.forEach(function(teacher) {
            console.log(`name :${teacher.name} | email : ${teacher.email}`);
          })
        })
    })
}
whoIsMyTeacher(1)
