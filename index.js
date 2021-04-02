let basicQ = prompt('Количество товара в базисном периоде')
let basicP = prompt('Цена товара в базисном периоде')
let currentQ = prompt('Количество товара в отчетном периоде')
let currentP = prompt ('Цена товара в отчетном периоде')

let Laspeyres = ((currentP * basicQ)/(basicP * basicQ))
let Paasche = ((currentP * currentQ)/(basicP * currentQ))
let Fisher =(Math.sqrt(Laspeyres * Paasche))
alert('Индекс Ласпейреса равен: ' + Laspeyres +'; '+ 'Индекс Пааше равен: ' + Paasche +'; '+ 'Индекс Фишера раен: ' + Fisher)