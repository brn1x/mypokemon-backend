const { Model, DataTypes } = require('sequelize')

class Type extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsToMany(models.Pokemon, { foreignKey: 'type_id', through: 'pokemon_types', as: 'pokemon' })
    this.hasMany(models.Move, { foreignKey: 'type_id', as: 'moves' })
  }
}

module.exports = Type
