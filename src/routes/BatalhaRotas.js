const express = require('express');
const Router = express.Router();
const BatalhaPartida = require('../controllers/BATALHA/BatalhaFinal');

Router.post('/batalha', BatalhaPartida);

module.exports = Router;