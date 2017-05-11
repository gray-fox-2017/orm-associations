'use strict';
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define('students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          students.find({
            where: {email: value},
            attributes: ['id']
          })
          .done(function(error, user) {
            if (error)
                // Some unexpected error occured with the find method.
                return next('Email address already in use!');
            if (user)
                // We found a user with this email address.
                // Pass the error to the next method.
                return next('Email address already in use!');
            // If we got this far, the email address hasn't been used yet.
            // Call next with no arguments when validation is successful.
            next();
          });
        }
      }
    },
    phone :{
      type : DataTypes.INTEGER,
      validate : {
        isNumeric : true,
        isAlphanumeric: {
          args: false,
          msg: "Phone not allowed letters\nPhone not allowed alphanumeric"
        },
        len: function(value) {
          if (value.toString().length < 10 || value.toString().length > 13) {
            throw new Error('Nomormu salah bro, negara mana itu? Panjang Harus 10 - 13');
          }
        }

        //isAlphaNumeric : {args:false, msg:'gaboleh huruf!'}
      }
    },
    height : {
      type : DataTypes.INTEGER,
      validate : {
        min : {args: 150, msg : 'tinggi harus 150 keatas'}
      }
    }
    //height : DataTypes.INTEGER
    // },
    // phone: {
    //   type : DataTypes.INTEGER,
    //   validate : {
    //     len :{args:[10-13]},
    //     isAlpha :{args: true, msg : 'error'},
    //   }
    // },
    // height: {
    //   type : DataTypes.INTEGER,
    //   validate : {
    //     min : {args: 150, msg : 'error'},
    //   }
    // }
  }, {
    classMethods: { //static
      //untuk memodifikasi yang udah ada
      associate: function(models) {
        // associations can be defined here
        //teachers.belongsToMany(students, {through: 'student_teachers', foreignKey: 'id_teacher'})
        students.belongsToMany(models.teachers, {through: 'student_teachers', foreignKey: 'id_student'})

      },
      getAllData(callback) {
        students.findAll()
        .then(function(data) {
          data.forEach((value) => {
            value.full_name = `${value.first_name} ${value.last_name}`
          })
          return callback(data)
        })
      }
    },
    //function
    instanceMethods: { //
      //untuk yang ga ada
       getFullname: function() {
         return `Full Name : ${this.first_name} ${this.last_name}`
       },
       getAge: function() {
         let result = new Date().getFullYear() - this.birthday.getFullYear()
         return `Umur : ${result}`
       }
    }
  });
  return students;
};