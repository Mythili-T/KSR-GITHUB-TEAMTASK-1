
function changeimg(event) {
  document.getElementById("main-img").src = event.children[0].src;
}



// .....................................................................................................................SLIDER............................................................................................................................

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
});


// ...................................................................................................................progress bar...............................................................................................................
function status() {
  
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    }
    else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width + '%';
        if(width == 100){
          elem.innerHTML ='loaded';
        }
    }
  }
  
  
}


