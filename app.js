
'use strict';
var allOptions = [];
var threeOpt = [];
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
//generates 3 randoms numbers ------- TO DO: THESE ARENT UNIQUE YET
function getRandomOption() {
  for (var i = 0; i < 3; i++) {
    threeOpt.push(Math.floor(Math.random() * optionName.length))
  };
  return console.log('You generated 3 random options', threeOpt);

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
    var opt1 = document.getElementById('opt1').src = allOptions[threeOpt[0]].src;
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

function drawImages() {
    threeOpt = [];
    getRandomOption();
    getUniqueOptions();
    
  }





// function addsClicks() {
  //   Option.clicks++;
//   console.log("clicks: ", this.clicks);
// }


document.getElementById('opt1').addEventListener('click', drawImages);
document.getElementById('opt2').addEventListener('click', drawImages);
document.getElementById('opt3').addEventListener('click', drawImages);

        function handlesUserClicks() {
          for (var i = 0; i < allOptions.length; i++) {
            if (allOptions[i].name === event.target.id) {
                allOptions[i].clicks++;
            }
          }
          if (clicks < 25) {
            getUniqueOptions();
          }
          else if (clicks === 25) {
        
          }
        }