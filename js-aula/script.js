

console.log("JavaScript carregado!");
/*
const nomeAluno = "Michael";
let idadeAluno = 17;
const matriculado = true;
console.log("Nome do aluno: " + nomeAluno); console.log("Idade do aluno: " + idadeAluno); console.log("Aluno matriculado: " + matriculado);

const nota1 = 9.0;
const nota2 = 5.0;
console.log(nota1 + nota2); console.log(nota1 - nota2); console.log(nota1 * nota2); console.log(nota1 / nota2); console.log(nota1 % nota2);

//Sim, e nao, nao sao estritamente iguais.

/*
const a = Number(prompt("Digite o primeiro número:"));
const b = Number(prompt("Digite o segundo número:"));
console.log("Soma: " + (a + b));
*/

//Problemas condicionais

/*

const idade = Number(prompt("Digite a idade do aluno:"));
if (idade >= 18) {
    console.log("Maior de idade.");
}
else {
    console.log("Menor de idade.");
}

const nota = Number(prompt("Digite a nota:"));
if (nota >= 90){
    console.log("Excelente");
}
else if (nota >= 70){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

const num = Number(prompt("Digite um número:"));
if (num % 2 === 0) {
    console.log("O número é par.");
}
else {
    console.log("O número é ímpar.");
}

*/
/*

//Correcao de erro:
const idade = Number(prompt("Idade:"));

 if (idade === 18) {
   console.log("Tem exatamente 18 anos")
 } else {
   console.log("Idade diferente de 18");
 }

 console.log(idade);

 //Os problemas sao: o operador de comparacao usado no if era o de atribuicao, e a variavel idade nao estava sendo convertida para numero, alem de que no final, a variavel idade estava com "I" maisculo.

 */

 const nomeAluno = prompt("Digite o nome do aluno:");
 const nota1 = Number(prompt("Digite a primeira nota:"));
 const nota2 = Number(prompt("Digite a segunda nota:"));
 const media = (nota1 + nota2) / 2;
if (media >= 70) {
    console.log("Aluno: " + nomeAluno + " | " + "Média: " + media + " | " + "Situação: Aprovado");
} else {
    console.log("Aluno: " + nomeAluno + " | " + "Média: " + media + " | " + "Situação: Reprovado");
}

