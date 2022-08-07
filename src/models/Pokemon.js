const Sequelize = require('sequelize');
const db = require('../connection/db');

const Pokemon = db.define('pokemons', {

    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    hp: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    attack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    defense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    specialAttack: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    specialDefense: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    speed: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Pokemon;