const express = require('express');
const Router = express.Router();
const BatalhaPartida = require('../controllers/BATALHA/BatalhaFinal');
const ListarPartidas = require('../controllers/BATALHA/ListarPartidas');

Router.post('/batalha', BatalhaPartida);
Router.get('/batalha/partidas', ListarPartidas);

module.exports = Router;