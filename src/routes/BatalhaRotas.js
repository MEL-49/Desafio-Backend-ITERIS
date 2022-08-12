const express = require('express');
const Router = express.Router();
const Batalha = require('../controllers/BATALHA/Batalha');

Router.post('/batalha', Batalha);

module.exports = Router;