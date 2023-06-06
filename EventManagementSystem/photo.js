/*view, open the product details*/ 

document.querySelectorAll(".close").forEach(close=>{
    close.addEventListener("click",function(){
      document.querySelectorAll(".modal").forEach(productFull=>{
        productFull.style.display="none";
      })
    });
  });
  
  
  document.querySelectorAll(".productid").forEach(item=>{
    item.addEventListener('click',event=>{
      id=item.getAttribute("data-productid");
      productFull=document.getElementById(id);
      productFull.style.display="block";
    });
  });
















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
    name:'Lotus Photography and Videography',
    tag:'lotus-photo-name',
    price:72899,
    inCart:0
  },
  {
    name:'Olga Gurton Wedding Photography and Videography',
    tag:'photo-name2',
    price:75499,
    inCart:0
  },{
    name:'The Wedding Network, Photography and Videography',
    tag:'photo-name3',
    price:77599,
    inCart:0
  }];
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
onLoadCartCount();

