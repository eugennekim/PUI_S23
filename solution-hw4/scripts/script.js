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
    let basePrice = 2.49;

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













  