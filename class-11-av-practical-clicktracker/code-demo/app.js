'use strict';
//array to store objects
Goat.allGoats = [];

//constructor function
function Goat(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    Goat.allGoats.push(this);
}

//to use my constructor to create new goat instances 
new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
new Goat('Kissing goat', 'img/kissing-goat.jpg');
new Goat('Sassy goat', 'img/sassy-goat.jpg');
new Goat('Smiling goat', 'img/smiling-goat.jpg');
new Goat('Sweater goat', 'img/sweater-goat.jpg');
//listener, something to be clicked...all about events!

var imgEl = document.getElementById('goat-pic');

imgEl.addEventListener('click', randomGoat);
//randomly display one of the pictures

function randomGoat() {
    var randomIndex = Math.floor(Math.random() * Goat.allGoats.length);
    imgEl.src = Goat.allGoats[randomIndex].filepath;
} 
randomGoat();