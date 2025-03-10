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
      await queryInterface.addConstraint('Colors', {
        fields: ['name'],
        type: 'unique',
        name: 'unique_color_name_constraint'
      });
    } catch (err) {
      console.error(err);
      throw (err);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Colors', 'unique_color_name_constraint')
  }
};
