const { Model, DataTypes } = require('sequelize')

class Move extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      damage: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsToMany(models.Pokemon, { foreignKey: 'move_id', through: 'pokemon_moves', as: 'pokemon' })
    this.belongsTo(models.Type, { foreignKey: 'type_id', as: 'type' })
  }
}

module.exports = Move
