
/*2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.*/

var anoNascimento, anoAtual
var anos, meses, semanas, dias

anoNascimento = prompt('Que ano você nasceu?')
anoAtual = prompt('Em que ano estamos?')

anos = anoAtual - anoNascimento
meses = anos * 12
semanas = anos * 52
dias = anos * 365

alert('Acabei de calcular a sua idade em anos: ' + anos + '\nMeses: ' + meses + '\nSemanas: ' + semanas + '\nE dias: ' + dias)








