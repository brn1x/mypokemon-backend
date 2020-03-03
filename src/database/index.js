const Sequelize = require('sequelize')
const dbConfig = require('../config/config')

const Pokemon = require('../models/Pokemon')
const Type = require('../models/Type')
const Move = require('../models/Move')

const database = new Sequelize(dbConfig)

Pokemon.init(database)
Type.init(database)
Move.init(database)

Pokemon.associate(database.models)
Type.associate(database.models)
Move.associate(database.models)

module.exports = database
