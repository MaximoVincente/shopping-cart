/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
 let optionEl = document.createElement('option');
 optionEl.textContent = Product.allProducts[i].name;
 selectElement.appendChild(optionEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

function handleSubmit(event) { 
  event.preventDefault(); 

  // DONE: Prevent the page from reloading

//   // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// DONE: Add the selected item and quantity to the cart

function addSelectedItemToCart() {
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  cart.addItem(item,quantity);
  // DONE: suss out the item picked from the select list

  // DONE: get the quantity
  // DONE: using those, add one item to the Cart
}

// DONE: Update the cart count in the header nav with the number of items in the Cart
let counter = 0;
let itemCounter = document.getElementById('itemCount');
function updateCounter() { 
counter = 0;
let counterArray = [];
for (let i = 0; i < cart.items.length; i++){
  let quantity = cart.items[i].quantity;
  counterArray.push(Number(quantity));
  counter += counterArray[i];
}
itemCounter.innerText = `You have ${counter} items in your Cart`
// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
}
function updateCartPreview() {
  let product = null;
  let cartContents = document.getElementById('cartContents');
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  let cartPreview = document.createElement('div');
  for (let i = 0; i < Product.allProducts.length; i++){
    if(item === Product.allProducts[i].name){
      product = Product.allProducts[i];
    }
  }
  cartPreview.innerText = `You added ${quantity} ${item} to your cart.`;
  cartContents.appendChild(cartPreview);
  // DONE: Get the item and quantity from the form
  // DONE: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
