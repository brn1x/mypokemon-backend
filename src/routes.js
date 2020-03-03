const express = require('express')
const PokemonController = require('./controllers/PokemonController')
const TypeController = require('./controllers/TypeController')
const MoveController = require('./controllers/MoveController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('MyPokemon Backend')
})

/* Pokemon Routes */
routes.get('/api/pokemon', PokemonController.index)
routes.post('/api/pokemon', PokemonController.store)

/* Types Routes */
routes.get('/api/types', TypeController.index)
routes.post('/api/types', TypeController.store)

/* Moves Routes */
routes.get('/api/moves', MoveController.index)
routes.post('/api/moves', MoveController.store)

module.exports = routes
