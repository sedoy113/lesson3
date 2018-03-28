//переменные
		let money,
				nameShop,
				time,
				price
//обьявление функции

		function start() {
			money = prompt("Ваш бюджет?"); //значение переменных
			//операция сравнения ||-или
			while (isNaN(money) || money == "" || money == null) {
					money = prompt("Ваш бюджет?");
			}

			nameShop 		= prompt("Название Вашего магазина?").toUpperCase();//с заглавной буквы toUpperCase();
		}
		start(); //вызов функции

	let mainList = {
		budget: money,
		shopName: nameShop,
		shopGoods: [],
		open: false,
		employers: {},
		discount: false
	};
		function chooseGoods() {
				for (let i = 0; i < 5; i++) {

					let a = prompt ("Какой тип товаров будем продавать?");
				
					/*if-(оператор если), else-(еще) &&-(оператор и )знак сравнения, 
					length-(ограничение параметра) колл-во знаков, !=(проверка равенства)*/
					if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a !=+ '' && a.length < 50 ) {
						mainList.shopGoods[i] = a;					
								
					} else { 
						i = i -1;
						 alert('Введите товар!');
					}	
				}
	}
chooseGoods();

// сотрудники
function employers() {
				for (let i = 0; i < 4; i++) {

					let a = prompt ("Введите имя сотрудника");
					let b = prompt ("Введите номер сотрудника");
				
					if ((typeof(a)) === 'string'  &&  (typeof(a)) !== null && a,b !=+ '' && a.length < 50 ) {
						mainList.employers.name = a;
						mainList.employers.number = b;
						alert( mainList.employers.name+ ': ' + mainList.employers.number);					
								
					} else { 
						i = i -1;
						 alert('Введите имя!');
					}	
				}
	}
	employers();

	//скидка
	function discount() {
			price = prompt("У нас промоакция, введите вашу сумму"); //значение переменных
			//операция сравнения ||-или
			while (isNaN(price) || price == "" || price == null) {
					alert('Вы не ввели сумму скидка сгорела');
					if (!price) break; // (*)

			}
			alert('Ваша скидка' + price*0.80);
		}
		discount(); //вызов функции

// время работы
	function workTime(time) {

		if (time < 0) {
			console.log('Такого не может быть');
		} else if(time > 8 && time < 20) {
				console.log('Время работать!');
				} else if(time < 24) {
					console.log('Магазин не работает');
					} else {
						console.log('В сутках только 24 часа!');
					}
	}
	/*workTime(19);*/

	console.log(mainList);
	alert('Ваш бюджет на 1 день' + money/30);







