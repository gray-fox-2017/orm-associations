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
    return queryInterface.bulkInsert('Teachers', [{
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: 089428482713,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Rahib Akhbar',
      email: 'rahib@gmail.com',
      phone: 089428482713,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Rizal Shamsudin',
      email: 'rizal@gmail.com',
      phone: 089434512713,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Brian O Corner',
      email: 'corner@gmail.com',
      phone: 089675382713,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'White Dove',
      email: 'white@gmail.com',
      phone: 089428484592,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mulyadi Ryan',
      email: 'yadi@gmail.com',
      phone: 086758382713,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Priambodo Kurniawan',
      email: 'iamsea@gmail.com',
      phone: 089484938413,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jame Sirait',
      email: 'james@gmail.com',
      phone: 089428477436,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mark Josh',
      email: 'marks@gmail.com',
      phone: 089444572713,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
