const { Model, DataTypes } = require('sequelize')

class Pokemon extends Model {
  static init (sequelize) {
    super.init({
      pokedex_number: DataTypes.INTEGER,
      name: DataTypes.STRING,
      avatar: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      defense: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsToMany(models.Type, { foreignKey: 'pokemon_id', through: 'pokemon_types', as: 'types' })
    this.belongsToMany(models.Move, { foreignKey: 'pokemon_id', through: 'pokemon_moves', as: 'moves' })
  }
}

module.exports = Pokemon
