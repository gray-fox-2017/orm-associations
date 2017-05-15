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
      id_student: 1,
      id_teacher: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_student: 1,
      id_teacher: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_student: 1,
      id_teacher: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_student: 2,
      id_teacher: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id_student: 2,
      id_teacher: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_student: 2,
      id_teacher: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('StudentTeachers', arr, {});
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
