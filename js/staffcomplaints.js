var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
  //   spaceBetween: 30,
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

//-------------------------------------------form----------------------------------------------
const form = document.querySelector("form");
aField = form.querySelector(".name"),
    aInput = aField.querySelector("input"),
bField = form.querySelector(".email"),
    bInput = bField.querySelector("input"),
eField = form.querySelector(".subject"),
    eInput = eField.querySelector("input"),
pField = form.querySelector(".message"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (aInput.value == "") ? aField.classList.add("shake", "error"): checkName();
    (bInput.value == "") ? bField.classList.add("shake", "error"): checkEmail();
    (eInput.value == "") ? eField.classList.add("shake", "error"): checkSubject();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkMessage();
    

    setTimeout(() => {
        aField.classList.remove("shake");
        bField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    aInput.onkeyup = () => { checkName(); }
    bInput.onkeyup = () => { checkEmail(); }
    eInput.onkeyup = () => { checkSubject(); }
    pInput.onkeyup = () => { checkMessage(); }

    function  checkFirstname() {
        if (aInput.value == "") {
            aField.classList.add("error");
            aField.classList.remove("valid");
        } else {
            aField.classList.remove("error");
            aField.classList.add("valid");
        }
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkSubject() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    function checkMessage() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }


    if (!aField.classList.contains("error") && !bField.classList.contains("error") &&
    !eField.classList.contains("error") && !pField.classList.contains("error") ) {
        window.location.href = form.getAttribute("action");
    }
}

