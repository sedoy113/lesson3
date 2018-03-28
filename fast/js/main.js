//доп.урок
/*	function first() {
		setTimeout( function(){
			console.log(1);
		}, 300);
	}

		function second() {		
			console.log(2);
	}
first();
second();


function learnJS(lang, callback) {
	console.log('Я учу' +''+ lang);
	callback();
}*/
/*learnJS('JS', function(){
	console.log('Я прошел 3-й урок');
});*/

/*learnJS('JS', done, first, second);
	function done(){
				console.log('Я прошел 3-й урок');
}*/

//Сделать так, чтобы строка начиналась с большой буквы


function capitalLetter() {
	let str = 'урок-3-был слишком легким'
			str = str.charAt(0).toUpperCase() + str.substr(1);
			document.writeln( '<H1>'+ str +'</H1>');
}
capitalLetter();

//замените все “-” на пробелы Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”
function dah() {
	let str = 'урок-3-был слишком легким'
			str = str.replace(/[--]+/g,' ').replace('легким','').replace('ом','оо');
			document.writeln( '<H1>'+ str +'</H1>');
}
dah();

// Вывести в консоль квадратный корень из суммы кубов его элементов
let arr = [20, 33, 1, 'Человек', 2, 3];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== '' && arr[i] !== null) {
        let x = (arr[i])**3;
        result += x;
    }
}
document.writeln('Квадратный корень из суммы кубов элементов массива равен: ' + Math.sqrt(result));

/*var arr = [20, 33, 1,"Человек", 2, 3]; 
var b = 0; 
for(var i=0; i<arr.length; i++) { 
b+=Math.pow(arr[i],3); 
} 
document.writeln('Квадратный корень из суммы кубов массива arr - ' + Math.sqrt(b));*/