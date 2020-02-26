'use strict';

let a = 5;
console.log(a++); // 5

let finly = [] + false - null + true;
console.log(finly); // NaN

let y = 1;
let x = y = 2;
console.log(x); //2

let iter = [] + 1 + 2;
console.log(iter); // "12"

alert("1" [0]); // 1

alert(2 && 1 && null && 0 && undefined); // null
// разница есть  (!!(a && b) между (a && b)) 
//alert(typeof(!!(a && b))); 
//alert(typeof((a && b)));
console.log(null || 2 && 3 || 4); // 3

let len = [1, 2, 3];
let ken = [1, 2, 3];

if (len == ken) {
    console.log("Они равны");
} else {
    console.log("Не равны "); // Это правильный ответ
}

alert(+"Infinity"); //  Infinit

if ("Ёжик" > "яблоко") {
    console.log("Ёжик больше");
} else {
    console.log("Яблоко больше"); // Это правильный ответ
}

console.log(0 || "" || 2 || undefined || true || falsе)

console.log([] + false); // false