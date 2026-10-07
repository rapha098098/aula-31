// 1. Função Básica
function mostrarMensagem() {
  console.log("Bem-vindo ao estudo de funções em JavaScript!");
}
mostrarMensagem();

// 2. Soma simples
function somaSimples() {
  let numero1 = 4;
  let numero2 = 6;
  console.log(numero1 + numero2);
}
somaSimples();

// 3. Imprimir nome
function imprimirNome() {
  let nome = "Enzo";
  console.log(nome);
}
imprimirNome();

// 4. Quadrado de um número
function quadrado(numero) {
  return numero * numero;
}
console.log(quadrado(5));

// 5. Fahrenheit para Celsius
function converterParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(converterParaCelsius(68));

// 6. Concatenar palavras
function concatenaPalavras(palavra1, palavra2) {
  return palavra1 + " " + palavra2;
}
console.log(concatenaPalavras("Olá", "mundo"));

// 7. Calcular média
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
console.log(calcularMedia(8, 7, 9));

// 8. Calcular desconto
function desconto(valor, percentual) {
  let valorDesconto = valor * percentual / 100;
  return valor - valorDesconto;
}
console.log(desconto(100, 20));

// 9. Saudação personalizada
function saudacaoPersonalizada(nome) {
  console.log("Olá, " + nome + "! Seja bem-vindo.");
}
saudacaoPersonalizada("Enzo");

// 10. Função anônima - multiplicação
let multiplicar = function(numero1, numero2) {
  return numero1 * numero2;
};
console.log(multiplicar(5, 4));

// 11. Função anônima - divisão
let dividir = function(numero1, numero2) {
  return numero1 / numero2;
};
console.log(dividir(10, 2));

// 12. Arrow Function - dobro
let dobro = (numero) => {
  return numero * 2;
};
console.log(dobro(5));

// 13. Arrow Function - verificar se é par
let ehPar = (numero) => {
  return numero % 2 === 0;
};
console.log(ehPar(8));

// 14. Funções dentro de função
function calculadora(numero1, numero2) {
  function soma(x, y) {
    return x + y;
  }

  function subtrair(x, y) {
    return x - y;
  }

  console.log("Soma: " + soma(numero1, numero2));
  console.log("Subtração: " + subtrair(numero1, numero2));
}
calculadora(10, 5);

// 15. Operações avançadas
function operacoesAvancadas(numero1, numero2) {
  function produto(x, y) {
    return x * y;
  }

  function potencia(x, y) {
    return x ** y;
  }

  return {
    produto: produto(numero1, numero2),
    potencia: potencia(numero1, numero2)
  };
}
console.log(operacoesAvancadas(2, 3));
