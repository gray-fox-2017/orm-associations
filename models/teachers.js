'use strict';
module.exports = function(sequelize, DataTypes) {
  var teachers = sequelize.define('teachers', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          teachers.find({
            where: {email: value},
            attributes: ['id']
          })
          .done(function(error, user) {
            if (error)
                // Some unexpected error occured with the find method.
                return next('Email udah dipake bro!');
            if (user)
                // We found a user with this email address.
                // Pass the error to the next method.
                return next('Email udah dipake bro!');
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //User.belongsToMany(Project, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId' })
        teachers.belongsToMany(models.students, {through: 'student_teachers', foreignKey: 'id_teacher'})
      }
    }
  });
  return teachers;
};