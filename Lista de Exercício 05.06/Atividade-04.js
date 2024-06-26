
/*4) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
 Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
 total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
 Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

 var eleitores
 var votosCandidatoX, votosCandidatoY
 var votosBrancos, votosNulos
 var somaVotos

 eleitores = prompt('Quantas pessoas votaram na cidade?')
 votosCandidatoX = prompt('Quantas pessoas votaram no candidato X?')
 votosCandidatoY = prompt('Quantas pessoas votaram no canditato Y?')
 votosBrancos = prompt('Quantas pessoas votaram em branco?')
 votosNulos = prompt('Quantas pessoas votaram nulo?')
somaVotos = eleitores + votosCandidatoX + votosCandidatoY + votosBrancos + votosNulos

if (somaVotos != eleitores) {
    alert('Verifique se você digitou o numero corretamente')
}

alert('A quantidade de votos para o candidato X foi de ' + votosCandidatoX / eleitores + '% do total de eleitores')
alert('A quantidade de votos para o candidato Y foi de ' + votosCandidatoY / eleitores + '% do total de eleitores')
alert('A quantidade de votos Brancos foi de ' + votosBrancos / eleitores + '% do total de eleitores')
alert('A quantidade de votos nulos foi de ' + votosNulos / eleitores + '% do total de eleitores')
