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
    return queryInterface.bulkInsert('StudentTeachers', [{
      studentId: 1,
      teacherId: 1
    },{
      studentId: 1,
      teacherId: 2
    },{
      studentId: 1,
      teacherId: 3
    },{
      studentId: 1,
      teacherId: 5
    },{
      studentId: 1,
      teacherId: 7
    },{
      studentId: 1,
      teacherId: 8
    },{
      studentId: 1,
      teacherId: 9
    },{
      studentId: 1,
      teacherId: 10
    },{
      studentId: 2,
      teacherId: 2
    },{
      studentId: 2,
      teacherId: 3
    },{
      studentId: 2,
      teacherId: 4
    },{
      studentId: 2,
      teacherId: 5
    },{
      studentId: 2,
      teacherId: 6
    },{
      studentId: 2,
      teacherId: 7
    },{
      studentId: 2,
      teacherId: 10
    }], {})
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
