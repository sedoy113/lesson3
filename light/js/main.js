//мой 
/*var yourBudget 	= prompt ("Ваш бюджет?");
var nameStore 	= prompt ("Название Вашего магазина?");
var mainList 		= {};
var open 				= 'open';
var shopGoods 	= [];
shopGoods[0] 		= prompt ("Какой тип товаров будем продавать?");
shopGoods[1] 		= prompt ("Какой тип товаров будем продавать?");
shopGoods[2] 		= prompt ("Какой тип товаров будем продавать?");

mainList = {
	yourBudget,
	nameStore,
	shopGoods,
	open: true,
	employers: {
		name: 'Ivan',
		name2: 'Sergey'
	}
};

console.log(mainList);
alert('Ваш бюджет на 1 день' + yourBudget/30);*/

//Иван
		let money 			= prompt ("Ваш бюджет?");
		let nameShop 		= prompt ("Название Вашего магазина?");
		let time 				= 19;

	let mainList = {
		budget: money,
		shopName: nameShop,
		shopGoods: [],
		open: false,
		employers: {}
	};
		//установили шаг цикла при помощи инкремента
		/*let i = 0;
		for (; i < 5; i++)
			alert( i !== 5 )*/

			/*		while (n < 5) {
					  n++;
					}*/

			/*	do {
		  		i = i + 1;
		  		result = result + i;
					} while (i < 5);
		}*/
		

	for (let i = 0; i < 5; i++) {

		let a = prompt ("Какой тип товаров будем продавать?");
	
		/*if-(оператор если), else-(еще) &&-(оператор и )знак сравнения, 
		length-(ограничение параметра) колл-во знаков, !=(проверка равенства)*/
		if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a != '' && a.length < 50 ) {
			mainList.shopGoods[i] = a;					
					
		} else  if(!a) { 
			i--;
				 	alert('Введите товар!');

			}
		
	}

	if (time < 0) {
		console.log('Такого не может быть');
	} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			} else if(time < 24) {
				console.log('Магазин не работает');
				} else {
					console.log('В сутках только 24 часа!');
				}

	console.log(mainList);
	alert('Ваш бюджет на 1 день' + money/30);







