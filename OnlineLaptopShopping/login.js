form.addEventListener('submit',function(event){
    event.preventDefault();
    validateEmail();
    validatePassword();
})
var emailPattern="^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$";
var storedEmail = localStorage.getItem('email');
var storedPswd = localStorage.getItem('pswd');
var email_id=document.getElementById("email");
var userPassword = document.getElementById("password");
var user="";
function validateEmail(){
    if(email_id.value==""){
        email_error.innerHTML="Enter email";
        email_icon_success.innerHTML=""; 
        email_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        email_id.style.borderBottom="solid 2px red";
        return false; 
    }
    if(email_id.value.match(emailPattern)){
        email_error.innerHTML=""; 
        email_icon_error.innerHTML="";
        email_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        email_id.style.borderBottom="solid 2px green";
        return true;
    }else{
        email_error.innerHTML="Enter Valid email"; 
        email_icon_success.innerHTML="";
        email_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        email_id.style.borderBottom="solid 2px red";
        return false; 
    }
    
}

function validatePassword(){
        if (userPassword.value == "") {
            pass_error.innerHTML = "Enter password";
            pswd_icon_success.innerHTML=""
            pswd_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
            userPassword.style.borderBottom = "solid 2px red";
            return false;
        }
        else if (userPassword.value.length < 8) {
            pass_error.innerHTML = "Enter atleast 8 characters";
            pswd_icon_success.innerHTML=""
            pswd_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
            userPassword.style.borderBottom = "solid 2px red";
            return false;
    
        } else if (userPassword.value.search(/[a-z]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 lowercase";
            pswd_icon_success.innerHTML=""
            pswd_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
            userPassword.style.borderBottom = "solid 2px red";
            return false;
    
    
        } else if (userPassword.value.search(/[A-Z]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 uppercase";
            pswd_icon_success.innerHTML=""
            pswd_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
            userPassword.style.borderBottom = "solid 2px red";
            return false;
    
    
        } else if (userPassword.value.search(/[0-9]/) < 0) {
            pass_error.innerHTML = "must contain atleast 1 number";
            pswd_icon_success.innerHTML=""
            pswd_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
            userPassword.style.borderBottom = "solid 2px red";
            return false;
    
        }
        else {
            pass_error.innerHTML = "";
            pswd_icon_error.innerHTML="";
            pswd_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
            userPassword.style.borderBottom = "solid 2px green";
            return true;
        }
     
}
function validate(){
    if(!validateEmail() || !validatePassword()){
        return false;
    }else{
        if(email_id.value !== storedEmail || userPassword.value !== storedPswd) {
            alert('Invalid credentials');
        }else {
            alert('You are logged in');
            window.location = "index.html";
            localStorage.setItem('isLoggedIn', 'true');
        }
            // document.querySelector(".popup").style.display="flex";
            // return true;
 }
}
var isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn === 'true') {
    document.getElementById("login").style.display = "none";
} else {
    document.getElementById("logout").style.display = "block";
}


/*----------Open Forgot Password Page------------*/

// var pswd_btn=document.querySelector(".forgot-pswd");
// pswd_btn.addEventListener('click',(e)=>{
//     document.querySelector(".login-box").style=display="none";
//     document.querySelector(".forgotPassword-box").style=display="flex";

// } )

function openPasswordBox(){
    document.querySelector(".login-box").style.display="none";
    document.querySelector(".forgotPassword-box").style.display="flex";
}
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     validateAddress();
// })

function validateAddress(){
    let email_id=document.getElementById("emailAddress");
    if(email_id.value=="manyadharshiniii@gmail.com"){
        var submit_btn=document.querySelector("password-submit");
        submit_btn.addEventListener('click',(e)=>{
        document.querySelector(".login-box").style.display="none";
       document.querySelector(".forgotPassword-box").style.display="none";
    })
    }
}

    
     
    

