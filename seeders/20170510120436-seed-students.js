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
      first_name: 'James',
      last_name: 'Sraun',
      email: 'james@haha.com',
      phone: '081212121212',
      id_teacher: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name: 'Rachel',
      last_name: 'Warinussy',
      email: 'Rachel@haha.com',
      phone: '081232553443',
      id_teacher: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    return queryInterface.bulkInsert('Students',arr, {});
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
