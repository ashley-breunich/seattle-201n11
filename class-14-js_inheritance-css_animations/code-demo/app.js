'use strict';

var btn = document.getElementById('btn');
var input = document.getElementById('item');
var tasks = document.getElementById('tasks');

//need a way to save the input, add it to LocalStorage
//create li element for the input
//need an event to add the tasks to the list
//DOM manipulation within the elements
if (localStorage.list) {
    var list = localStorage.list.split(',');
} else {
    var list = [];
}
//a function to push the input into the list array
function save() {
    list.push(input.value);
    localStorage.list = list;
    console.log('list arr:', list);
    console.log('localStorage list:', localStorage.list);
}

//a function to manipulte the DOM and create the list
function create() {
    var val = input.value;
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(val));
    tasks.appendChild(item);
    input.value = '';
}

//a function to load localStorage and loop through the list array
function load() {
    if(localStorage.list) {
        var item;
        for(var x = 0; x < list.length; x++) {
            item = document.createElement('li');
            item.appendChild(document.createTextNode(list[x]));
            tasks.appendChild(item);
        }
    }
}

function render() {
    save();
    create();
}

load();

btn.addEventListener('click', render);