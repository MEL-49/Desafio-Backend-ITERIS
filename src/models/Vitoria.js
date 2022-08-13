const Sequelize = require('sequelize');
const db = require('../connection/db');

const Partida = db.define('Vitorias', {
    id_Partida: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.DataTypes.STRING
    },

    Vitories: {
        type: Sequelize.DataTypes.INTEGER
    }
  
});

module.exports = Partida;