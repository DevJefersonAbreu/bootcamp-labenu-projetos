console.log("Bem-vindo(a) ao jogo de blackjack");

let continuarJogando = true;

while (continuarJogando) {
    let jogo = confirm("Quer iniciar uma nova rodada?");

    if (jogo) {
        let carta1Usuario = comprarCarta();
        let carta2Usuario = comprarCarta();
        let carta1Pc = comprarCarta();
        let carta2Pc = comprarCarta();

        let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor;
        let pontuacaoPc = carta1Pc.valor + carta2Pc.valor;

        console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`);
        console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${pontuacaoPc}`);

        if (pontuacaoUsuario === 21) {
            console.log("Blackjack! O usuário ganhou!");
        } else if (pontuacaoPc === 21) {
            console.log("Blackjack! O computador ganhou!");
        } else if (pontuacaoUsuario > 21) {
            console.log("Estouro! O computador ganhou!");
        } else if (pontuacaoPc > 21) {
            console.log("Estouro! O usuário ganhou!");
        } else if (pontuacaoUsuario > pontuacaoPc) {
            console.log("O usuário ganhou!");
        } else if (pontuacaoPc > pontuacaoUsuario) {
            console.log("O computador ganhou!");
        } else {
            console.log("Empate!");
        }
    } else {
        console.log("O jogo acabou");
        continuarJogando = false;
    }
}