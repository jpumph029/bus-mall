
'use strict';
var allOptions = [];
var threeOpt = [];
var opt1 = '';
var opt2 = '';
var opt3 = '';
this.maxClicks = 0;
var optionName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Option(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  allOptions.push(this);
}

// links option name with images and sticks the in the allOptions array
(function buildOptions() {
  for (var i = 0; i < optionName.length; i++) {
    new Option(optionName[i], 'assets/' + optionName[i] + '.jpg');
    console.log('you made all Options');
  }
})();

//generates 3 randoms numbers and pushes them to threeOpt
function getRandomOption() {
  for (var i = 0; i < 3; i++) {
    threeOpt.push(Math.floor(Math.random() * optionName.length))
  };
  // return console.log('You generated 3 random options', threeOpt);
}
getRandomOption();

// makes sure the number in threeOpt are unique
function isUnique() {
  if (threeOpt[0] !== threeOpt[1] && threeOpt[1] !== threeOpt[2] && threeOpt[2] !== threeOpt[0]) {
    return true;
  } else {
    return false;
  }
}

// if threeOpt[] is unique push images to the screen
function getUniqueOptions() {
  if (isUnique() === true) {
    opt1 = document.getElementById('opt1').src = allOptions[threeOpt[0]].src;
    var opt2 = document.getElementById('opt2').src = allOptions[threeOpt[1]].src;
    var opt3 = document.getElementById('opt3').src = allOptions[threeOpt[2]].src;
    return;
  } else {
    threeOpt = [];
    getRandomOption();
    getUniqueOptions();
  }
}
getUniqueOptions();

// 
function drawOptions() {
  threeOpt = [];
  getRandomOption();
  getUniqueOptions();
}

// makes the Options clickable
document.getElementById('opt1').addEventListener('click', handlesUserClicks);
document.getElementById('opt2').addEventListener('click', handlesUserClicks);
document.getElementById('opt3').addEventListener('click', handlesUserClicks);

function handlesUserClicks() {
  for (var i = 0; i < allOptions.length; i++) {
    if (allOptions[i].src === opt1 || allOptions[i].src === opt2 || allOptions[i].src === opt3) {
      allOptions[i].clicks++;
      maxClicks++;
    }
  }
  if (maxClicks <= 25) {
    drawOptions();
  } else if (maxClicks === 25) {
    // do something or nothing. 
  }
}
<<<<<<< HEAD
function displayChart() {
  
}
=======
>>>>>>> a975498410342146c157845f0cb72228dbf4d2a7
