'use strict';

//stringify all the things
//localStorage.setItem();
//add all the things to local storage
//what are all the things that you need to add in busmall? votes, names, clicks, views
//our stuff in local storage will be in JSON and not only JSON but stringified JSON

var john = {
    name: 'John',
    instructor: true,
    favNumShots: 6,
    willLaugh: function() {
        alert('hahahaha');
    }
};

var raychill = ['Rachel', true];

var anotherArray = ['random', 9, false, raychill];
var clearLS = document.getElementById('clearStorage');

clearLS.addEventListener('click', function() {
    console.log('click it!');
    localStorage.clear();
});
//localStorage.getItem();
var retrieved = localStorage.getItem('awesome');
//unstringify technically called parse
var parsed = JSON.parse(retrieved);