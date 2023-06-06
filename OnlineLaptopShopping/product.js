
const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
//const searchBox = document.querySelector("#search");
/* Search Product by Textbox */
document.querySelectorAll("#search").forEach(searchBox=>{
  searchBox.addEventListener('keyup', (e) => {
    searchText = e.target.value.toLowerCase().trim();
  
    boxes.forEach((box) => {
      const data = box.dataset.item;
      let loadMoreBtn = document.querySelector('#load-more');
      loadMoreBtn.style.display = 'none';
      if (data.includes(searchText)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  
    buttons.forEach((button) => {
      button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
  });
})



/*------------Filtration--------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    let loadMoreBtn = document.querySelector('#load-more');
    loadMoreBtn.style.display = 'none';
    e.preventDefault();
    setActiveBtn(e);
    const btnfilter = e.target.dataset.filter;
    console.log(btnfilter);
    boxes.forEach((box => {
      if (btnfilter == 'all') {
        box.style.display = "block";
      } else {

        const boxfilter = box.dataset.item;
        if (btnfilter == boxfilter) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }

      }
    }));


  });
});


function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
  e.target.classList.add('btn-clicked');
}


/*---------Load More Button-----------*/
window.onload = function () {
  let boxes = [...document.querySelectorAll('.product-container .box')];
  for (var i = 0; i < 12; i++) {
    boxes[i].style.display = 'inline-block';
  }
}

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 6;

loadMoreBtn.onclick = () => {
  let boxes = document.querySelectorAll('.product-container .box');
  for (var i = currentItem; i < currentItem + 6; i++) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem = currentItem + 6;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
}

/*-------------Product Description-----------------*/
bg = document.getElementsByClassName("bg");
document.querySelectorAll(".productid").forEach(item => {
  item.addEventListener('click', event => {
    id = item.getAttribute("data-productid");
    console.log(id);
    productFull = document.getElementById(id);
    bg[0].style.display = "block";
    productFull.style.display = "initial";
    productFull.style.top = "55%";
  });
});

/*-------------Closing Product Description-----------------*/
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    bg[0].style.display = "none";

    document.querySelectorAll(".product-description").forEach(productFull => {
      productFull.style.top = "-75%";
    })
  }
})

  document.querySelectorAll(".description-close").forEach(close=>{
    close.addEventListener("click",function(){
      bg[0].style.display = "none";
      document.querySelectorAll(".product-description").forEach(productFull => {
        productFull.style.top = "-75%";
      })
  })
  })



