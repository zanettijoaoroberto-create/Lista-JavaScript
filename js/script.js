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

const exercicio5 = () => {
    //Solicita um número ao usuário
numero = int(input("Digite um número: "))

//Exibe a tabuada de 1 a 10
for i in range(1, 11):
    resultado = numero * i
    print(f"s{número} x {i} = {resultado}")
};

const exercicio6 = () => {};

const exercicio7 = () => {};

const exercicio8 = () => {};

const exercicio9 = () => {};

const exercicio10 = () => {};

const exercicio11 = () => {};

const exercicio12 = () => {};

const exercicio13 = () => {};

const exercicio14 = () => {};

const exercicio15 = () => {};

const exercicio16 = () => {};

const exercicio17 = () => {};

const exercicio18 = () => {};

const exercicio19 = () => {};

const exercicio20 = () => {};

const exercicio21 = () => {};

const exercicio22 = () => {};

const exercicio23 = () => {};

const exercicio24 = () => {};

const exercicio25 = () => {
    let n1 = parseFloat(prompt("Digite o primeiro número:"));
    let n2 = parseFloat(prompt("Digite o segundo número:"));
     let n3 = parseFloat(prompt("Digite o terceiro número:"));

let lista = [n1, n2, n3].sort((a, b) => a - b);

alert("A ordem crescente é: " + lista.join(", "));
};         