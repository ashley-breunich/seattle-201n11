'use strict';
//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionlity that the machine adds to the objects 

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocations = [];
//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal or netTotal
var totalTotal = 0;
//constructor function begin with an Uppercase letter

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
    //a function called MakeLocation will be a template for creating new objects that represent other locations
    //the statements in this function add properties and or methods to the objects
    //the this keyword is used instead of the object name to indicate that the property or method belongs to the object that this function creates
    //this function has four parameters and each one sets the value of a peroperty in the object
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
    //why is this an array??
    this.randCustByHour = [];
    this.avgCookiesSoldPerHour = [];
    this.totalCookies = 0;
    allLocations.push(this);
    //using the this keyword in front of the method to show that the method belongs to the object that this function creates
    //this.calcRandCustByHour = function() {
        //methods go here
        //use prototypes
    // }
}
//remember to call the methods in the constructor that are now prototypes available to the new objects that the constructor will make using MakeLocation 
//this.calcRandCustByHour();

//call the function in a function if you want
//this constructor function creates four new objects with their own unique values in properties of this object( name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour)
function makeStands() {
    new MakeLocation('First and Pike', 23, 65, 6.3);
    new MakeLocation('SeaTac Airport', 3, 24, 1.2);
    //make one for each store...instantiate 
};
makeStands();

//time to create the table in javascript not html : ) 
//make header row
//table needs an id in html 

function makeHeaderRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
}
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remember to call makeHeaderRow();