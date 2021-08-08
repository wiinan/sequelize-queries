'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('address', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      user_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'users', key: 'id' }, onUpdate:'CASCADE', onDelete:'CASCADE' },
      zipcode: { type: Sequelize.STRING, allowNull: false },
      Street: { type: Sequelize.STRING, allowNull: false },
      number: { type: Sequelize.STRING, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('address')
  }
};
