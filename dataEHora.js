var data = window.document.getElementById('div#date')
var agora = new Date()
var diaSemana = agora.getDay()
var dia = agora.getDate()
var mes = agora.getMonth()
var ano = agora.getFullYear()
console.log(diaSemana)
console.log(dia)
console.log(mes)
console.log(ano)
switch(diaSemana) {
case 0:
    (diaSemana = 'Domingo')
    break
case 1:
    (diaSemana = 'Segunda-feira')
    break
case 2:
    (diaSemana = 'Terça-feira')
    break
case 3:
    (diaSemana = 'Quarta-feira')
    break
case 4:
    (diaSemana = 'Quinta-feira')
    break
case 5:
    (diaSemana = 'Sexta-feira')
    break
case 6:
    (diaSemana = 'Sábado')
    break
default:
    (diaSemana = '[ERRO]')
    break
}
switch(mes) {
case 0:
    (mes = 'janeiro')
    break
case 1:
    (mes = 'fevereiro')
    break
case 2:
    (mes = 'março')
    break
case 3:
    (mes = 'abril')
    break
case 4:
    (mes = 'maio')
    break
case 5:
    (mes = 'junho')
    break
case 6:
    (mes = 'julho')
    break
case 7:
    (mes = 'agosto')
    break
case 8:
    (mes = 'setembro')
    break
case 9:
    (mes = 'outubro')
    break
case 10:
    (mes = 'novembro')
    break
case 11:
    (mes = 'dezembro')
    break
default:
    (mes = '[ERRO]')
    break
}
data.innerHTML = `<p>${diaSemana}, dia ${dia} de ${mes} de ${ano}.</p>`