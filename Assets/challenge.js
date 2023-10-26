//Mostrar um alerta de boas vindas
alert('Boas Vindas ao nosso site')

// Atribuindo variaveis
let nome = 'lua' ;
let idade =25;
let numero_de_vendas =50;
let saldo_indisponivel =1000;

//Alerta de mensagem de erro e atribuicao da mensagem de erro.
alert('Erro! Preencha todos os campos.');
let mensagem_erro ='Erro!';
alert(mensagem_erro)

//Criando um prompt para armazenar o nome na variavel nome.
nome= prompt('Digite um nome de usuario');

//Demonstrando o nome armazenado com mensagem e se nao tiver tambem mostrar mensagem. 
if (nome){
    alert('Bem vindo, '+nome+'!');
    } else {
        alert('Você não forneceu um nome. Bem-vindo de qualquer forma!');
    } ;
// Guardando a idade e respondendo de acordo.
idade =prompt('digite sua idade');
    if (idade>=18){
        alert('voce e maior de idade! pode entrar.');
    }else{
        alert('voce ainda e menor de idade')
    };