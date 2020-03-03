const Pokemon = require('../models/Pokemon')
const Type = require('../models/Type')
const Move = require('../models/Move')

module.exports = {
  async index (req, res) {
    const pokemons = await Pokemon.findAll({
      attributes: ['pokedex_number', 'name', 'avatar', 'hp', 'attack', 'defense'],
      include: [{
        model: Type,
        as: 'types',
        attributes: ['name'],
        through: { attributes: [] }
      },
      {
        model: Move,
        as: 'moves',
        attributes: ['name', 'damage'],
        include: { association: 'type', attributes: ['name'] },
        through: { attributes: [] }
      }
      ]
    })

    return res.json(pokemons)
  },

  async store (req, res) {
    const {
      pokedexNumber,
      name,
      avatar,
      hp,
      attack,
      defense,
      types,
      moves
    } = req.body

    if (types.length > 0 &&
        types.length < 3 &&
        moves.length > 0 &&
        moves.length < 3) {
      const pokemon = await Pokemon.create({
        pokedex_number: pokedexNumber,
        name,
        avatar,
        hp,
        attack,
        defense
      })

      types.forEach(async element => {
        const [type] = await Type.findOrCreate({
          where: { name: element }
        })

        if (!type) {
          res.status(400).json({ error: 'Type not found' })
        }

        await pokemon.addType(type)
      })

      moves.forEach(async element => {
        const [move] = await Move.findOrCreate({
          where: { name: element }
        })

        if (!move) {
          res.status(400).json({ error: 'Move not found' })
        }

        await pokemon.addMove(move)
      })

      return res.json(pokemon)
    } else {
      return res.status(400).json({ error: 'To create a pokemon you need to pass at least one move and one type' })
    }
  }

}
