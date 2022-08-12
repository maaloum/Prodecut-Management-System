// Element selecting
const price = document.querySelector('#price');
const taxes = document.querySelector('#taxes');
const discount = document.querySelector('#discount');
const ads = document.querySelector('#ads');
const total = document.querySelector('#total');

// calculate total of a product
function getTotal(){
    const priceValue = price.value;
    const taxesValue = taxes.value;
    const discountValue = discount.value;
    const adsValue = ads.value;
    if(priceValue != '' || isNaN(priceValue)){
      const totalValue = (+priceValue + +taxesValue + (+adsValue)) - (+discountValue);
      total.innerHTML = totalValue;
      total.style.backgroundColor = 'green';
    }
    else{
      total.innerHTML = 'Enter the price';
      total.style.backgroundColor = 'green';
    }

}






// get total
// create product
// save localStorage
// get localStorage
// clear Input fields
// read the data
// Update the data
// count
// delete
