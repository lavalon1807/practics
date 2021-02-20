'use strict';
let mapPins = document.querySelector('.map__pins');
let templePin = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');

var element = document.create

let TITLE = [
  'Привет-1',
  'Привет-2',
  'Привет-3',
  'Привет-4',
  'Привет-5',
  'Привет-6',
  'Привет-7',
  'Привет-8',
];

let locationX = [
  '240', '260', '280', '300', '320', '340', '360', '380'
];

let locationY = [
  '140', '160', '180', '200', '220', '240', '260', '280'
];

//Случайное число
function random(min, max) {
  return Math.floor(Math.random() * max - min) + min;
}


// Функция для создания массива
var massPin = [];
console.log(massPin)

function renderPin() {
  for (var i = 0; i < 8; i++) {
    var pin = {
      author: {
        avatar: 'img/avatars/user0' + i + '.png'
      },
      offer: {
        title: TITLE[i],
      },
      location: {
        x: locationX[i] + 'px',
        y: locationY[i] + 'px'
      }
    }
    massPin.push(pin)
  }

}

renderPin(random(1, 8));
