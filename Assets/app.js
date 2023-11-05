// inicio
alert ('Bem Vindo ao jogo do numero secreto');
let NumeroSecreto =5 ;
console.log(NumeroSecreto)
let Chute = prompt ('Escolha um numero entre 1 e 10');
console.log(Chute)
// IF Chut = secret number then :
if (Chute == 5) {
    console.log(`E isso ai, parabens acertou o numero secreto! ${NumeroSecreto}`);
    // usando else para dar a opcao de mensagem apos o erro! 
} else {
    console.log('valor numero secreto '+NumeroSecreto);
    alert('Voce errou!');
    alert('O numero secreto era = '+NumeroSecreto);
};
