'use strict';
//basic function taking an element from the DOM and changing it using js
//the function acts like a store; it hold what you need until you are ready to use it. 

var msg = 'WE HAVE THE POWER';
function updateMessage() {
    //inside the function this is the first statement
    var element = document.getElementById('message');
    //inside the function this is the second statement
    element.textContent = msg;
}
//calling the function
updateMessage();

function sayHello() {
    document.write('Hello');
}
sayHello();
//function = keyword
//sayHello() is the function name
//code block is in the curly braces
//one statement in this code block

//declaring a function that needs info: parameter, used like variables in a function
//parameter are width & height
function getArea(width, height) {
    //function will calculate and return the value of width and height
    console.log('getArea: ' + width * height);
}
//when you call a function that has parameters, you specify the values it should use in the parenthese that follow it's name
//these values are claled arguments
getArea(3, 5);

//getting a single value out of a function
//functions can return more thatn one value using an array
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 1)[0];
var volumeOne = getSize(3, 2, 3)[1];
console.log('areaOne: ' + areaOne);
console.log('volume: ' + volumeOne);

//anonymous function: a function with no name ex var area = function()

//"iffy" IIFE immediately invoked function
//no name, instead are executed once as the javascript interpreter comes across them
//use them for code that only needs to run ONCE within a task: event handlers

var area = (function() {
    var width = 3;
    var height = 2;
    return width * height;
}());
console.log('area IIFE: ' + area);

//variable scope read pg 98
//area is local scope in the example (best practice)
//global scope? wallsize

function getArea(width, height) {
    var area = width * height;
    return area;
}
var wallSize = getArea(3, 2);
document.write(wallSize);