const express = require('express');
const Router = express.Router();
const BatalhaPartida = require('../controllers/BATALHA/BatalhaFinal');
const ListarPartidas = require('../controllers/BATALHA/ListarPartidas');
const Vitorias = require('../controllers/BATALHA/Viorias');


Router.post('/batalha', BatalhaPartida);
Router.get('/batalha/partidas', ListarPartidas);
Router.get('/batalha/jogadores', Vitorias)

module.exports = Router;