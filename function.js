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