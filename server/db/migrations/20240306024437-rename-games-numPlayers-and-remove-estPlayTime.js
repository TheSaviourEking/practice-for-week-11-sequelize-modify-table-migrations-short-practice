'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    try {
      await queryInterface.renameColumn('Games', 'numPlayers', 'maxPlayers');
      await queryInterface.removeColumn('Games', 'estPlayTime')
    } catch (err) { console.error(err); throw (err) }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('Games', 'maxPlayers', 'numPlayers');
    await queryInterface.addColumn('Games', 'estPlayTime', { type: Sequelize.DATE });

  }
};
