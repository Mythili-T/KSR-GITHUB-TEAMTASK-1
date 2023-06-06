const form = document.querySelector("form");
aField = form.querySelector(".firstname"),
    aInput = aField.querySelector("input"),
bField = form.querySelector(".lastname"),
    bInput = bField.querySelector("input"),
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");
cField = form.querySelector(".comformpassword"),
    cInput = cField.querySelector("input");   

form.onsubmit = (e) => {
    e.preventDefault();

    (aInput.value == "") ? aField.classList.add("shake", "error"): checkFirstname();
    (bInput.value == "") ? bField.classList.add("shake", "error"): checkLastname();
    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();
    (cInput.value == "") ? cField.classList.add("shake", "error"): checkConPass();

    setTimeout(() => {
        aField.classList.remove("shake");
        bField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
        cField.classList.remove("shake");
    }, 500);

    aInput.onkeyup = () => { checkFirstname(); }
    bInput.onkeyup = () => { checkLastname(); }
    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }
    cInput.onkeyup = () => { checkConPass(); }

    function  checkFirstname() {
        if (aInput.value == "") {
            aField.classList.add("error");
            aField.classList.remove("valid");
        } else {
            aField.classList.remove("error");
            aField.classList.add("valid");
        }
    }
    function  checkLastname() {
        if (bInput.value == "") {
            bField.classList.add("error");
            bField.classList.remove("valid");
        } else {
            bField.classList.remove("error");
            bField.classList.add("valid");
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

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    function checkConPass() {
        if (cInput.value == "") {
            cField.classList.add("error");
            cField.classList.remove("valid");
        } 
        else if(cInput.value != pInput.value){
            cField.classList.add("error1");
            cField.classList.remove("valid1");
        }
        else {
            cField.classList.remove("error");
            cField.classList.add("valid");
        }
    }


    if (!aField.classList.contains("error") && !bField.classList.contains("error") &&
    !eField.classList.contains("error") && !pField.classList.contains("error")&&
    !cField.classList.contains("error") ) {
        window.location.href = form.getAttribute("action");
    }
}

function btn()
{
    window.open("../html/registration.html", "_self");
}