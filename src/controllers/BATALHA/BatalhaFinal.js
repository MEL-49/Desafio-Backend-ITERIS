 const Batalha = async (req, res) => {

    const db = require('../../connection/db')
    const pokemon = require('../../models/Pokemon');
    const BatalhaPartida = require('../../models/Batalha');
    //const Player = require('../../models/Player');

    await db.sync();
    const { playerOneCard, playerTwoCard }  = req.body;

    const CardPokemon1 = await pokemon.findByPk(playerOneCard);
    const CardPokemon2 = await pokemon.findByPk(playerTwoCard);

    //return res.status(200).json({pokemon: acharPokemon, pokemon2: acharPokemon2});


    function comparacaoBatalha (a, b){
        if (a > b){
            //playerOne = playerTwo + 1;
            return CardPokemon1.id;
        } else if (a < b) {
            //playerTwo = playerTwo + 1;
            return CardPokemon2.id;
        } else if ( a = b) {
            return CardPokemon1.id & CardPokemon2.id;
        }
    };

    function winner (a, b){
        if (a > b){
            return CardPokemon2.id;
        } else if (a < b){
            return CardPokemon1.id;
        } else if (CardPokemon1.id == CardPokemon2.id) {
            return CardPokemon1.id & CardPokemon2.id;
        }
    };

    function loser (a, b){
        if (a > b){
            return CardPokemon2.id;
        } else if (a < b){
            return CardPokemon1.id;
        } else if (CardPokemon1.id == CardPokemon2.id) {
            return CardPokemon1.id & CardPokemon2.id;
        }
    };

    let hp1 = CardPokemon1.hp;
    let hp2 = CardPokemon2.hp;
    let attack1 = CardPokemon1.attack;
    let attack2 = CardPokemon2.attack;
    let defense1 = CardPokemon1.defense;
    let defense2 = CardPokemon2.defense;
    let specialAttack1 = CardPokemon1.specialAttack;
    let specialAttack2 = CardPokemon2.specialAttack;
    let specialDefense1 = CardPokemon1.specialDefense;
    let specialDefense2 = CardPokemon2.specialDefense;
    let speed1 = CardPokemon1.speed;
    let speed2 = CardPokemon2.speed

    const ResultadoFinal = await BatalhaPartida.create({
        winner: winner(playerOneCard, playerTwoCard),
        loser: loser(playerOneCard, playerTwoCard),
            hp: comparacaoBatalha(hp1, hp2),
            attack: comparacaoBatalha(attack1, attack2),
            defense: comparacaoBatalha(defense1, defense2),
            specialAttack: comparacaoBatalha(specialAttack1, specialAttack2),
            specialDefense: comparacaoBatalha(specialDefense1, specialDefense2),
            speed: comparacaoBatalha(speed1, speed2)
    });

    return res.status(200).json({ msg: "Resultado da Batalha", Batalha: ResultadoFinal});

};

module.exports = Batalha;