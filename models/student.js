'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({
              where: {
                email: value
              }
            })
            .then(function(error) {
              if (error) return next('Email address already in use!');
              next();
            });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 13]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsToMany(models.Teacher, {
          through: models.StudentTeacher,
          foreignKey: 'student_id'
        });
      },
      getAllData: function(callback) {
        let fullName = []
        Student.findAll()
          .then((rows) => {
            rows.forEach((row) => {
              let obj = {};
              obj['id'] = row.id;
              obj['firstname'] = row.firstname;
              obj['lastname'] = row.lastname;
              obj['name'] = row.getFullName();
              fullName.push(obj)
            })
            callback(fullName)
          })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function() {
        let today = new Date();
        let birthDate = new Date(this.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    }
  });
  return Student;
};
