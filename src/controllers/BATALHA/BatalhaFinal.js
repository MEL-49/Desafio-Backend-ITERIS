 const Batalha = async (req, res) => {

    const db = require('../../connection/db')
    const pokemon = require('../../models/Pokemon');
    const BatalhaPartida = require('../../models/Batalha');
    const Pontos = require('../../models/Ponto');

    const { playerOneCard, playerTwoCard }  = req.body;

    const CardPokemon1 = await pokemon.findByPk(playerOneCard);
    const CardPokemon2 = await pokemon.findByPk(playerTwoCard);

    var playerOne = 0;
    var playerTwo = 0;
    function comparacaoBatalha (a, b){
        if (a > b){
            playerOne = playerOne + 1;
            return CardPokemon1.id;
        } else if (a < b) {
            playerTwo = playerTwo + 1;
            return CardPokemon2.id;
        } else if ( a = b) {
            return 0;
        }
    };

    if (CardPokemon1.hp > CardPokemon2.hp){
        playerOne++;
    } else if (CardPokemon1.hp < CardPokemon2.hp){
        playerTwo++
    } else if (CardPokemon1.hp = CardPokemon2.hp){
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    if (CardPokemon1.attack > CardPokemon2.attack){
        playerOne++;
    } else if (CardPokemon1.attack < CardPokemon2.attack){
        playerTwo++
    } else if (CardPokemon1.attack = CardPokemon2.attack){
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    if (CardPokemon1.defense > CardPokemon2.defense){
        playerOne++;
    } else if (CardPokemon1.defense < CardPokemon2.defense){
        playerTwo++
    } else if (CardPokemon1.defense = CardPokemon2.defense){
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    if (CardPokemon1.specialAttack > CardPokemon2.specialAttack){
        playerOne++;
    } else if (CardPokemon1.specialAttack < CardPokemon2.specialAttack){
        playerTwo++
    } else if (CardPokemon1.specialAttack = CardPokemon2.specialAttack) {
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    if (CardPokemon1.specialDefense > CardPokemon2.specialDefense){
        playerOne++;
    } else if (CardPokemon1.specialDefense < CardPokemon2.specialDefense){
        playerTwo++
    } else if (CardPokemon1.specialDefense = CardPokemon2.specialDefense){
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    if (CardPokemon1.speed > CardPokemon2.speed){
        playerOne++;
    } else if (CardPokemon1.speed < CardPokemon2.speed){
        playerTwo++
    } else if (CardPokemon1.speed = CardPokemon2.speed){
        playerOne = playerOne + 0;
        playerTwo = playerTwo + 0;
    };

    await db.sync();

    let Jogador1 = 'PlayerOne';
    let Jogador2 = 'PlayerTwo';
    let Empate = 'EMPATE'

    function vencedor (a, b){
        if (a > b){
            return Jogador1;
        } else if (a < b){
            return Jogador2;
        } else if ( CardPokemon1.id == CardPokemon2.id) {
            return Empate;
        }
    };

    await Pontos.create({
        Vencedor: vencedor(playerOne, playerTwo),
        pontos: 1
    });

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

    const Partida = await BatalhaPartida.create({
        winner: winner(playerOne, playerTwo),
        loser: loser(playerOne, playerTwo),
        hp: comparacaoBatalha(CardPokemon1.hp, CardPokemon2.hp),
        attack: comparacaoBatalha(CardPokemon1.attack, CardPokemon2.attack),
        defense: comparacaoBatalha(CardPokemon1.defense, CardPokemon2.defense),
        specialAttack: comparacaoBatalha(CardPokemon1.specialAttack, CardPokemon2.specialAttack),
        specialDefense: comparacaoBatalha(CardPokemon1.specialDefense, CardPokemon2.specialDefense),
        speed: comparacaoBatalha(CardPokemon1.speed, CardPokemon2.speed)
    });


    return res.status(200).json({  ResultadoDaBatalha: Partida });

};

module.exports = Batalha;