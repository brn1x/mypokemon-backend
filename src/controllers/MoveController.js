const Move = require('../models/Move')
const Type = require('../models/Type')

module.exports = {
  async index (req, res) {
    const moves = await Move.findAll({
      attributes: ['name', 'damage'],
      include: { association: 'type', attributes: ['name'] }
    })

    res.json(moves)
  },

  async store (req, res) {
    const { type_id, name, damage } = req.body

    const type = await Type.findByPk(type_id)

    if (!type) {
      return res.status(400).json({ error: 'type not found' })
    }

    const move = await Move.create({ type_id, name, damage })

    return res.json(move)
  }
}
