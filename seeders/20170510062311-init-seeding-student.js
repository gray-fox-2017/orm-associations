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
    return queryInterface.bulkInsert('Students', [{
      firstname: 'John',
      lastname: 'Doel',
      birthdate: new Date ('1995-10-23'),
      email : 'johndoe@gmail.com',
      phone: '0824242328908',
      teacher_id : 3,
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Agus',
      lastname: 'Mulyodu',
      birthdate: new Date('1993-04-06'),
      email : 'agusmul@gmail.com',
      phone: '08314568123',
      teacher_id : 3,
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Widodo',
      lastname: 'Gesat',
      birthdate: new Date('1992-09-10'),
      email : 'widgesa@gmail.com',
      phone: '08215677865',
      teacher_id : 3,
      createdAt : new Date(),
      updatedAt: new Date()
    },{
      firstname: "Kania",
      lastname: "Deinhard",
      birthdate: new Date("1994-08-05"),
      email: "kdeinhard0@wufoo.com",
      phone: "82126452522",
      teacher_id: 7,
      createdAt : new Date(),
      updatedAt: new Date()
    }, {
      firstname: "Dirk",
      lastname: "Glazier",
      birthdate: new Date("1994-11-12"),
      email: "dglazier1@live.com",
      phone: "82160631440",
      teacher_id: 6,
      createdAt : new Date(),
      updatedAt: new Date()
    }, {
      firstname: "Marco",
      lastname: "Lattin",
      birthdate: new Date("1993-11-16"),
      email: "mlattin2@usa.gov",
      phone: "82141463200",
      teacher_id: 1,
      createdAt : new Date(),
      updatedAt: new Date()
    }, {
      firstname: "Frederick",
      lastname: "Mordey",
      birthdate: new Date("1994-04-28"),
      email: "fmordey3@wikia.com",
      phone: "82196071619",
      teacher_id: 4,
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
    return queryInterface.bulkDelete('Students', [{
      firstname: 'John',
      lastname: 'Doe',
      birthdate: new Date('1995-10-23'),
      email : 'johndoe@gmail.com',
      phone: '08215678908'
    },{
      firstname: 'Agus',
      lastname: 'Mulyadi',
      birthdate: new Date('1993-04-06'),
      email : 'agusmul@gmail.com',
      phone: '08314568123'
    },{
      firstname: 'Widodo',
      lastname: 'Gesit',
      birthdate: new Date('1992-09-10'),
      email : 'widges@gmail.com',
      phone: '08215677865'
    }], {});
  }
};
