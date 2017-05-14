"use strict"
const db = require ('./models')
const repl = require('repl')
const replServer = repl.start({ prompt : ' Type Your Choice : ' })

// function fullNameStudent() {
//   db.Students.findAll()
//   .then(student => {
//     student.forEach((data) =>{
//       console.log("\n" +"Nama : "+ data.getFullName()+ ", Age = " + data.getAge());
//     })
//   })
// }

// function getDataAll() {
//   db.Students.findAll()
//   .then(murid=>{
//     murid.forEach((datamurid)=>{
//       console.log("No.ID " +datamurid.id);
//       console.log("Nama Lengkap : " +datamurid.getFullName());
//       console.log("First Name : " +datamurid.first_name);
//       console.log("Last Name :" +datamurid.last_name);
//       console.log("Tinggi Badan : "+datamurid.height);
//       console.log("Umur : " +datamurid.getAge()+" Tahun");
//       console.log();
//     })
//   })
// }


function addStudent(first_name,last_name,email,height,birthdate,phone) {
  db.Students.create({
    first_name : first_name,
    last_name : last_name,
    email : email,
    height : height,
    birthdate : birthdate,
    phone : phone
  }).then(function(){
    console.log(`Data Berhasil dinput`);
  }).catch(function(err){
    console.log(err.message);
  })
}


//add new
let insertTeacher = (teacher) =>{
  db.Teacher.create({
    name : teacher.name,
    email : teacher.email,
    phone : teacher.phone
  })
  .then(teacher =>{
    console.log(JSON.stringify(teacher.toJSON(),null,2));
  })
  .catch((err) => {
    console.log(err.message);
  })
  return `Inser Teacher Success`
}

let insertStudentTeacher =(student_id,teacher_id) =>{
  db.StudentTeacher.create({
    student_id : student_id,
    teacher_id : teacher_id
  })
  .then(studentteacher =>{
    console.log(JSON.stringify(studentteacher.toJSON(),null,2));
  })
  .catch((err) => {
    console.log(err.message);
  })
  return `Inser Student-id and Teacher-id Success`
}

let getStudentTeacher = () =>{
  db.Students.findAll()
    .then(students =>{
      students.forEach(murid =>{
        murid.getTeachers()
          .then(gurus =>{
            console.log(`-- ${murid.name} --`);
              gurus.forEach(guru =>{
                console.log(`-- ${guru.name}`);
              })
          })
      })
    })
    .catch((err) => {
      console.log(err.message);
    })
    return `Get Students and their Teachers`
}

let getTeacherStudent = ()=>{
  db.Teacher.findAll()
    .then(teachers =>{
      teachers.forEach(teacher =>{
        teacher.getStudents()
          .then(students =>{
            console.log(`--${teacher.name} --`);
            students.forEach(stuent =>{
              console.log(`-- ${student.name} --`);
            })
          })
      })
    })
    .catch((err) => {
      console.log(err.message);
    })
    return `Get teachers and their Students`
}

function Help() {
  console.log("- fullNameStudent()");
  console.log("- getDataAll()");
  console.log("- addStudent()");
}
// replServer.context.fullNameStudent = fullNameStudent
// replServer.context.getDataAll = getDataAll
// replServer.context.addStudent = addStudent
// addStudent('Dara','Manis','ambo@yahoo.com','170','1985-10-10','085611236728')
replServer.context.Help = Help
