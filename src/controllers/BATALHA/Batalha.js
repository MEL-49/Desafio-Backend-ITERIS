const Batalha = async (req, res) => {

    const pokemom = require('../../models/Pokemon');

    const { playerOne, playerTwo }  = req.body;

    const acharPokemon = await pokemom.findByPk(playerOne);
    const acharPokemon2 = await pokemom.findByPk(playerTwo);
    
    module.exports = acharPokemon, acharPokemon2;

    return res.status(200).json({pokemon: acharPokemon, pokemon2: acharPokemon2});
};

module.exports = Batalha;