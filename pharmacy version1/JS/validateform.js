
// .....................................................................................................validation reg form..............................................................................................................

function checking() {
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var test_pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    document.getElementById('pass1-error').innerHTML = "enter full pass";
 
 
    if(!pass1.value.match(test_pass)){
        document.getElementById('pass1-error').innerHTML = "Enter Valid";
        pass1.style.border = "2px solid red";
       return false;
    }
    else{
         pass1.style.border = "2px solid green";
        document.getElementById('pass1-error').innerHTML = "";
    }
}

function checkpass() {
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
     if (pass2.value != pass1.value){
        document.getElementById("pass2-error").innerHTML = "Confirm paassword should be same as password";
         pass2.style.border = "2px solid red";
         document.getElementById('pass2-error').innerHTML = "";
     }
     if (pass2.value == pass1.value) {
        pass2.style.border = "2px solid green";
        document.getElementById('pass2-error').innerHTML = "";
    }
}

function numpass() {
    var format_number = /^[6789][0-9]{9}$/;
    var num = document.getElementById('number');
    
    if(!num.value.match(format_number)){
        document.getElementById('num-error').innerHTML = "Enter Valid Number";
        num.style.border = "2px solid red";
        return false;
    }
    else{
        num.style.border = "2px solid green";
        document.getElementById('num-error').innerHTML = "";
    }

}
// -----------------------------------------------------------------------------------------------------------------------

function checkinputs() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var num = document.getElementById('number');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');

    if (username.value.trim() == "") {
        // alert("No blank values in username");
        //  username.style.border = "solid 3px red";
        document.getElementById("uname-error").innerHTML = "no blank username";
        username.style.border = "2px solid red";
        return false;
    }
    else if (username.value.trim().length < 6) {
        //     alert("User name should atleast 10 char long");
        document.getElementById("uname-error").innerHTML = "User name should atleast 6 char long";
        return false;
    }
    else {
        username.style.border = "2px solid green";
        document.getElementById("uname-error").innerHTML = "";
    }

    if (num.value.trim().length < 10 || num.value.trim().length > 10) {
        //    alert("Enter valid Phone number");
        document.getElementById("num-error").innerHTML = "Enter valid number";
        number.style.border = "2px solid red";
        return false;
    }

    else {
        number.style.border = "2px solid green";
        document.getElementById("num-error").innerHTML = "";
    }
  
     if (pass1.value.trim() === "") {
        //     alert("No blank in password");
        // document.getElementById("pass1-error").innerHTML = "No blank in password";
        pass1.style.border = "2px solid red";
        return false;
    }
    else if (pass1.value.trim().length < 8) {
        //    alert("Password should atleast 8 char long");
        document.getElementById("pass1-error").innerHTML = "Password should atleast 8 char long";
        pass1.style.border = "2px solid red";
        return false;
    }
    else {
        pass1.style.border = "2px solid green";
        document.getElementById("pass1-error").innerHTML = "";
    }

    if (pass2.value.trim() == "") {
        //     alert("No blank in password");
        document.getElementById("pass2-error").innerHTML = "No blank in password";
        pass2.style.border = "2px solid red";
        return false;
    }
    else if (pass2.value.trim() != pass1.value.trim()) {
        //    alert("Confirm paassword should be same as password");
        document.getElementById("pass2-error").innerHTML = "Confirm paassword should be same as password";
        pass2.style.border = "2px solid red";
        return false;
    }
    else if(pass2.value.trim() == pass1.value.trim()) {
        pass2.style.border = "2px solid green";
        alert("Registered successfully");
        document.getElementById("pass2-error").innerHTML = "";
    }
    else {
        return true;
    }
}  