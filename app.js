alert ('Bem Vindo ao jogo do numero secreto');
let NumeroSecreto =5 ;
let Chute = prompt ('Escolha um numero entre 1 e 10');
if (Chute == 5) {
    console.log('E isso ai, parabens acertou!');
};
if(Chute < 5){
    console.log('Quase! o numero e maior');
};
if(Chute > 5){
    console.log('Quase! o numero e menor');
};