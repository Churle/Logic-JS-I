
// Referenciando o botão pelo ID
var button_day = document.getElementById("button_day");

// Adicionando um ouvinte de evento ao botão !  o CLICK e o evento e o function e a funcao a ser executada que ira exibir o prompt!
button_day.addEventListener("click", function() { 

    // Abrindo o prompt quando o botão é clicado
    var resposta1 = prompt("Digite o dia da semana em que estamos:");

      // Exibindo um alerta com a resposta do prompt
      if (resposta1 !== null) {
        alert("Você digitou: " + resposta1);
        button_day.textContent = "DIA DA SEMANA: " + resposta1;
    } else {
        alert("Você cancelou o prompt.");
        
    }
    
});