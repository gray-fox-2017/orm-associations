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
    return queryInterface.bulkInsert('studentteachers', [{
      studentId: 1,
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 1,
      teacherId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 2,
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 2,
      teacherId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 1,
      teacherId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 1,
      teacherId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 1,
      teacherId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      studentId: 1,
      teacherId: 6,
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
