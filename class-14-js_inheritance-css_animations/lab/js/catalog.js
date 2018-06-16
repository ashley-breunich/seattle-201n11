/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

    //TODO: Add an <option> tag inside the form's select for each product - DONE
    var selectElement = document.getElementById('items');
    for (var i in Product.allProducts) {
        var option = document.createElement('option');
        option.textContent = Product.allProducts[i].name;
        selectElement.appendChild(option);
    }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

    // TODO: Prevent the page from reloading - DONE
    event.preventDefault();
    // Do all the things ...
    addSelectedItemToCart();
    cart.saveToLocalStorage();
    updateCounter();
    updateCartPreview();
    event.target.items.value = null;
    event.target.quantity.value = null;
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    var selectElement = document.getElementById('items');
    var selectedName = selectElement.options[selectElement.selectedIndex].text;
    // TODO: suss out the item picked from the select list
    for(var i = 0; i < Product.allProducts; i++) {
        if(selectedName === Product.allProducts[i].name){
            var selectedFilePath = Product.allProducts[i].filepath;
        }
    }
    // TODO: get the quantity
    var newQuantity = document.getElementById('quantity');
    var selectedQuantity = newQuantity.value;
    // TODO: using those, add one item to the Cart
    new Cart(selectedName, selectedFilePath, selectedQuantity);
}

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(Cart.allInCart));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart

var counter = 0;
function updateCounter() {
    var quantity = document.getElementById('quantity');
    var newQuantity = quantity.value;
    counter += parseInt(newQuantity);
    var addToItemCount = document.getElementById('itemCount');
    addToItemCount.textContent = counter;
    console.log(addToItemCount);
} 
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
    // TODO: Get the item and quantity from the form
    var item = document.getElementById('items');
    var newItem = items.value;
    var newQuantity = quantity.value;
    // TODO: Add a new element to the cartContents div with that information
    var newChartContents = document.getElementById('cartContents');
    var ulEl = document.createElement('ul');
    var liEl = document.createElement('li');
    liEl.textContent = newItem + ': ' + newQuantity + ' Ordered';
    ulEl.appendChild(liEl);
    newChartContents.appendChild(ulEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();