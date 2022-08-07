const ConsultarPokemon = async (req, res) => {

    let pokemon = require('../../models/Pokemon');
    const id = req.params.id
    const pokemonAchado = await pokemon.findByPk(id);
    return res.status(200).json({pokemonAchado: pokemonAchado});

};

module.exports = ConsultarPokemon;