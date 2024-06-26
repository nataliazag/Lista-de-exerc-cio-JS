/*7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. 
Esses dados devem ser digitados pelo usuário. 
Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.*/

var choppDesperdiçado, sobraChopp
var mediaChopp

choppDesperdiçado = prompt('Quantos litros de chopp foram desperdiçados(digite 0 se não ouve desperdicio)?')
sobraChopp = prompt('Quantos litreos de chopp sobraram(digite 0 se não ouve desperdicio)?')
mediaChopp = 300 - choppDesperdiçado - sobraChopp / 45