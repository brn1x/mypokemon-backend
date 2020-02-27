const Pokemon = require('../models/Pokemon')
const Type = require('../models/Type')

module.exports = {
  async index (req, res) {
    const pokemons = await Pokemon.findAll()

    return res.json(pokemons)
  },

  async store (req, res) {
    const {
      pokedexNumber,
      name,
      hp,
      attack,
      defense,
      spAtk,
      spDef,
      speed,
      types
    } = req.body

    const pokemon = await Pokemon.create({
      pokedex_number: pokedexNumber,
      name,
      hp,
      attack,
      defense,
      sp_atk: spAtk,
      sp_def: spDef,
      speed
    })

    types.forEach(async element => {
      const [type] = await Type.findOrCreate({
        where: { name: element }
      })

      console.log(pokemon)
      console.log(type)
      await pokemon.addType(type)
    })

    return res.json(pokemon)
  }

}
