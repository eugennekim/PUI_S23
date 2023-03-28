//some knowledge from: https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

//gets item from storage, puts into cart
let cart = localStorage.getItem("cart");

//initialize empty array if cart does not exist (false)
if (!cart){
    localStorage.setItem("cart", JSON.stringify([]));
    cart = [];

//gets item from storage, changes to object
} else {
    cart = JSON.parse(localStorage.getItem("cart"));
}


//adds roll to array, changes cart to JSON string, gets JSON string from storage and changes to object, prints
function addToStorage(roll) {
    cart.push(roll)
    localStorage.setItem("cart", JSON.stringify(cart));
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
}

//removes roll from array, converts cart and reloads, prints
function removeFromStorage(roll) {
    //from: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    cart = cart.filter(item => item !== roll);  //if it equals the roll, filter

    localStorage.setItem("cart", JSON.stringify(cart)); //not using 'cart =' because we put copies into storage, and copies can not be recognized
    console.log(JSON.parse(localStorage.getItem("cart")));
}