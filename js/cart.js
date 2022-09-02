/* global Cart */

'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
let tableBody = document.querySelector('tbody');
tableBody.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let tableBody = document.querySelector('body');
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++){
 // DONE: Create a TR
 let tableRow = document.createElement('tr');
  // DONE: Create a TD for the delete link, quantity,  and the item
  let tableDelete = document.createElement('td');
  tableDelete.textContent= 'X';
  tableDelete.classList.add('delete');
  tableDelete.id = i;
  tableRow.appendChild(tableDelete);

  let tableQuantity = document.createElement('td');
  tableQuantity.textContent = cart.items[i].quantity;
  tableRow.appendChild(tableQuantity);

  let tableItem = document.createElement('td');
  tableItem.textContent = cart.items[i].product;
  tableRow.appendChild(tableItem);
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
  tableBody.appendChild(tableRow);
  }
}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
event.preventDefault();
if (event.target.classList.contains('delete')){
  cart.removeItem(parseInt(event.target.id));
  // DONE: Save the cart back to local storage
  cart.saveToLocalStorage();
  // DONE: Re-draw the cart table
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
