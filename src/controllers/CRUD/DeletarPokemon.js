const DeletarPokemon = async (req, res) => {

    let pokemon = require('../../models/Pokemon');
    const id = req.params.id;

    const pokemons = await pokemon.findByPk(id);

    await pokemon.destroy({ where: { id: id }});

    return res.json({ message: 'Pokemon deletado: ', pokemon: pokemons});
};

module.exports = DeletarPokemon;