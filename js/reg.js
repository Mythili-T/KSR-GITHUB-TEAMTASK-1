
  function firstname() {
    var userName = document.getElementById("name").value;
    if (userName.length == 0) {
        document.getElementById("name1").innerHTML = "Firstname can't be blank";
        document.getElementById("name").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName.match(/^[ A-Z][a-z]+$/)) {
        document.getElementById("name1").innerHTML = "Enter valid Firstname ";
        document.getElementById("name").style.borderColor = "red";
        return false;
    }
    document.getElementById("name1").innerHTML = "";
    document.getElementById("name").style.borderColor = "#5372F0";
    document.getElementById("icon").style.Color = "green";
  
  }
  function lastname() {
    var userName = document.getElementById("name2").value;
    if (userName.length == 0) {
        document.getElementById("name3").innerHTML = "LastName can't be blank";
        document.getElementById("name2").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName.match(/^[A-Z]+$/)) {
        document.getElementById("name3").innerHTML = "Enter valid lastName";
        document.getElementById("name2").style.borderColor = "red";
        return false;
    }
    document.getElementById("name3").innerHTML = "";
    document.getElementById("name2").style.borderColor = "#5372F0";
}
function email() {
    var userName = document.getElementById("user").value;
    if (userName.length == 0) {
        document.getElementById("user1").innerHTML = "Email can't be blank";
        document.getElementById("user").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName.match(/^[a-z 0-9]+[@][a-z]+[\.]+[a-z]{2,3}$/)) {
        document.getElementById("user1").innerHTML = "Enter valid Email Id";
        document.getElementById("user").style.borderColor = "red";
        return false;
    }
    document.getElementById("user1").innerHTML = "";
    document.getElementById("user").style.borderColor = "#5372F0";
    document.getElementById("icon").style.Color = "green";
  
  } 
  function fileValidation() {
    var fileInput =document.getElementById('file');
     var filePath = fileInput.value;
     var allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;

    if (!allowedExtensions.exec(filePath)){
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
}
  function password() {
    var passCode = document.getElementById("password1").value;
    if (passCode.length == 0) {
        document.getElementById("password2").innerHTML = "Password cannot be blank";
        document.getElementById("password1").style.borderColor = "red";
        return false;
  
    }
    if (!passCode.match(/^[A-Za-z_\!\@\#\$]+[0-9]+$/)) {
        document.getElementById("password2").innerHTML = "Enter valid Password";
        document.getElementById("password1").style.borderColor = "red";
        return false;
    }
    document.getElementById("password2").innerHTML = "";
    document.getElementById("password1").style.borderColor = "#5372F0";
    document.getElementById("icon").style.Color = "green";
  
  }
  function conformpassword() {
    var passCode1 = document.getElementById("conformpassword1");
    var check = document.getElementById("password1");
    document.getElementById("conformpassword1").style.borderColor = "red";
    if (passCode1.length == 0) {
        document.getElementById("con_password").innerHTML = "ConformPassword cannot be blank";
        document.getElementById("conformpassword1").style.borderColor = "red";
        return false;
  
    }
    if(passCode1.value == check.value){
            document.getElementById("con_password").innerHTML = "";
            document.getElementById("conformpassword1").style.borderColor = "#5372F0";
            document.getElementById("icon").style.Color = "green";
    }
    else {
        document.getElementById("con_password").innerHTML = "Password cannot be match";
        document.getElementById("conformpassword1").style.borderColor = "red";
        return false;
    }
     
    // document.getElementById("con_password").innerHTML = "";
    // document.getElementById("conformpassword1").style.borderColor = "#5372F0";
    // document.getElementById("icon").style.Color = "green";
  
  }
  
  function button() {
    if (! firstname() || ! lastname() || !email() || 
    !fileValidation() || !password()|| !conformpassword()) 
    {
        alert("Enter all the fields!");
        return false;
    }
    else {
        return true;
    }
}