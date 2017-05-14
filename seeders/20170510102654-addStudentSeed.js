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
    return queryInterface.bulkInsert('Students',[{
      firstName: 'aldy',
      lastName: 'andika',
      birthDate: '1990-07-17',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'aldi',
      lastName: 'andika',
      birthDate: '1990-08-17',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'andi',
      lastName: 'aldy',
      birthDate: '1991-07-18',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'sidiq',
      lastName: 'rider',
      birthDate: '1992-08-19',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'rider',
      lastName: 'sidiq',
      birthDate: '',
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
