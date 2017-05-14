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
    return queryInterface.bulkInsert('StudentTeachers', [
      {studentId: 5, teacherId:1, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 5, teacherId:2, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 5, teacherId:5, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 2, teacherId:6, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 2, teacherId:8, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 2, teacherId:7, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 3, teacherId:3, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 3, teacherId:1, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 4, teacherId:4, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 4, teacherId:2, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 5, teacherId:8, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 6, teacherId:4, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 6, teacherId:3, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 6, teacherId:2, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 2, teacherId:3, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 3, teacherId:6, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 3, teacherId:7, createdAt: new Date(), updatedAt: new Date()},
      {studentId: 6, teacherId:8, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('StudentTeachers', null, {});
  }
};
