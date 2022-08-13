const Sequelize = require('sequelize');
const db = require('../connection/db');

const Partida = db.define('Pontos', {
    id_Partida: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    Vencedor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    pontos: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
  
});

module.exports = Partida;