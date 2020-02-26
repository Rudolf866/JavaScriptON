let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');

//console.log(box);
//console.log(btn);
//console.log(btn[0]);
//console.log(circle[2]);
//console.log(heart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'black';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

//let color = ['blue', 'green', 'gold'];

//for (let i = 0; i < heart.length; i++) {
//  heart[i].style.backgroundColor = color[i];
//}

//heart.forEach(function(item, i, heartmass) {
//    item.style.backgroundColor = 'blue';
//});

let div = document.createElement('div'),
    text = document.createTextNode('hello developer!!');

console.log(div);
console.log(text);

div.classList.add('black');
//document.body.appendChild(div);
//wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]); //Удаление кружка
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]); //Перемещаем кнопку с замещением

//div.innerHTML = '<h1>Hello Developer!!!</h1>';
div.textContent = 'Hello Developer!!!';