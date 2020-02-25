'use strict';

//function calc(a, b) {
//   return a + b;
//}
// let calc = function(a,b){
//return (a + b);
//}
let calc = (a, b) => a + b;
console.log(calc(5, 5));

let str = "text";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelfe = "12.2px";
console.log(parseInt(twelfe));
console.log(parseFloat(twelfe));

let one = "33.456";
console.log(Math.round(one));

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function call(lang, callback) {
    console.log("Я учу :" + lang);
    callback();
}

//call("JavaScript", function(){
//   console.log("Мне нравится этот язык");
//});

function done() {
    console.log("Мне нравиться этот язык");
}

call("javaScript", done);

let obj = {
    width: 440,
    heigth: 350,
    bool: true
};

console.log(obj.heigth);
obj.name = "Rudik";
obj.parametrs = {
    age: 33,
    surname: "Kovalevskiy"
};

delete obj.name;

console.log(obj);

for (let key in obj) {
    console.log("Свойство : " + key + "  значение : " + obj[key]);
}

console.log(Object.keys(obj).length);

let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push("Rudik");
arr.shift();
arr.unshift("Kovalevskiy");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(" Индекс  " + "     Значение   " + "   Массив    ");
arr.forEach(function(item, idx, massiv) {
    console.log(idx + "  : " + item + " - " + " Массив - " + massiv);
});

console.log(arr);

let mass = [1, 2, 3, 4, 5];

for (let key in mass) {
    console.log(key); //0,1,2,3,4
}

for (let key of mass) {
    console.log(key); //1,2,3,4,5
}

let ans = prompt("", ""),
    arrs = [];

arrs = ans.split(',');

console.log(arrs);

let element = ["one", "two", "five"],
    i = element.join(', ');

console.log(element); //[ 'one', 'two', 'five' ]

let elements = ["one", "two", "five"],
    is = element.join(', ');

console.log(is); //one, two, five

let elem = ["one", "two", "five"],
    ist = elem.sort();

console.log(elem); //[ 'five', 'one', 'two' ]

let el = [1, 15, 4],
    ia = el.sort(sortired);

function sortired(a, b) {
    return a - b;
}

console.log(el); //[ 1, 15, 4 ]//sortired()=> [ 1, 4, 15 ]

var fruits = ['Яблоко', 'Банан'];

console.log(fruits.length); // 2

var first = fruits[0]; // Яблоко

var last = fruits[fruits.length - 1]; // Банан

fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
// Яблоко 0
// Банан 1

var newLength = fruits.push('Апельсин'); // ["Яблоко", "Банан", "Апельсин"]

var last = fruits.pop(); // удалим Апельсин (из конца)
// ["Яблоко", "Банан"];

var first = fruits.shift(); // удалим Яблоко (из начала)
// ["Банан"];

var newLength = fruits.unshift('Клубника') // добавляет в начало
    // ["Клубника", "Банан"];

fruits.push('Манго');
// ["Клубника", "Банан", "Манго"]

var pos = fruits.indexOf('Банан');
// 1

var removedItem = fruits.splice(pos, 1); // так можно удалить элемент

// ["Клубника", "Манго"]

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables);
// ["Капуста", "Репа", "Редиска", "Морковка"]

var pos = 1,
    n = 2;

var removedItems = vegetables.splice(pos, n);
// так можно удалить элементы, n определяет количество элементов для удаления,
// начиная с позиции(pos) и далее в направлении конца массива.

console.log(vegetables);
// ["Капуста", "Морковка"] (исходный массив изменён)

console.log(removedItems);
// ["Репа", "Редиска"]

var shallowCopy = fruits.slice(); // так можно создать копию массива
// ["Клубника", "Манго"]

var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(years .0); // синтаксическая ошибка
console.log(years[0]); // работает как положено

var promise = {
    'var': 'text',
    'array': [1, 2, 3, 4]
};

console.log(promise['array']);


var fruits = [];
fruits.push('банан', 'яблоко', 'персик');

console.log(fruits.length); // 3

fruits[5] = 'манго';
console.log(fruits[5]); // 'манго'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

// Сопоставляется с одним символом d, за которым следует один
// или более символов b, за которыми следует один символ d
// Запоминаются сопоставившиеся символы b и следующий за ними символ d
// Регистр игнорируется

var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');


function isLetter(character) {
    return character >= 'a' && character <= 'z';
}


if (Array.every(str, isLetter)) {
    console.log("Строка '" + str + "' содержит только (латинские) буквы!");
}

var msgArray = [];
msgArray[0] = 'Привет';
msgArray[99] = 'мир';

if (msgArray.length === 100) {
    console.log('Длина равна 100.');
}


var board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(board.join('\n') + '\n\n');

// Двигаем королевскую пешку вперёд на две клетки
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));