const Vitorias = async (req, res) => {
     
    const Vitoria = require('../../models/Vitoria');

    const countJogador1  = await Vitoria.count({
        where: {
            Vencedor: 'PlayerOne'
        }
    });

    const countJogador2  = await Vitoria.count({
        where: {
            Vencedor: 'PlayerTwo'
        }
    });

    const EMPATE  = await Vitoria.count({
        where: {
            Vencedor: 'EMPATE'
        }
    });

    return res.status(200).json({
        PlayerOne: countJogador1,
        PlayerTwo: countJogador2,
        EMPATE: EMPATE
    });
};

module.exports = Vitorias;