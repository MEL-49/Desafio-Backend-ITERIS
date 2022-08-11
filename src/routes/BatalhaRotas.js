const express = require('express');
const Router = express.Router();
const EscolherPokemon = require('../controllers/BATALHA/EscolherPokemon');

Router.post('/batalha/escolha', EscolherPokemon);

module.exports = Router;