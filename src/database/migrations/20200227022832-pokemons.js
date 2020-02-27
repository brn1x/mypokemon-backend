'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pokedex_number: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      attack: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      defense: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sp_atk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sp_def: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      speed: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pokemons')
  }
}
