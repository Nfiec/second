// 1

/*let name = prompt('Пожалуйста, напишите Ваше имя', 'Егор')
alert('Спасибо ' + name)
let num = prompt(name + ' , введите число', '5')
alert('Ваше число в квадрате - ' + Math.pow(num, 2))*/

//2

/*let num1 = parseInt(prompt('Введите число 1', 5));
let num2 = parseInt(prompt('Введите число 2', 7));
alert('Среднее арифметическое: ' + (num1 + num2) / 2 );*/

//3

/*const km = prompt('Введите расстояние в км');
const mile = 0.62371;
let result = km * mile;
alert(' Киллометры в милях - ' + result);*/

//4

/*const num1 = parseInt(prompt('напишите первое число', '5'));
const num2 = parseInt(prompt('напишите второе число', '5'));
let result = 'Сумма - ' + (num1 + num2);
let result2 = 'Разность - ' + (num1 - num2);
let result3 = 'Умножение - ' + (num1 * num2);
let result4 = 'Деление - ' + (num1 / num2);

alert(result);
alert(result2);
alert(result3);
alert(result4);*/

//5

/*const a = parseInt(prompt('напишите число a', '15'));
const b = parseInt(prompt('напишите число b', '5'));
let x = ' x = -b/a' + (-b/a);

alert(x)*/

//6

/*const hours = parseInt(prompt('Часы'));
const mins = parseInt(prompt('Минуты'));
let TimeToNextDay = (23 - hours) + ' часа и ' + (60 - mins) + 'минут до полуночи';
alert(TimeToNextDay); */

// более удобный вариант решения 6 задачи 

/*const hours = parseInt(prompt('Часы'));

const mins = parseInt(prompt('Минуты'));
let TimeToNextDay = `${23 - hours} часа и ${60 - mins} минут до полуночи`;
alert(TimeToNextDay);*/

//7

/*const num = parseInt(prompt('Трехзначное число'));
let result = num % 100;
result = Math.trunc(result / 10);
alert(result)*/


/*const num = parseInt(prompt('Трехзначное число'));
let result = num.toString();
alert(result[0]);*/


//8

/* const num = parseInt(prompt('Пятизначное число'));
let step1 = (num % 10).toString();
let step2 = (Math.trunc(num / 10)).toString();
let step3 = step1 + step2;
alert(step3); */

//Домашнее задание
function check(num) {
  return (-1) ** num + 1 ? "чётное" : "нечётное";
}
const n = prompt("Введите целое число.");
alert(check(n));




























