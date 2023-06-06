
const form = document.querySelector("form");
  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),
  mField = form.querySelector(".mobile"),
  mInput = mField.querySelector("input"),
  fField = form.querySelector(".fname"),
  fInput = fField.querySelector("input"),
  lField = form.querySelector(".lname"),
  lInput = lField.querySelector("input");
  crField = form.querySelector(".create"),
  crInput = crField.querySelector("input");
  coField = form.querySelector(".confirm"),
  coInput = coField.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault(); 
  validate();
  //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (mInput.value == "") ? mField.classList.add("shake", "error") : checkMobile();
  (fInput.value == "") ? fField.classList.add("shake", "error") : checkFname();
  (lInput.value == "") ? lField.classList.add("shake", "error") : checkLname();
  (crInput.value == "") ? crField.classList.add("shake", "error") : checkCreate();
  (coInput.value == "") ? coField.classList.add("shake", "error") : checkConfirm();

  setTimeout(() => { //remove shake class after 500ms
    eField.classList.remove("shake");
    mField.classList.remove("shake");
    fField.classList.remove("shake");
    lField.classList.remove("shake");
    crField.classList.remove("shake");
    coField.classList.remove("shake");

  }, 500);
}
form.addEventListener('submit',function(event){
  event.preventDefault();
  checkFname();
  checkLname();
  checkEmail();
  checkMobile();
  checkCreate();
  checkConfirm();
})
  var namePattern = "^[A-Za-z ][A-Za-z\\s]{2,20}$";

  function checkFname(){
    var FirstName = document.getElementById("firstName");
      if (FirstName.value == "") {
        fname_error.innerHTML = "First name can't be blank";
          fname_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i> ';
          FirstName.style.border = "solid 1px red";
          return false;
      }
      if (FirstName.value.match(namePattern)) {
          fname_error.innerHTML = "";
          fname_icon_error.innerHTML = "";
          FirstName.style.border = "solid 1px blue";
          return true;
      } else {
          fname_error.innerHTML = "Enter Valid Name";
          fname_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
          FirstName.style.border = "solid 1px red";
          return false;
      }
  }

  var lastNamePattern = "^[A-Za-z ][A-Za-z\\s]{0,20}$";

function checkLname(){
  var LastName = document.getElementById("lastName");
      if (LastName.value == "") {
        lname_error.innerHTML = "Last name can't be blank";
          lname_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i> ';
          LastName.style.border = "solid 1px red";
          return false;
      }
      if (LastName.value.match(lastNamePattern)) {
          lname_error.innerHTML = "";
          lname_icon_error.innerHTML = "";
          LastName.style.border = "solid 1px blue";
          return true;
      } else {
          lname_error.innerHTML = "Enter Valid Name";
          lname_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
          LastName.style.border = "solid 1px red";
          return false;
      }
}
var emailPattern = "^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$";

function checkEmail(){
  var email_id = document.getElementById("email");
    if (email_id.value == "") {
        email_error.innerHTML = "Email can't be blank";
        email_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        email_id.style.border = "solid 1px red";
        return false;
    }
    if (email_id.value.match(emailPattern)) {
        email_error.innerHTML = "";
        email_icon_error.innerHTML="";
        email_id.style.border = "solid 1px blue";
        return true;
    } else {
        email_error.innerHTML = "Enter valid email";
        email_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        email_id.style.border = "solid 1px red";
        return false;
    }
}

var mobilePattern = "^[6-9]{1}[0-9]{9}$";

function checkMobile(){
  var mobileNumber = document.getElementById("mobile");
    if (mobileNumber.value == "") {
        mobile_error.innerHTML = "Mobile number can't be blank";
        mobile_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        mobileNumber.style.border = "solid 1px red";
        return false;
    }
    if (mobileNumber.value.length >10) {
      mobile_error.innerHTML = "Mobile contains only 10 numbers";
      mobile_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
      mobileNumber.style.border = "solid 1px red";
      return false;
  }
    if (mobileNumber.value.match(mobilePattern)) {
        mobile_error.innerHTML = "";
        mobile_icon_error.innerHTML="";
        mobileNumber.style.border = "solid 1px blue";
        return true;
    } else {
        mobile_error.innerHTML = "Enter valid mobile number";
        mobile_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        mobileNumber.style.border = "solid 1px red";
        return false;
    }
}
function checkCreate(){
  var createPassword = document.getElementById("createPassword");
    if (createPassword.value == "") {
      createPass_error.innerHTML = "Create password can't be blank ";
        createPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        createPassword.style.border = "solid 1px red";
        return false;
    }
    else if (createPassword.value.length < 8) {
      createPass_error.innerHTML = "Enter atleast 8 characters";
      createPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        createPassword.style.borderBottom = "solid 1px red";
        return false;

    } else if (createPassword.value.search(/[a-z]/) < 0) {
      createPass_error.innerHTML = "must contain atleast 1 lowercase";
      createPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        createPassword.style.border = "solid 1px red";
        return false;


    } else if (createPassword.value.search(/[A-Z]/) < 0) {
      createPass_error.innerHTML = "must contain atleast 1 uppercase";
      createPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        createPassword.style.border = "solid 1px red";
        return false;


    } else if (createPassword.value.search(/[0-9]/) < 0) {
      createPass_error.innerHTML = "must contain atleast 1 number";
      createPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
        createPassword.style.border = "solid 1px red";
        return false;

    }
    else {
      createPass_error.innerHTML = "";
      createPass_icon_error.innerHTML="";
        createPassword.style.border = "solid 1px blue";
        return true;
    }
}

function checkConfirm(){
  var confirmPassword = document.getElementById("confirmPassword");
  var createPassword = document.getElementById("createPassword");
  if (confirmPassword.value == "") {
      document.getElementById("confirmPass_error").innerHTML = "Enter confirm password";
      confirmPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
      confirmPassword.style.border= "solid 1px red";
      return false;
  }
  if (createPassword.value == confirmPassword.value) {
      document.getElementById("confirmPass_error").innerHTML = "";
      confirmPass_icon_error.innerHTML="";
      confirmPassword.style.border = "solid 1px blue";
      return true;
  }
  else {
      document.getElementById("confirmPass_error").innerHTML = "Password is not matched";
      confirmPass_icon_error.innerHTML='<i class="error error-icon fas fa-exclamation-circle"></i>';
      confirmPassword.style.border = "solid 1px red";
      return false;
  }
}
function validate() {
  if (!checkFname() || !checkLname() || !checkEmail() || !checkMobile() || !checkCreate()) {
      return false;
  } else {
      document.querySelector(".popup").style.display = "flex";
      return true;
  }
}
