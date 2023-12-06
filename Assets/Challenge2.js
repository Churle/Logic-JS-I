
// Referenciando o botão pelo ID
var button_day = document.getElementById("button_day");

// Adicionando um ouvinte de evento ao botão !  o CLICK e o evento e o function e a funcao a ser executada que ira exibir o prompt! 
button_day.addEventListener("click", function() { 

    // Abrindo o prompt quando o botão é clicado
    var resposta1= prompt("Digite o dia da semana em que estamos:");
        console.log(resposta1);
       
    if (resposta1 !== null) {
        // Verificar se o usuário pressionou "Cancelar" na janela do prompt
        if (resposta1 === "") {
            alert('Você fechou a janela do prompt.');
        } else {
            // Verificar se a resposta é um número
            if (!isNaN(resposta1)) {
                alert('Você digitou um número. O prompt será cancelado.');
            } else {
                // Se não for um número, continuar com as operações
                resposta1 = resposta1.trim().toLowerCase();

                if (resposta1 === 'sabado') {
                    alert('Voce digitou: '+ resposta1);
                    alert("Bom Final de Semana!!!");
                    button_day.textContent = "DIA DA SEMANA: " + resposta1;
                } else if (resposta1 === 'domingo') {
                    alert('Voce Digitou: '+ resposta1);
                    alert('Bom Final de Semana!');
                    button_day.textContent = "DIA DA SEMANA: " + resposta1;
                } else {
                    alert('Voce Digitou: '+ resposta1);
                    alert('Boa Semana de Trabalho');
                }
            }
        }
    } else {
        alert('Você cancelou o prompt');
    }
});

// TAREFA #2 ----------------------------------------------------------------------------
// referenciando pelo ID 
var button_N = document.getElementById("button_N");

// Adicionando um ouvinte de evento ao botão !  o CLICK e o evento e o function e a funcao a ser executada que ira exibir o prompt!
button_N.addEventListener("click", function() { 

//Abrir um prompt quando o botao e clicado
var resposta2 = prompt("Digite seu saldo entre 0 a 200");
console.log(resposta2);

//Exibir um alerta com a resposta do prompt verificando se e nulo
if (resposta2 !==null){ 
    
    // verificando se e um numero!
    if (!isNaN(resposta2)) {
    alert("voce digitou: " + resposta2);
       
        // Converter a resposta para um número
        var numero=parseInt(resposta2);

            //Mudando o texto do button_n 
             button_N.textContent = "Seu saldo e: R$"+resposta2;

    if (numero % 2 === 0) {
        console.log(numero + " é um número par.");
        alert("seu saldo e um numero PAR!!!")
    } else {
        console.log(numero + " é um número ímpar.");
        alert("seu saldo e um numero IMPAR!!!")
    }
}   else{
    alert("voce nao digitou um numero")

    }
}});

// Tarefa #3 -----------------------------------------------------------------------------