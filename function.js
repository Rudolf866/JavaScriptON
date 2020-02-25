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