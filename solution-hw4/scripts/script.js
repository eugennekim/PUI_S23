let allGlazingOptions = [
  {
    glazingOption: 'Keep original',
    priceAdaption: 0.00,
  },
  {
    glazingOption: 'Sugar milk',
    priceAdaption: 0.00
  },
  {
    glazingOption: 'Vanilla milk',
    priceAdaption: 0.50
  },
  {
    glazingOption: 'Double chocolate',
    priceAdaption: 1.50
  },
];

let allPackSizeOptions = [
    {
      packSizeOption: '1',
      priceAdaption: 1
    },
    {
      packSizeOption: '3',
      priceAdaption: 3
    },
    {
      packSizeOption: '6',
      priceAdaption: 5
    },
    {
      packSizeOption: '12',
      priceAdaption: 10
    },
  ];

  // logic to update price
  function updatePrice(glazingOptionPrice, packSizePrice) {
    let priceElement = document.querySelector('#price');
    let basePrice = roll.basePrice;

    let finalPrice = (basePrice + glazingOptionPrice) * packSizePrice;
    // from https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    finalPrice = finalPrice.toFixed(2);

    priceElement.innerText = "$" + finalPrice;
  }

  //gets value in glazing index and updates price
  function onSelectGlazingOption() {
    let glazingPrice = parseFloat(this.value);

    let packElement = document.querySelector('#Pack-size');
    let packPrice = parseFloat(packElement.value);
    
    updatePrice(glazingPrice, packPrice);
  }

  //gets value in pack size index and updates price
  function onSelectPackSizeOption(){
    let packSizePrice = parseFloat(this.value);

    let glazingElement = document.querySelector('#Glazing');
    let glazingPrice = parseFloat(glazingElement.value);

    updatePrice(glazingPrice, packSizePrice);
  }


  //add event listener to select for pack size and glazing options to call respective functions
  let selectGlazingElement = document.querySelector('#Glazing');
  selectGlazingElement.addEventListener('change', onSelectGlazingOption);

  let selectPackElement = document.querySelector('#Pack-size');
  selectPackElement.addEventListener('change', onSelectPackSizeOption);


  //creates item for glazing options
  allGlazingOptions.forEach(createGlazingOption);

  function createGlazingOption(item) {
    var option = document.createElement('option');
    option.text = item.glazingOption; //text shown
    option.value = item.priceAdaption; //value used
    selectGlazingElement.add(option);
  }

  //creates item for pack size options
  allPackSizeOptions.forEach(createPackSizeOption);

  function createPackSizeOption(item) {
    var option = document.createElement('option');
    option.text = item.packSizeOption;
    option.value = item.priceAdaption;
    selectPackElement.add(option);
  }


 // cart logic 
let cart = [];

class Roll {

  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

//gets glazing and pack size from document
function addToCart() {
  let glazingElement = document.querySelector('#Glazing');
  let packElement = document.querySelector('#Pack-size');
  
  // from: https://stackoverflow.com/questions/14976495/get-selected-option-text-with-javascript
  rollGlazing = glazingElement.options[glazingElement.selectedIndex].text;
  packSize = packElement.options[packElement.selectedIndex].text;

  //makes new roll and adds to end of array
  let newRoll = new Roll(rollType, rollGlazing, packSize, roll.basePrice)
  cart.push(newRoll)

  console.log(cart)
}


//gets rollType from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get(`roll`);

//gets roll based on rollType
const roll = rolls[rollType]; //not period bc variable


//updates header to reflect selected roll
let header = document.querySelector('.tagline');
header.innerText = rollType + ' Cinnamon Roll';


//updates image to reflect selected roll
document.querySelector('#image').src = 'images/' + roll.imageFile;


//updates basePrice to reflect selected roll
let basePriceElement = document.querySelector('#price');
basePriceElement.innerText = '$' + roll.basePrice;













  