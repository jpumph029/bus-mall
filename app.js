
'use strict';
var allOptions = [];
var threeOpt = [];
var opt1 = '';
var opt2 = '';
var opt3 = '';
this.maxClicks = 0;
var ctx = document.getElementById("resultsChart").getContext('2d');
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

function handlesUserClicks() {
  for (var i = 0; i < allOptions.length; i++) {
    if (allOptions[i].src === opt1 || allOptions[i].src === opt2 || allOptions[i].src === opt3) {
      allOptions[i].clicks++;
      maxClicks++;
    }
  }
  if (maxClicks < 25) {
    localStorage.setItem('voteData', JSON.stringify(allOptions));
    drawOptions();
  } else if (maxClicks === 25) {
    displayChart();
    document.getElementById('clearData').addEventListener('click', function () {
      localStorage.clear();
      window.location.reload();
    });
  }
}
// makes the Options clickable
document.getElementById('opt1').addEventListener('click', handlesUserClicks);
document.getElementById('opt2').addEventListener('click', handlesUserClicks);
document.getElementById('opt3').addEventListener('click', handlesUserClicks);

function displayChart() {
  var names = [];
  for (var i = 0; i < allOptions.length; i++) {
    names.push(allOptions[i].name);
  }

  var votes = [];
  for (var j = 0; j < allOptions.length; j++) {
    votes.push(allOptions[j].clicks);
  }
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: names,
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: votes,
      }]
    },

    // Configuration options go here
    options: {
      responsive: false,
    }
  });
}
(function localStorageCheck() {
  if (localStorage.voteData) {
    console.log('There are items in localStorage');
    var parsedOptions = JSON.parse(localStorage.voteData);
    for (var i = 0; i < allOptions.length; i++) {
      allOptions = parsedOptions;
    }
  }
  else {
    console.log('localStorage is empty');
  }
})();


