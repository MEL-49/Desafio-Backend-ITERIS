const Sequelize = require('sequelize');
const db = require('../connection/db');

const BatalhaPartidas = db.define('players', {
    id_Partida: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    winner: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
    },

    loser: {
        type: Sequelize.DataTypes.INTEGER,
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

module.exports = BatalhaPartidas;