var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
 spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
  delay: 1500,
},
  
});
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('ul');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('slide');
    
});