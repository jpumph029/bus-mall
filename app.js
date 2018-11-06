
'use strict';
var allOptions = [];
var threeOpt = [];
var optionName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cuthulu', 'dog-duck', 'dragon', 'pren', 'pet-sweep', 'sissors', 'shark', 'sweep', 'taintain', 'unicorn', 'usb', 'water-can', 'wine-glass'];

function Option(name, src) {
  this.name = name;
  this.src = src;

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
(function getRandomOption() {
  for (var i = 0; i < 3; i++) {
    threeOpt.push(Math.floor(Math.random() * optionName.length));
  };
  return console.log('You generated 3 random options', threeOpt)
}());
// renders options from threeOpt

   document.getElementById('opt1').src = allOptions[threeOpt[0]].src;
   document.getElementById('opt2').src = allOptions[threeOpt[1]].src;
   document.getElementById('opt3').src = allOptions[threeOpt[2]].src;


