//these are notes for your co-working session to help you get started
//consider using math.random(); look that up in MDN

var pike = {
    min: 3,
    max: 9,
    avg: 6.1,
    getRandom: function(min, max) {
        return Math.random() * (max-min) + min;
    }
}

pikePlace.getRandom(pikePlace.min, pikePlace.max)

//1.) Create one object literal that will aggregate data, generate for each hour a number of cookies that need to be baked.
//2.) Once you have that data you will populate your DOM dynamically
//3.) With that data you'll create an unordered list.
//4.) You'll write a final method on the object literal called render and that will populate your data in the browser with DOM manipulation.
//5.) document.createElement(''); it takes a string argument that is the element that we want to create 

// example 
// var h1El = document.createElement('h1') creates an element with js but havent' attached it to the browser
//latch onto any id name

// DOM Interactions
// These are the most used and common methods for interacting with the DOM:
//     Getters: // Document or element methods:
//     document.getElementById(); //returns a single element;
// document.getElementsByClassName(); //returns an array of elements with same class;
// document.getElementsByTagName(); //returns an array of elements by tag;
// document.querySelectorAll(some css shiz) //returns an array of element nodes.
// Elements:
// document.createElement('div') //returns a new 'div' element with the provided string.
// element.children //returns all of the element's children with their own corresponding children.
// element.parentElement // refers to the element's parent element.
// element.appendChild(element) //puts the element arg and pushes it to the end of its children.
// element.removeChild(child element) //takes in the child element node to remove.
// element.insertBefore(new element, existing element); //inserts a new element before the 2nd parameter.
// Steps:
// Make a JavaScript reference(a variable) to the parent element
// Create the child element we want to add and save it as a variable
// Give the child content - in this case, the content is text
// Append the child to the parent
