const { Model, DataTypes } = require('sequelize')

class Pokemon extends Model {
  static init (sequelize) {
    super.init({
      pokedex_number: DataTypes.INTEGER,
      name: DataTypes.STRING,
      hp: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      defense: DataTypes.INTEGER,
      sp_atk: DataTypes.INTEGER,
      sp_def: DataTypes.INTEGER,
      speed: DataTypes.INTEGER
    }, {
      sequelize
    })
  }

  static associate (models) {
    this.belongsToMany(models.Type, { foreignKey: 'pokemon_id', through: 'pokemon_types', as: 'pokemon' })
  }
}

module.exports = Pokemon
