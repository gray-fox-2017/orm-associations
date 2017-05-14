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
      email : 'johndoe@gmail.com',
      phone: '08215678908',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Agus Mulyadi',
      email : 'agusmul@gmail.com',
      phone: '08314568123',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Widodo Gesit',
      email : 'widges@gmail.com',
      phone: '08215677865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Bambang Joko',
      email : 'bamjok@gmail.com',
      phone: '08216787865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Mukidi',
      email : 'mukidi@gmail.com',
      phone: '08217543865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Mukadi',
      email : 'mukadi@gmail.com',
      phone: '08217657865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Soponyono',
      email : 'spnyno@gmail.com',
      phone: '08217537865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Widodo Bagus',
      email : 'widbag@gmail.com',
      phone: '07655677865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Entahlah',
      email : 'entah@gmail.com',
      phone: '08678977865',
      createdAt : new Date(),
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
    return queryInterface.bulkDelete('Teachers', [{
      name: 'John Doe',
      email : 'johndoe@gmail.com',
      phone: '08215678908',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Agus Mulyadi',
      email : 'agusmul@gmail.com',
      phone: '08314568123',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Widodo Gesit',
      email : 'widges@gmail.com',
      phone: '08215677865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Bambang Joko',
      email : 'bamjok@gmail.com',
      phone: '08216787865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Mukidi',
      email : 'mukidi@gmail.com',
      phone: '08217543865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Mukadi',
      email : 'mukadi@gmail.com',
      phone: '08217657865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Soponyono',
      email : 'spnyno@gmail.com',
      phone: '08217537865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Widodo Bagus',
      email : 'widbag@gmail.com',
      phone: '07655677865',
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      name: 'Entahlah',
      email : 'entah@gmail.com',
      phone: '08678977865',
      createdAt : new Date(),
      updatedAt: new Date()
    }], {});
  }
};
