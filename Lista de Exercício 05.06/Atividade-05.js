/*5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. */

var peso, altura
var resultado

peso = prompt('Qual é o seu peso?')
altura = prompt('Quan é a sua altura?')
resultado = peso / altura * altura

alert('O seu IMC é de valor: ' + resultado)