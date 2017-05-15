'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Already have an account with this email address.',
        fields: [sequelize.fn('lower', sequelize.col('email'))]
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is invalid or is already in our system.'
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Teacher.hasMany(models.Student,{foreignKey:'id_teacher'})
        Teacher.belongsToMany(models.Student,{through:'StudentTeachers',foreignKey:'id_teacher'})
      }
    }
  });
  return Teacher;
};
