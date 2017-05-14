'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert ('Teachers',[
      {name:'tea1',email:'tea1@teachmail.com',subject:'Mat',phone:'085813372797',address:'tau ah1', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea2',email:'tea2@teachmail.com',subject:'Fisika',phone:'085813372797',address:'tau ah2', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea3',email:'tea3@teachmail.com',subject:'Kimia',phone:'085813372797',address:'tau ah3', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea4',email:'tea4@teachmail.com',subject:'Sejarah',phone:'085813372797',address:'tau ah4', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea5',email:'tea5@teachmail.com',subject:'Akuntansi',phone:'085813372797',address:'tau ah5', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea6',email:'tea6@teachmail.com',subject:'Biologi',phone:'085813372797',address:'tau ah6', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea7',email:'tea7@teachmail.com',subject:'Ekonomi',phone:'085813372797',address:'tau ah7', createdAt:new Date(),updatedAt:new Date()},
      {name:'tea8',email:'tea8@teachmail.com',subject:'Sosiologi',phone:'085813372797',address:'tau ah8', createdAt:new Date(),updatedAt:new Date()}
    ],
    {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
