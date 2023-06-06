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
  let productContainer=document.querySelector
  (".add-product");
  console.log(cartItems);
  if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=`
      <div class="product"><table>
    <tr>
                  <td  id="title">      <i class="fa-solid fa-trash"></i>  
                  </td>
                  <td>      <img src="assets/images/${item.tag}.jpg">
                  </td>
                  <td>        <span>${item.name}</span>
                  </td>
                  <td>        <span id="price">${item.price}</span>
                  </td>
              </tr></table>
    </div>
        
        `
    });
  }
}
onLoadCartCount();
displayCart();
