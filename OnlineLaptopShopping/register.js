
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateName();
    validateEmail();
    validateMobile();
    validateCreatePassword();
    validateConfirmPassword();
})


var emailPattern = "^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$";
var mobilePattern = "^[6-9]{1}[0-9]{9}$";
var namePattern = "^[A-Za-z ][A-Za-z\\s]{3,20}$";
var email_id = document.getElementById("email");
var confirmPassword = document.getElementById("cpassword");
var createPassword = document.getElementById("password");
function validateName() {
    var username = document.getElementById("name");
    if (username.value == "") {
        name_error.innerHTML = "Enter Name";
        name_icon_success.innerHTML="";
        name_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        username.style.borderBottom = "solid 2px red";
        return false;
    }
    if (username.value.match(namePattern)) {
        name_error.innerHTML = "";
        name_icon_error.innerHTML = "";
        name_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        username.style.borderBottom = "solid 2px green";
        return true;
    } else {
        name_error.innerHTML = "Enter Valid Name";
        name_icon_success.innerHTML="";
        name_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        username.style.borderBottom = "solid 2px red";
        return false;
    }
}
function validateEmail() {
    if (email_id.value == "") {
        email_error.innerHTML = "Enter email";
        email_icon_success.innerHTML="";
        email_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        email_id.style.borderBottom = "solid 2px red";
        return false;
    }
    if (email_id.value.match(emailPattern)) {
        email_error.innerHTML = "";
        email_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        email_icon_error.innerHTML="";
        email_id.style.borderBottom = "solid 2px green";
        return true;
    } else {
        email_error.innerHTML = "Enter valid email";
        email_icon_success.innerHTML="";
        email_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        email_id.style.borderBottom = "solid 2px red";
        return false;
    }

}
function validateMobile() {
    var mobileNumber = document.getElementById("mobile");
    if (mobileNumber.value == "") {
        mobile_error.innerHTML = "Enter mobile number";
        mobile_icon_success.innerHTML="";
        mobile_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        mobileNumber.style.borderBottom = "solid 2px red";
        return false;
    }
    if (mobileNumber.value.match(mobilePattern)) {
        mobile_error.innerHTML = "";
        mobile_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        mobile_icon_error.innerHTML="";
        mobileNumber.style.borderBottom = "solid 2px green";
        return true;
    } else {
        mobile_error.innerHTML = "Enter valid mobile number";
        mobile_icon_success.innerHTML="";
        mobile_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        mobileNumber.style.borderBottom = "solid 2px red";
        return false;
    }
}
function validateCreatePassword() {
    var createPassword = document.getElementById("password");
    if (createPassword.value == "") {
        pass_error.innerHTML = "Enter password";
        pass_icon_success.innerHTML="";
        pass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        createPassword.style.borderBottom = "solid 2px red";
        return false;
    }
    else if (createPassword.value.length < 8) {
        pass_error.innerHTML = "Enter atleast 8 characters";
        pass_icon_success.innerHTML="";
        pass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        createPassword.style.borderBottom = "solid 2px red";
        return false;

    } else if (createPassword.value.search(/[a-z]/) < 0) {
        pass_error.innerHTML = "must contain atleast 1 lowercase";
        pass_icon_success.innerHTML="";
        pass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        createPassword.style.borderBottom = "solid 2px red";
        return false;


    } else if (createPassword.value.search(/[A-Z]/) < 0) {
        pass_error.innerHTML = "must contain atleast 1 uppercase";
        pass_icon_success.innerHTML="";
        pass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        createPassword.style.borderBottom = "solid 2px red";
        return false;


    } else if (createPassword.value.search(/[0-9]/) < 0) {
        pass_error.innerHTML = "must contain atleast 1 number";
        pass_icon_success.innerHTML="";
        pass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        createPassword.style.borderBottom = "solid 2px red";
        return false;

    }
    else {
        pass_error.innerHTML = "";
        pass_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        pass_icon_error.innerHTML="";
        createPassword.style.borderBottom = "solid 2px green";
        return true;
    }
}
function validateConfirmPassword() {
  
    if (confirmPassword.value == "") {
        document.getElementById("cpass_error").innerHTML = "Enter confirm password";
        cpass_icon_success.innerHTML="";
        cpass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        confirmPassword.style.borderBottom = "solid 2px red";
        return false;
    }
    if (createPassword.value == confirmPassword.value) {
        document.getElementById("cpass_error").innerHTML = "";
        cpass_icon_success.innerHTML='<i class="fa-solid fa-check"></i>';
        cpass_icon_error.innerHTML="";
        confirmPassword.style.borderBottom = "solid 2px green";
        return true;
    }
    else {
        document.getElementById("cpass_error").innerHTML = "Password is not matched";
        cpass_icon_success.innerHTML="";
        cpass_icon_error.innerHTML='<i class="fa-solid fa-exclamation"></i>';
        confirmPassword.style.borderBottom = "solid 2px red";
        return false;
    }
}
function validate() {
    if (!validateName() || !validateEmail() || !validateMobile() || !validateCreatePassword() || !validateConfirmPassword()) {
        return false;
    } else {
        localStorage.setItem('email', email_id.value);
        localStorage.setItem('pswd', createPassword.value);
        alert("Registered successfully");
        window.location = "login.html";
        // document.querySelector(".popup").style.display = "flex";
        // return true;
    }
}

   

