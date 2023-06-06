
/*----------------------------------------------------------- popup
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
window.onload = function () {
    setTimeout(function () {
        popup.style.display = "block";
    }, 2000)
}
close.addEventListener('click', () => {
    popup.style.display = "none";
})


/*--------------------------------------------------------------timer
let EndDate = new Date("Oct 30, 2022 12:00:00").getTime();
let timer = setInterval(run, 1000);
function run() {
    let now = new Date().getTime();
    let t = EndDate - now;
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) {
            days = "0" + days;
        }
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) {
            hours = "0" + hours;
        }
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) {
            mins = "0" + mins;
        }
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) {
            secs = "0" + secs;
        }
        let timecount = `${days} : ${hours} : ${mins} : ${secs}`;
        document.querySelector('.countdown').innerText = timecount;
    }
}
*/

const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = (e)=>{
  e.preventDefault();
  validate();
  (eInput.value == "") ? eField.classList.add("shake", "email_icon_error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "pass_icon_error") : checkPass();
  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  //eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  //pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
}

 form.addEventListener('submit',function(event){
    event.preventDefault();
    checkEmail();
    checkPass();
})
var emailPattern="^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$";
function checkEmail(){
    var email_id=document.getElementById("email");
    if(email_id.value==""){
        email_error.innerHTML="Email can't be blank";
        email_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
        email_id.style.border="solid 1px red";
        return false; 
    }
    if(email_id.value.match(emailPattern)){
        email_error.innerHTML=""; 
        email_icon_error.innerHTML="";
        email_id.style.border="solid 1px blue";
        return true;
    }else{
        email_error.innerHTML="Enter Valid email"; 
        email_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
        email_id.style.border="solid 1px red";
        return false; 
    }
    
}

function checkPass(){
        var userPassword = document.getElementById("password");
        if (userPassword.value == "") {
            pass_error.innerHTML = "Enter password";
            pass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
            userPassword.style.border = "solid 1px red";
            return false;
        }
        else if (userPassword.value.length < 8) {
            pass_error.innerHTML = "Enter atleast 8 characters";
            pass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
            userPassword.style.border = "solid 1px red";
            return false;
    
        } else if (userPassword.value.search(/[a-z]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 lowercase";
            pass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
            userPassword.style.border = "solid 1px red";
            return false;
    
    
        } else if (userPassword.value.search(/[A-Z]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 uppercase";
            pass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
            userPassword.style.border = "solid 1px red";
            return false;
    
    
        } else if (userPassword.value.search(/[0-9]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 number";
            pass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle">';
            userPassword.style.border = "solid 1px red";
            return false;
    
        }
        else {
            pass_error.innerHTML = "";
            pass_icon_error.innerHTML="";
            userPassword.style.border = "solid 1px blue";
            return true;
        }
     
}
function validate(){
    if(!checkEmail() || !checkPass()){
        return false;
    }else{
            document.querySelector(".popup").style.display="flex";
           

            return true;
 }
}

