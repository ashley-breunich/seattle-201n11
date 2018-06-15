'use strict';


while(!user) {
    user = prompt('What is your name? I need your name if you want to play.');
}
//while (user ==='' || user === null) {
    //this is the shorter version of the avobe expression
    //it is using type coercion to our advantage

//this is the not equal comparison operator
if (user !== 'rachel') {
    alert('too bad you are not Rachel');
}
 alert('Hi ' + user + '! I am so glad you want to play my game.');

 var answer = prompt('Is Rachel\'s favorite food kimchi?', 'type yes or no').toLowerCase();
 console.log(answer);

 var foodsIlike = ['jalapeno chips', 'spicy ramen', 'green chili cheeseburgers'];

 for (var i = 0; i < foodsIlike.length; i++) {
     console.log(foodsIlike[i]);
 }

//array methods but please look these up in mdn
//add to the end of my array
foodsILike.push('pho');

//pop off the array
var pop = foodsILike.pop();
console.log(foodsILike);

//unshift adds elements to the front of the array
foodsILike.unshift('tomatoes from my garden');
console.log(foodsILike);

//indexOf
//splice

var mixedArray = ['string', 37, true, ['burned my finger'], {}];

//check if the user's answer is correct
//list our cases!