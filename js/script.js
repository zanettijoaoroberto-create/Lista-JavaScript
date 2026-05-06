const exercicio1 = () => {
    // Capturar o elemento "Resposta"
    let resposta = document.getElementById("resposta");

    // Variavel para armazenar o resultado do programa 
    let resultado = " # ";
    // Loop de 1 até 10 usando for
    for(let i=1; i<=10; i++){
        resultado += i + " # ";
    }

    // Exibir o resultado
    resposta.innerHTML = resultado;
};

const exercicio2 = () => {
    // pegar o número digitado
    let num = document.getElementById("num").value;

    // elementos de saída
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    // limpar conteúdo anterior
    resultado.innerHTML = "";
    erro.innerHTML = "";

    // validação
    if (num === "" || num < 0) {
        erro.innerHTML = "Digite um número válido!";
        return;
    }

    num = parseInt(num);

    let resposta = "";

    // laço for pegando apenas pares
    for (let i = 0; i <= num; i += 2) {
        resposta += i + " ";
    }

    // mostrar resultado
    resultado.innerHTML = resposta;
};
const exercicio3 = () => {
    let resultado = document.getElementById("resultado");
    
    let erro = document.getElementById("erro");

    let numero = document.getElementById("num").value;

    // Variável Booleana apenas true/false
    let primo = true

    if (numero <= 0){
        erro.innerHTML = 'Digite um número maior que 0'
        resultado.innerHTML = '';
        retourn; //interrompe a função 
    } else {
        // Loop para verificar se existe algum divisor 
        // além de 1 e ele mesmo 
        for(let i = 2; i < numero; i++){
             if(numero % i == 0){
                primo = false; 
             }
        }
    }

    // Verificação Final 
    if(primo){
        // Se permanecer true ao tentar validar
        // Ele será primo 
        resultado.innerHTML = `O número ${numero} é primo`;
        erro.innerHTML = ''; 
    } else {
        resultado.innerHTML = `O número ${numero} não é primo`;
        erro.innerHTML = '';
    }
};

const exercicio4 = () => {
const gerarTabuada = () => {  
    // 1. Pegamos o número que a pessoa digitou
    let num = document.getElementById('numEscolhido').value;
    let painel = document.getElementById('resultado');

    // 2. Verificamos se o campo não está vazio
    if (num === "") {
        painel.innerHTML = "Por favor, digite um número primeiro! 😉";
        return;
    }

    num = Number(num); // Garante que é um número
    let conteudo = `<h3>Tabuada do ${num}:</h3>`;

    // 3. O laço 'for' para calcular de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let conta = num * i;
        conteudo += `${num} x ${i} = <strong>${conta}</strong><br>`;
    }

    // 4. Mostramos o resultado final na tela
    painel.innerHTML = conteudo;
}
};


const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  // Limpar os campos da tela, caso tenha alguma coisa.
  resultado.innerHTML = "";
  erro.innerHTML = "";

  // Variavel para armazenar a palavra invertida
  let palavraInvertida = "";

  //Loop de 1 até o "tamanho" da palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // Exibir a palavra invertida no resultado
  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  erro.innerHTML = "";

  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br/> A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br/> A palavra não é um palíndromo";
  }
};




//exercício 10 
let soma = 0;
let contador = 0;
const exercicio10 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // if (numero != "0") {
  //   soma += parseFloat(numero);
  //   contador++;
  // }
  // resultado.innerHTML = `A média dos números digitados é: ${soma / contador}`;
  // erro.innerHTML = "";
  while (numero != "0") {
    soma += parseFloat(numero);
    contador++;
    numero = prompt("Digite um número: ");
  }
  if (contador > 0) {
    resultado.innerHTML = `Foram digitados ${contador} números. A média da soma dos números digitados é: ${soma / contador}`;
    erro.innerHTML = "";
  }
  soma = 0;
  contador = 0;
};

    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
     let n3 = parseFloat(prompt("Digite o terceiro número:"));

let lista = [n1, n2, n3].sort((a, b) => a - b);

alert("A ordem crescente é: " + lista.join(","));
};

//exercicio 17
const exercicio17 = () => {

    let base = document.getElementById("num1").value;
    let altura = document.getElementById("num2").value;

  
    base = parseInt(base);
    altura = parseInt(altura);

  
    let resultado = document.getElementById("resultado");
    let erro = document.getElementById("erro");

    erro.innerHTML = "";
    resultado.innerHTML = "";


    if (base <= 0 || altura <= 0) {
        erro.innerHTML = "Digite valores válidos para base e altura!";
        return;
    }

    let area = (base * altura) / 2;

    resultado.innerHTML = "Área do triângulo: " + area;
};