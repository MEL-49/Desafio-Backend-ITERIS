require('dotenv/config');
const pokemonRouter = require('./routes/rotas')
const express = require('express');
const app = express();
const port = 9091;

app.use(express.json());
app.use(pokemonRouter);

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`);
});
