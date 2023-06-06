// Get the modal
var modal = document.getElementById("myModal");
var modal1= document.getElementById("myModal1");
var modal2= document.getElementById("myModal2");
var modal3= document.getElementById("myModal3");
var modal4= document.getElementById("myModal4");
var modal5= document.getElementById("myModal5");
var modal6= document.getElementById("myModal6");
var modal7= document.getElementById("myModal7");


// Get the button that opens the modal
var btn = document.getElementById("beach1");
var btn1=document.getElementById("beach2");
var btn2=document.getElementById("beach3");
var btn3=document.getElementById("beach4");
var btn4=document.getElementById("beach5");
var btn5=document.getElementById("beach6");
var btn6=document.getElementById("beach7");
var btn7=document.getElementById("beach8");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}

/*// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal1.style.display="none";
}*/
const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');
const close7 = document.querySelector('.close7');


close.addEventListener('click', () => {
  modal.style.display = "none";
});
close1.addEventListener('click', () => {
  modal1.style.display = "none";
});
close2.addEventListener('click', () => {
  modal2.style.display = "none";
});
close3.addEventListener('click', () => {
  modal3.style.display = "none";
});
close4.addEventListener('click', () => {
  modal4.style.display = "none";
});
close5.addEventListener('click', () => {
  modal5.style.display = "none";
});
close6.addEventListener('click', () => {
  modal6.style.display = "none";
});
close7.addEventListener('click', () => {
  modal7.style.display = "none";
});






// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == modal1) {
    modal1.style.display = "none";
}
else if(event.target == modal2) {
  modal2.style.display = "none";
}
else if(event.target == modal3) {
  modal3.style.display = "none";
}
else if(event.target == modal4) {
  modal4.style.display = "none";
}
else if(event.target == modal5) {
  modal5.style.display = "none";
}
else if(event.target == modal6) {
  modal6.style.display = "none";
}
else if(event.target == modal7) {
  modal7.style.display = "none";
}

}






















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
    tag:'beachone',
    price:34999,
    inCart:0
  },
  {
    name:'Mithun Decorations',
    tag:'beachnine',
    price:35999,
    inCart:0
  },{
    name:'Srusti Decorations',
    tag:'beachfour',
    price:75999,
    inCart:0
  },{
    name:'Modern Decorations',
    tag:'beachten',
    price:29499,
    inCart:0
  },{
    name:'Sana Decorations',
    tag:'beacheleven',
    price:48599,
    inCart:0
  },{
    name:'Siva Decorations',
    tag:'beachtwelve',
    price:95499,
    inCart:0
  },{
    name:'Margo Decorations',
    tag:'beachseven',
    price:70999,
    inCart:0
  },{
    name:'Ibhu Decorations',
    tag:'beacheight',
    price:65799,
    inCart:0
  }
];
for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click',()=>{
    cartCount(products[i]);
    totalCost(products[i]);
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
function displayCart(){
  let cartItems=localStorage.getItem("productsInCart");
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".product-container");
  if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=`
      <div class="product-cart-list">
      <i class="fa-solid fa-trash"></i>              <img src="assets/images/${item.tag}.jpg">
        <span>${item.name}</span></div>`
    });
  }
}
onLoadCartCount();
displayCart();
