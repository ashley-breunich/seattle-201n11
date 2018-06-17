/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart = [];

function loadCart() {
    //cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    for (var i = 0; i < cart.length; i++) {
        tableBody.removeChild('tr');
    }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    // TODO: Find the table body
    var tableBody = document.getElementsByTagName('tbody')[0];
    // TODO: Iterate over the items in the cart
    for(var i = 0; i < cart.length; i++) {
        // TODO: Create a TR
        var trEl = document.createElement('tr');
        // TODO: Create a TD for the delete link, quantity,  and the item
        var tdElDelete = document.createElement('td');
        tdElDelete.textContent = 'X';
        var tdElQuantity = document.createElement('td');
        tdElQuantity.textContent = cart[i].quantity;
        var tdElItem = document.createElement('td');
        tdElItem.textContent = cart[i].name;
        // TODO: Add the TR to the TBODY and each of the TD's to the TR
        trEl.appendChild(tdElDelete);
        trEl.appendChild(tdElQuantity);
        trEl.appendChild(tdElItem);
        tableBody.appendChild(trEl);
    }
}

function removeItemFromCart(event) {
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    var removeItem = event.target.textContent;
    if (removeItem === 'X'){
        var tableBody = document.getElementsByTagName('tbody')[0];
        tableBody.removeChild(event.target.parentNode);
    }
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
    renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();