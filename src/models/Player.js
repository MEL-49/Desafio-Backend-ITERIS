const Sequelize = require('sequelize');
const db = require('../connection/db');

const Player = db.define('players', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    victories: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },

    defeats: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Player;