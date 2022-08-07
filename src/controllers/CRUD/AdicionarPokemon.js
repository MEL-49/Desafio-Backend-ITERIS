
const AdicionarPokemon = async (req, res) => {

    let db = require('../../connection/db');
    let pokemon = require('../../models/Pokemon');

    await db.sync();

    const { name, type, hp,  attack, defense, specialAttack, specialDefense, speed } = req.body;

    const novoPokemon = await pokemon.create({
        name, type, hp, attack, defense, specialAttack, specialDefense, speed
    });
    return res.json ({message: 'NOVO POKEMON ADICIONADO A POKEDEX: ', pokemon: novoPokemon});
};

module.exports = AdicionarPokemon;