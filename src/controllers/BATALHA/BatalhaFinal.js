 const Batalha = async (req, res) => {

    const db = require('../../connection/db')
    const pokemon = require('../../models/Pokemon');
    const BatalhaPartida = require('../../models/Vitoria');
    //const Player = require('../../models/Player');

    await db.sync();
    const { playerOneCard, playerTwoCard }  = req.body;

    const CardPokemon1 = await pokemon.findByPk(playerOneCard);
    const CardPokemon2 = await pokemon.findByPk(playerTwoCard);

    var playerOne = 0;
    var playerTwo = 0; 
    function comparacaoBatalha (a, b){
        if (a > b){
            playerOne++;
            return CardPokemon1.id;
        } else if (a < b) {
            playerTwo++;
            return CardPokemon2.id;
        } else if ( a = b) {
            return 'EMPATE';
        }
    };

    function winner (a, b){
        if (a > b){
            return CardPokemon1.id;
        } else if (a < b){
            return CardPokemon2.id;
        } else if (CardPokemon1.id == CardPokemon2.id) {
            return res.send('RESULTADO DA BATALHA: Empate!');
        }
    };

    function loser (a, b){
        if (a > b){
            return CardPokemon2.id;
        } else if (a < b){
            return CardPokemon1.id;
        } else if (CardPokemon1.id == CardPokemon2.id) {
            return res.send('RESULTADO DA BATALHA: Empate!');
        }
    };

    return res.status(200).json({  ResultadoDaBatalha: { 
        winner: winner(playerOne, playerTwo),
        loser: loser(playerOne, playerTwo),
            hp: comparacaoBatalha(CardPokemon1.hp, CardPokemon2.hp),
            attack: comparacaoBatalha(CardPokemon1.attack, CardPokemon2.attack),
            defense: comparacaoBatalha(CardPokemon1.defense, CardPokemon2.defense),
            specialAttack: comparacaoBatalha(CardPokemon1.specialAttack, CardPokemon2.specialAttack),
            specialDefense: comparacaoBatalha(CardPokemon1.specialDefense, CardPokemon2.specialDefense),
            speed: comparacaoBatalha(CardPokemon1.speed, CardPokemon2.speed)
     } });

};

module.exports = Batalha;