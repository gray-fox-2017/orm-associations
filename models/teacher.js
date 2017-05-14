'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value,next){
          Student.find({
            where:{email:value}
          }).then(function(err){
            if(err){
              return next('email existed')
            } else {
            next()
            }
          })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate:{
        cekType:function(value){
          if(typeof value != 'string'){
            throw new Error('phone harus dalam string')
          }
        },
        cekValidasi:function(value){
          let cek=/[a-zA-Z]/g;
          if(cek.test(value)){
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number')
            } else {
              throw new Error('Phone not allow letter')
            }
          } else {
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number2')
            } else {
              if(value.length>13 || value.length<10){
                throw new Error('phone length must be 10-13')
              }
            }
          }
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student,{
          through: 'StudentTeachers',
          foreignKey: 'teacher_id'
        })
      },
      getAllData: (callback)=>{
        Teacher.findAll()
        .then(callback)
      }
    }
  });
  return Teacher;
};