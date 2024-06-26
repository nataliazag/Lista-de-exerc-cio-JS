/* 1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.*/ 


let salarioBruto 
let salarioLiquido
let desconto = 20 

salarioBruto = Number(prompt("Digite o seu salário bruto: "))
desconto = salarioBruto * desconto / 100
salarioLiquido = salarioBruto - desconto

alert("Seu salário líquido com 20% ficou em: " + salarioLiquido)



