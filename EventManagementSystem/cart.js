//view item





/*scroll top*/
let mybutton = document.getElementById("myScroll");


window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}







//Add to cart---------------------------------------------------------
let carts=document.querySelectorAll('.buttons-add');
let products=[
  {
    name:'Fancy Decorations',
    tag:'fancydecoration',
    price:34999,
    inCart:0
  },
  {
    name:'Mithun Decorations',
    tag:'mithundecoration',
    price:35999,
    inCart:0
  },{
    name:'Srusti Decorations',
    tag:'srustidecoration',
    price:75999,
    inCart:0
  },{
    name:'Modern Decorations',
    tag:'beach10',
    price:29499,
    inCart:0
  },{
    name:'Sana Decorations',
    tag:'sanadecoration',
    price:48599,
    inCart:0
  },{
    name:'Siva Decorations',
    tag:'sivadecoration',
    price:95499,
    inCart:0
  },{
    name:'Margo Decorations',
    tag:'margodecoration',
    price:70999,
    inCart:0
  },{
    name:'Ibhu Decorations',
    tag:'ibhudecoration',
    price:65799,
    inCart:0
  },
];
for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click',()=>{
    cartCount(products[i]);
    totalCost(products[i]);
    displayCart(products[i]);
    removeItems(products[i]);
  })
}
function onLoadCartCount(){
  let productCount=localStorage.getItem('cartCount');

  if(productCount){
    document.querySelector('.cart span').textContent=productCount;
  }
}
function cartCount(product){
  let productCount = localStorage.getItem('cartCount');
  productCount = parseInt(productCount);

  if(productCount){
  localStorage.setItem('cartCount',productCount+1);
  document.querySelector('.cart span').textContent=productCount+1;
  }
  else{
    localStorage.setItem('cartCount', 1);
    document.querySelector('.cart span').textContent=1;
  }
  setItems(product);
}
function setItems(product){
  let cartItems=localStorage.getItem('productsInCart');
  cartItems =JSON.parse(cartItems);

  if(cartItems !=null){

    if(cartItems[product.tag]==undefined){
      cartItems={
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart+=1;
  }else{
    product.inCart=1;
    cartItems={
      [product.tag]:product
    }
  }
      localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
let cartCost=localStorage.getItem('totalCost');
console.log("my cost is",cartCost);
console.log(typeof cartCost);

if(cartCost!=null){
  cartCost=parseInt(cartCost);
  localStorage.setItem("totalCost",cartCost+product.price);

}
else{
  localStorage.setItem("totalCost",product.price);
}
}

/*   -----------------*------------*/
/*
function removeItems(){
  let cartItems=localStorage.removeItem("productsInCart");
  cartItems=parseInt(cartItems);
  let productContainer=document.querySelector
  (".add-product");
  
  
  if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=`

    `})}
}
*/
function removeItems(name){
  for(let i=0;i<products.length;i++){
    if(products[i].name==name){
      products.splice(i,1);
      break;
    }
  }
}
/*increase decrease
const decreaseButton = document.querySelector('.decreasecount');
const increaseButton = document.querySelector('.increasecount');
const quantityInput = document.querySelector('.countvalue');

decreasecount.addEventListener('click', () => {
  const newQuantity = parseInt(quantityInput.value) - 1;
  if (newQuantity >= 1) {
    quantityInput.value = newQuantity;
  }
});*/
function increaseDecrease(){
  const quantityInput = document.querySelector('.countvalue');

  const newQuantity = parseInt(quantityInput.value) - 1;
  if (newQuantity >= 1) {
    quantityInput.value = newQuantity;
  }
}

/*------------------*/

function displayCart(){
  let cartItems=localStorage.getItem("productsInCart");
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector
  (".add-product");
  let cartCost=localStorage.getItem('totalCost');

  console.log(cartItems);
  
  if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=`
      <div class="cart-display-items">
                    <div class="product">
                    <i class="fa-solid fa-trash removeCart" onclick="removeItems()" ></i> 
                    
                    </div>
                    <div class="product1"> 
                    <img src="assets/images/${item.tag}.jpg">
                    </div>
                    <div class="product2">
                      <button>${item.name}</button>
                    </div>
                    <div class="product3">
                      <span>${item.price}</span>
                    </div>
                    <div class="quantity">
                    <i class="fa-solid fa-circle-arrow-left decreasecount" ></i>
                    <span class="countvalue"> ${item.inCart}</span>
                    <i class="fa-solid fa-circle-arrow-right increasecount" ></i>
                    </div>
                    <div class="total">
                    &#8377;${item.inCart * item.price}
                      </div>
                      `;
    });
    productContainer.innerHTML +=`
                    <div class="basket">
                    <h4 class="basketTitle">
                    Cart Total</h4>
                    <h4 class=" basketTotal">
                    &#8377;${cartCost}</h4></div>
    `;
  }
}

onLoadCartCount();
displayCart();
removeItems();




