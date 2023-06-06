/*-----------Cart Items-------------*/
const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadlaptop);

function loadlaptop() {
  loadContent();
}

function loadContent() {
  //Remove Cart Items  From Cart
  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });

  //Product Item Change Event
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty);
  });
  //Product Cart 
  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);
  });
  //update total
  updateTotal();

}

//Remove Item
function removeItem() {
  if (confirm('Are You Sure to Remove')) {
    let title = this.parentElement.querySelector('.cart-lap-model').innerHTML;
    itemList = itemList.filter(el => el.title != title);
    this.parentElement.remove();
    loadContent();
  }
}
//Change Quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1 ||this.value>3) {
    this.value = 1;
  }
  loadContent();
}
let itemList = [];
//Add Cart
function addCart() {
  let count = itemList.length;
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
  if(count<5){
  let laptop = this.parentElement.parentElement;
  let title = laptop.querySelector('.lap-model').innerHTML;
  let price = laptop.querySelector('.lap-price').innerHTML;
  let imgSrc = laptop.querySelector('.lap-img').src;
  //console.log(title,price,imgSrc);

  let newProduct = { title, price, imgSrc }
  //Check Product if already exist in cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Product Already added in Cart");
    return;
  } else {
    itemList.push(newProduct);
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}else{
  alert("you cannot add products more than five")
}
  }else{
    alert('Please login... ');
    window.location.href='login.html';
  }
}

function createCartProduct(title, price, imgSrc) {
  return `
    <div class="cart-container">
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
      <div class="cart-lap-model">${title}</div>
      <div class="price-box">
        <div class="cart-price">${price}</div>
         <div class="cart-amt">${price}</div>
     </div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class="fa-solid fa-trash cart-remove"></i>
  </div>
    `;
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-container');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace(/\D/g, ''));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "₹ " + (price * qty).toLocaleString('en-IN');

  });

  totalValue.innerHTML = '₹ ' + total.toLocaleString('en-IN');
  //console.log(totalValue);

  // Add Product Count in Cart Icon

  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;
  cartCount.innerHTML = count;
  //hide and show place order and total
  const order_btn = document.querySelector('.btn-buy');
  const total_price = document.querySelector('.total');
  const emptyCartBox = document.querySelector('.empty-cart');
  if (count == 0) {
    cartCount.style.display = 'none';
    order_btn.style.display = 'none';
    total_price.style.display = 'none';
    emptyCartBox.style.display = 'block';

  } 
  else {
    cartCount.style.display = 'block';
    order_btn.style.display = 'block';
    total_price.style.display = 'flex';
    emptyCartBox.style.display = 'none';
  }


}


function passvalues() {
  var amount = document.getElementById("total-price").textContent;
  console.log(amount);
  localStorage.setItem("textvalue", amount);
  window.location.href("checkout.html");
}