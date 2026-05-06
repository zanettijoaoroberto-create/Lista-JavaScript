const exercicio1 = () => {
  // Capturar o elemento "Resposta"
  let resposta = document.getElementById("resposta");
  // Variavel para armazenar o resultado do programa
  let resultado = " # ";
  // Loop de 1 até 10 usando for
  for (let i = 1; i <= 10; i++) {
    resultado += i + " # ";
  }
  // Exibir o resultado
  resposta.innerHTML = resultado;
};

const exercicio2 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for (let i = 0; i <= numero; i += 2) {
      resultado.innerHTML += i + " ";
    }
    erro.innerHTML = "";
  }
};

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let primo = true;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
  }
  if (primo) {
    resultado.innerHTML = `O número ${numero} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${numero} não é primo`;
    erro.innerHTML = "";
  }
};

const exercicio4 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return;
  } else {
    for (let i = 1; i <= 10; i++) {
      resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
    }
    erro.innerHTML = "";
  }
};

const exercicio5 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 1;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    while (contador <= parseInt(numero)) {
      resultado.innerHTML += `${contador} `;
      contador += 2;
    }
    erro.innerHTML = "";
  }
};

const exercicio6 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;
  let contador = 0;
  let soma = 0;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";
  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    while (contador <= parseInt(numero)) {
      soma += contador;
      contador += 2;
    }
    resultado.innerHTML = `A soma dos números pares de 0 até ${numero} é: ${soma}`;
    erro.innerHTML = "";
  }
};

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let retorno = "";
  let contador = 10;
  resposta.innerHTML = "";

  while (contador >= 1) {
    retorno += contador + " ";
    contador--;
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> ${retorno}`;
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

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  let soma = 0;
  resposta.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> 
                        <p>A soma dos números de 1 a 100 é: ${soma}</p>`;
};

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

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");
  let retorno = "";
  let retorno2 = "";
  resposta.innerHTML = "";

  for (let i = 0; i <= 100; i += 3) {
    retorno += i + " ";
  }
  resposta.innerHTML = `<h2>Resposta da Atividade</h2> 
                        <p>Multiplos de 3 de 0 a 100</p>${retorno}`;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      retorno2 += i + " ";
    }
  }
  resposta.innerHTML += `<br/><p>Multiplos de 3 de 1 a 100</p>${retorno2}`;
};

const exercicio12 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  let soma = 0;
  // Limpar as variaveis
  erro.innerHTML = "";
  resultado.innerHTML = "";

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
  } else {
    for(let i=0; i <= numero.length -1; i++){
      soma += parseInt(numero[i]);
    }
    resultado.innerHTML = `A soma dos dígitos do número ${numero} é: ${soma}`;
    erro.innerHTML = "";
  }
};