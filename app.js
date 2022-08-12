// Element selecting
const title = document.querySelector('#title');
const price = document.querySelector('#price');
const taxes = document.querySelector('#taxes');
const discount = document.querySelector('#discount');
const ads = document.querySelector('#ads');
const total = document.querySelector('#total');
const count = document.querySelector('#count');
const category = document.querySelector('#category');
const btnCreate = document.querySelector('#submit'); 


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

function getFromLocalStorage(){
    
    const products = JSON.parse(localStorage.getItem('Products')) || [];
    return products;
}

  const products = getFromLocalStorage();
// create a product
function createProduct(product){
    
    products.push(product);

    localStorage.setItem('Products', JSON.stringify(products));

}

btnCreate.addEventListener('click', () =>{

  const titleValue = title.value;
  const priceValue = price.value;
  const taxesValue = taxes.value;
  const discountValue = discount.value;
  const adsValue = ads.value;
  const countValue = count.value;
  const ctegoryValue = category.value;

  if(titleValue != '' || isNaN(titleValue) && priceValue != '' || isNaN(priceValue) && taxesValue != '' || isNaN(taxesValue) && discountValue != '' || isNaN(discountValue)
  && adsValue != '' || isNaN(adsValue) && countValue != '' || isNaN(countValue) && ctegoryValue != '' || isNaN(ctegoryValue)){

      const newProduct = {
          title : titleValue,
          price : priceValue,
          taxes : taxesValue,
          discount : discountValue,
          ads : adsValue,
          category : ctegoryValue
      }

      createProduct(newProduct);
  }
})


// get total
// create product
// save localStorage
// get localStorage
// clear Input fields
// read the data
// Update the data
// count
// delete


