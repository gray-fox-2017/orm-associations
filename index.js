const db = require('./models');
const repl = require('repl');

//1 to many
// let all=() => {
//   db.Teacher.findAll()
//   .then (teachers => {
//     let n
//     teachers.map((teacher,i)=> {
//       //promise student
//       db.Student.findAll()
//       .then (students => {
//         console.log('\n')
//         console.log(`${i+1}.Guru: ${teacher.name}`);
//         students.map((student,j) => {
//           console.log(`${j+1}.Student: ${student.first_name}`)
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     });
//   })
//   .catch(err =>{
//     console.log(err);
//   });
// }

let allMurid = () => {
  db.Student.findAll()
  .then (students => {
    students.forEach(student => {
      student.getTeachers().
      then (teachers => {
        console.log('\n');
        console.log(`Murid: ${student.first_name} ${student.last_name}`);
        teachers.forEach(teacher => {
          console.log(`Guru: ${teacher.name}`);
        })
      })
    })
  })
}

let allGuru = () => {
  db.Teacher.findAll()
  .then (teachers => {
    teachers.forEach(teacher => {
      teacher.getStudents()
      .then (students => {
        console.log(`Guru: ${teacher.name}`);
        students.forEach(student => {
          console.log(`Murid: ${student.first_name} ${student.last_name}`);
        })
      })
    })
  })
}

let createStudentTeacher = (nameStudent,nameTeacher) => {
  db.StudentTeacher.createSt(nameStudent,nameTeacher)

}

var replServer = repl.start({
  prompt: '$ '
})


replServer.context.allMurid = allMurid
replServer.context.allGuru = allGuru
replServer.context.createStudentTeacher= createStudentTeacher
