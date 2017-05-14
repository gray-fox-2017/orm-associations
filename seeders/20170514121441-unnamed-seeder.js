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
      name: 'Hasan',
      email: 'hasannudin@gmail.com',
      phone: '085649784236',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Wanda',
      email: 'wahndaktauya@gmail.com',
      phone: '085789524672',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sunario',
      email: 'paknariyok@gmail.com',
      phone: '087894522348',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Agus',
      email: 'agustiansinggih@gmail.com',
      phone: '08576214589',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mulya',
      email: 'mauliatbayar@gmail.com',
      phone: '089965854212',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mawar',
      email: 'sebutsajamawar@gmail.com',
      phone: '082112211221',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lena',
      email: 'terlena@gmail.com',
      phone: '081365478954',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kyla',
      email: 'kylasantakdir@gmail.com',
      phone: '089865412789',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kyla',
      email: 'kylasantakdirgmail.com',
      phone: '089865412789',
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
