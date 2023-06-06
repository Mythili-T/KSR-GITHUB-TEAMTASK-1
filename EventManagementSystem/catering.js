//view item
/*
let dropdown = document.querySelector(".dropdown");
let contentContainer = document.querySelector(".contentContainer");

dropdown.addEventListener("change",function() {
  switch (dropdown.value) {
    case "select":
      contentContainer.innerHTML =`
      <div class="myDiv1" id="shoSelect"><div class="order-cooking-type">
                                <div class="food-list-select">
                                <h5>Highlights</h5>
                                <ul>
                                    <li>Prepared in hygienic conditions.</li>
                                    <li>Providing first class quality.</li>
                                    <li>You can customise your items by contacting us after your order is placed.</li>
                                    
                                </ul>
                            </div>
                            </div></div>
      `;
      break;
      case "breakfast":
      contentContainer.innerHTML =`
      <div class="myDiv" id="showBreakfast"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">70</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                    <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        <li>Sambar</li>
                                        <li>Chutney</li>
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
                                </div>
                                </div>
      `;
      break;
    case "lunch":
      contentContainer.innerHTML =`
      <div class="myDiv" id="showLunch"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">200</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Rice</li>
                                            <li>Sambar</li>
                                            <li>Aviyal</li>
                                            <li>Vegetable Biryani</li>
                                            <li>Poriyal</li>
                                            <li>Appalam</li>
                                            <li>Sweets</li>
                                            <li>Kootu</li>
                                            <li>Rasam</li>
                                            <li>Thayir Pachadi</li>
                                        </ul>
                                    </div>
                                </div>
      `;
      break;
    case "dinner":
      contentContainer.innerHTML  =`
      <div class="myDiv" id="showDinner"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">180</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Vegetable biryani</li>
                                            <li>Chapathi</li>
                                            <li>Paneer Tekka</li>
                                            <li>pulihora</li>
                                            <li>Fried Rice</li>
                                            <li>Rasmalai</li>
                                            <li>Cauliflower Fry</li>
                                            <li>Banana</li>
                                        </ul>
                                    </div>
                                </div>

      `;
      break;
      
      
  }
});*/

document.querySelectorAll(".dropdown").forEach(dropdown=>{
  dropdown.addEventListener("change",function(){
    document.querySelectorAll(".contentContainer").forEach(productFull=>{
      switch (dropdown.value) {
        case "select":
          productFull.innerHTML =`
          <div class="myDiv1" id="shoSelect"><div class="order-cooking-type">
                                    <div class="food-list-select">
                                    <h5>Highlights</h5>
                                    <ul>
                                        <li>Prepared in hygienic conditions.</li>
                                        <li>Providing first class quality.</li>
                                        <li>You can customise your items by contacting us after your order is placed.</li>
                                        
                                    </ul>
                                </div>
                                </div></div>
          `;
          break;
          
          case "breakfast":
            productFull.innerHTML =`
            <div class="myDiv" id="showBreakfast"><div class="order-cooking-type">
                                          <p class="model-price">&#8377;</p><span id="pricetag1">70</span><span id="price-for">per plate</span></div>
                                          <div class="food-list">
                                          <h5>Item Contains</h5>
                                          <ul>
                                              <li>Idli</li>
                                              <li>Dosa</li>
                                              <li>Sambar</li>
                                              <li>Chutney</li>
                                              <li>Vada</li>
                                              <li>Ven pongal</li>
                                              <li>Kesari</li>
                                              <li>Banana</li>
                                          </ul>
                                      </div>
                                      </div>
            `;
            break;
            case "lunch":
            productFull.innerHTML =`
            <div class="myDiv" id="showLunch"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">200</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Rice</li>
                                            <li>Sambar</li>
                                            <li>Aviyal</li>
                                            <li>Vegetable Biryani</li>
                                            <li>Poriyal</li>
                                            <li>Appalam</li>
                                            <li>Sweets</li>
                                            <li>Kootu</li>
                                            <li>Rasam</li>
                                            <li>Thayir Pachadi</li>
                                        </ul>
                                    </div>
                                </div>
      `;
      
            break;
            case "dinner":
              productFull.innerHTML =`
            <div class="myDiv" id="showDinner"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">180</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Vegetable biryani</li>
                                            <li>Chapathi</li>
                                            <li>Paneer Tekka</li>
                                            <li>pulihora</li>
                                            <li>Fried Rice</li>
                                            <li>Rasmalai</li>
                                            <li>Cauliflower Fry</li>
                                            <li>Banana</li>
                                        </ul>
                                    </div>
                                </div>

      `;
      break;
      }
      document.querySelectorAll(".cater-display").forEach(item=>{
        item.addEventListener('change',event=>{
          id=item.getAttribute("data-caterid");
          productFull=document.getElementById(id);
          console.log(id);
        });
      });
});
  });
});
/*
let drop = document.querySelector(".drop");
let contentCon = document.querySelector(".contentCon");

drop.addEventListener("change", function() {
  switch (drop.value) {
    
      case "Breakfast":
      contentCon.innerHTML =`
      <div class="myDiv" id="showBreakfast"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">70</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                    <h5>Item Contains</h5>
                                    <ul>
                                        <li>Idli</li>
                                        <li>Dosa</li>
                                        <li>Sambar</li>
                                        <li>Chutney</li>
                                        <li>Vada</li>
                                        <li>Ven pongal</li>
                                        <li>Kesari</li>
                                        <li>Banana</li>
                                    </ul>
                                </div>
                                </div>
      `;
      break;
    case "lunch":
      contentCon.innerHTML =`
      <div class="myDiv" id="showLunch"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">200</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Rice</li>
                                            <li>Sambar</li>
                                            <li>Aviyal</li>
                                            <li>Vegetable Biryani</li>
                                            <li>Poriyal</li>
                                            <li>Appalam</li>
                                            <li>Sweets</li>
                                            <li>Kootu</li>
                                            <li>Rasam</li>
                                            <li>Thayir Pachadi</li>
                                        </ul>
                                    </div>
                                </div>
      `;
      break;
    case "dinner":
      contentCon.innerHTML  =`
      <div class="myDiv" id="showDinner"><div class="order-cooking-type">
                                    <p class="model-price">&#8377;</p><span id="pricetag1">180</span><span id="price-for">per plate</span></div>
                                    <div class="food-list">
                                        <h5>Item Contains</h5>
                                        <ul>
                                            <li>Vegetable biryani</li>
                                            <li>Chapathi</li>
                                            <li>Paneer Tekka</li>
                                            <li>pulihora</li>
                                            <li>Fried Rice</li>
                                            <li>Rasmalai</li>
                                            <li>Cauliflower Fry</li>
                                            <li>Banana</li>
                                        </ul>
                                    </div>
                                </div>

      `;
      break;
      default:
      contentCon.innerHTML =`
      <div class="myDiv1" id="shoSelect"><div class="order-cooking-type">
                                <div class="food-list-select">
                                <h5>Highlights</h5>
                                <ul>
                                    <li>Prepared in hygienic conditions.</li>
                                    <li>Providing first class quality.</li>
                                    <li>You can customise your items by contacting us after your order is placed.</li>
                                    
                                </ul>
                            </div>
                            </div></div>
      `;
      break;
      
  }
});*/



//selecting the cater list
var sizeSelect=document.getElementById("dropSelect");
sizeSelect.addEventListener("change",function(){
  var selectedsize=this.value;
  console.log(selectedsize);
})



/*
// Get the modal
var modal = document.getElementById("myModal");
var modal1= document.getElementById("myModal1");



// Get the button that opens the modal
var btn = document.getElementById("beach1");
var btn1 = document.getElementById("beach2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}




const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');

close.addEventListener('click', () => {
  modal.style.display = "none";
});
close1.addEventListener('click', () => {
  modal1.style.display = "none";
});


*/




// When the user clicks anywhere outside of the modal, close it




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

//add to cart//

let carts=document.querySelectorAll('.buttons-add');
let products=[
  {
    name:'Noosh Catering',
    tag:'caterone',
    price:54999,
    inCart:0
  },
  {
    name:'Cutler Catering',
    tag:'catertwo',
    price:54999,
    inCart:0
  },{
    name:'Healy Catering',
    tag:'caterthree',
    price:54999,
    inCart:0
  },{
    name:'Great Catering',
    tag:'caterfour',
    price:54999,
    inCart:0
  },{
    name:'Tasty Catering',
    tag:'caterone',
    price:54999,
    inCart:0
  },

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
onLoadCartCount();