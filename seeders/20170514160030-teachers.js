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
      name: 'Nevin Selcuk',
      phone: '03123456789',
      email: 'nevin@selcuk.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Metin M',
      phone: '02123456789',
      email: 'metin@m.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Musa Omr',
      phone: '02123456780',
      email: 'musa@omr.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Hasan Baks',
      phone: '02123456779',
      email: 'hasan@baks.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Hasret Turkiye',
      phone: '02123466789',
      email: 'hasret@turkiye.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kelly Siregar',
      phone: '02123453789',
      email: 'kelly@siregar.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Recep Erdogan',
      phone: '02123726789',
      email: 'recep@erdogan.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Hasan Oktori',
      phone: '03563456789',
      email: 'hasan@oktori.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'John Ratuanak',
      phone: '07823456789',
      email: 'john@ratuanak.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Guru Kursus',
      phone: '02123456909',
      email: 'guru@kursus.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }],{});
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
