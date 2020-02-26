const Sequelize = require('sequelize')
const dbConfig = require('../config/config')

const dbConnection = new Sequelize(dbConfig)

module.exports = dbConnection
