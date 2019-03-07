//1 menu
let menuList = document.querySelector('.menu');
let lastItem = document.createElement('li');
lastItem.classList.add('menu-item');
lastItem.textContent = 'Пятый пункт';
menuList.appendChild(lastItem);

//2 changeBG
document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

//3 title
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

//4 remove adv
let adv = document.querySelector('.adv');
//adv.remove();new
adv.parentNode.removeChild(adv);
//adv.parentElement.removeChild(adv);

//5 ask user
let question = prompt('Ваше отношение к технике Apple?', '');
let promptAnswer = document.getElementById('prompt');
promptAnswer.textContent = question;

