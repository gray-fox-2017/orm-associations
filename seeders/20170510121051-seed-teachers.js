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
    let arr=[{
      name: 'Budi',
      email: 'budi@haha.com',
      phone: '081212121212',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anton',
      email: 'anton@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ani',
      email: 'ani@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Yuni',
      email: 'Yuni@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Vani',
      email: 'Vani@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anton',
      email: 'anton@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tono',
      email: 'tono@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Toni',
      email: 'toni@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Selly',
      email: 'selly@haha.com',
      phone: '081232553443',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Teachers',arr, {});
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
