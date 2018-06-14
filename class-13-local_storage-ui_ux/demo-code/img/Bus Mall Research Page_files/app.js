'use strict';
var allImages = [];

if (localStorage.getItem('storeData')){
  allImages = [];
  allImages = JSON.parse(localStorage.getItem('storeData'));
} else {
  makeImgObj();
};


var imgContain = document.getElementById('imgContain');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var leftImg;
var centerImg;
var rightImg;
var oldLeft;
var oldCenter;
var oldRight;
var counter = 0;
var votes = [];
var imgIds = [];


// constructor function for making image objects
//whatever object you create with the function gets these properties
//push this new object into the all images array
function MakeImages(imgname, fname) {
  this.imgname = imgname;
  this.fname = fname;
  this.shown = 0;
  this.clicked = 0;
  allImages.push(this);
}

// call constructors
function makeImgObj() {
  new MakeImages('R2D2 Bag', 'images/bag.jpg');
  new MakeImages('Banana Cutter', 'images/banana.jpg');
  new MakeImages('Bathroom Holder', 'images/bathroom.jpg');
  new MakeImages('Toeless Boots', 'images/boots.jpg');
  new MakeImages('Breakfast Maker', 'images/breakfast.jpg');
  new MakeImages('Meatball Bubblegum', 'images/bubblegum.jpg');
  new MakeImages('Convex Chair', 'images/chair.jpg');
  new MakeImages('Cthulhu', 'images/cthulhu.jpg');
  new MakeImages('Duck Beak', 'images/dog-duck.jpg');
  new MakeImages('Dragon Meat', 'images/dragon.jpg');
  new MakeImages('Cutlery Pens', 'images/pen.jpg');
  new MakeImages('Pet Sweep', 'images/pet-sweep.jpg');
  new MakeImages('Pizza Scissors', 'images/scissors.jpg');
  new MakeImages('Shark Sleeping Bag', 'images/shark.jpg');
  new MakeImages('Baby Sweeper', 'images/sweep.png');
  new MakeImages('Tauntaun Sleeping Bag', 'images/tauntaun.jpg');
  new MakeImages('Unicorn Meat', 'images/unicorn.jpg');
  new MakeImages('Tenticle USB', 'images/usb.gif');
  new MakeImages('Water Can', 'images/water-can.jpg');
  new MakeImages('Wine Glass', 'images/wine-glass.jpg');
};

// pick 3 numbers at a time function
//
function pick3() {
  if (counter >= 25) {
    imgContain.removeEventListener('click', handleImgClick);
    updateChartArrays();
    drawChart();
    var allImagesString = JSON.stringify(allImages);
    localStorage.setItem('storeData', allImagesString);
    return;
  } else {
    hideChart();
    leftImg = Math.floor(Math.random() * 20);
    centerImg = Math.floor(Math.random() * 20);
    rightImg = Math.floor(Math.random() * 20);

    // console.log('left index is: ' + leftImg);
    // console.log('center index is: ' + centerImg);
    // console.log('right index is : ' + rightImg);
  }
// validates unique numbers, then writes img src path to DOM
  if (leftImg === centerImg || leftImg === rightImg || centerImg === rightImg || leftImg === oldLeft || leftImg === oldCenter || leftImg === oldRight || centerImg === oldLeft || centerImg === oldCenter || centerImg === oldRight || rightImg === oldLeft || rightImg === oldCenter || rightImg === oldRight) {
    pick3();
  } else {
    left.src = allImages[leftImg].fname;
    center.src = allImages[centerImg].fname;
    right.src = allImages[rightImg].fname;
    oldLeft = leftImg;
    oldCenter = centerImg;
    oldRight = rightImg;
    allImages[leftImg].shown += 1;
    allImages[centerImg].shown += 1;
    allImages[rightImg].shown += 1;
  }
}
pick3();

// This function is the event handler for an image click
function handleImgClick(event) {
  if (event.target.id === 'left') {
    allImages[leftImg].clicked += 1;
    console.log(allImages[leftImg].imgname + ' ' + allImages[leftImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'center') {
    allImages[centerImg].clicked += 1;
    console.log(allImages[centerImg].imgname + ' ' + allImages[centerImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'right') {
    allImages[rightImg].clicked += 1;
    console.log(allImages[rightImg].imgname + ' ' + allImages[rightImg].clicked);
    counter += 1;
    pick3();
  }
  if (event.target.id === 'imgContain') {
    alert('You need to click on an image!');
    pick3();
  }
};

// Chart function area
function hideChart() {
  document.getElementById('research-chart').hidden = true;
}

function updateChartArrays() {
  for (var i = 0; i < allImages.length; i++) {
    imgIds[i] = allImages[i].imgname;
    votes[i] = allImages[i].clicked;
  }
}
//data for the chart
var data = {
  labels: imgIds,
  datasets: [
    {
      label: 'Your Choices',
      data: votes,
      backgroundColor: [
        'rgb(0,0,0)',
        'rgb(0,0,128)',
        'rgb(0,0,255)',
        'rgb(0,128,0)',
        'rgb(0,128,128)',
        'rgb(0,255,0)',
        'rgb(0,255,255)',
        'rgb(128,0,0)',
        'rgb(128,0,128)',
        'rgb(128,128,0)',
        'rgb(128,128,128)',
        'rgb(192,192,192)',
        'rgb(255,0,0)',
        'rgb(255,0,255)',
        'rgb(255,255,0)',
        'rgb(215, 44, 122)',
        'rgb(84, 44, 122)',
        'rgb(84, 137, 122)',
        'rgb(208, 137, 122)',
        'rgb(208, 137, 28)',
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('research-chart').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    width: 300,
    data: data,
    options: {
      responsive: false ,
      scales: {
        yAxes: [{
          xAxes: [{
            ticks: {
              stepSize: 1,
              beginAtZero:true
            }
          }]
        }]
      }
    }
  });
}

// Event listener for an image clicked
imgContain.addEventListener('click', handleImgClick);
