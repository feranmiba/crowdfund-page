'use strict';
const selectReward = document.querySelectorAll('.stan');
const openReward = document.querySelector('.Selection');
const overlay = document.querySelector('.overlay');
const select = document.querySelectorAll('.select');
const tappedType = document.querySelector('.one');
const firstNum = document.querySelector('.one1');
const tappedType2 = document.querySelector('.two');
const SecondNum = document.querySelector('.two2');
const tappedType3 = document.querySelector('.three');
const badMessage = document.querySelector('.message');
const continued = document.querySelectorAll('.continue');
const pledge = document.querySelectorAll('.ledge');
const thankYou = document.querySelector('.modal');
const gotIt = document.querySelector('.close-modal');
const numberReduce1 = Number(document.querySelector('.num1').innerHTML);
const numberReduce2 = Number(document.querySelector('.num2').innerHTML);
const hamburger = document.querySelector('.hamburger');
const closeIt = document.querySelector('.close');
const mobileNav = document.querySelector('.nav__links');

//MOBILE OPEN AND CLOSE
hamburger.addEventListener('click', function () {
  console.log(`hamburger`);
  hamburger.style.display = `none`;
  closeIt.classList.remove('hidden');
  mobileNav.classList.remove('hid');
});

closeIt.addEventListener('click', function () {
  console.log(`hamburger`);
  hamburger.style.display = `inline-block`;
  closeIt.classList.add('hidden');
  mobileNav.classList.add('hid');
});

const honey = function () {
  if (numberReduce1 > 64) {
    const num = numberReduce1 - 1;
    Number((document.querySelector('.num01').textContent = `${num}`));
    numberReduce1.textContent = `${num}`;
  } else {
    numberReduce1.innerHTML = `0`;
  }
};
const honey2 = function () {
  if (numberReduce2 > 0) {
    const num = numberReduce2 - 1;
    Number((document.querySelector('.num02').textContent = `${num}`));
  } else {
    numberReduce2.innerHTML = `0`;
  }
};

//OPEN REWARD
const openModal = function (e) {
  e.preventDefault;
  openReward.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

selectReward.forEach(btn => btn.addEventListener('click', openModal));

// select.forEach((se, i, arr) => {
//   console.log(i);
// });
const shit = [...select];
console.log(shit.length);

//OPEN INPUT SESSION

const move = function () {
  tappedType.addEventListener('click', function () {
    firstNum.classList.remove('hide');
    SecondNum.classList.add('hide');
    honey();
  });

  tappedType2.addEventListener('click', function () {
    firstNum.classList.add('hide');
    SecondNum.classList.remove('hide');
    honey2();
  });

  tappedType3.addEventListener('click', function () {
    badMessage.classList.remove('hide');
  });
};
move();

//GO TOO THANK YOU STATE
continued.forEach(function (contine, index, key) {
  contine.addEventListener('click', function (e) {
    e.preventDefault;
    thankYou.classList.remove('hidden');
    openReward.classList.add('hidden');
  });
});

//FINISHES
gotIt.addEventListener('click', function (e) {
  e.preventDefault;
  thankYou.classList.add('hidden');
  overlay.classList.add('hidden');
  firstNum.classList.add('hide');
  SecondNum.classList.add('hide');
  badMessage.classList.add('hide');
});

//SCROOLING
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// OUT OF STOCK
const randomColor = () =>
  `rgb(${randomInt(0, 255)},  ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.Mahogany').style.backgroundColor = `red`;
