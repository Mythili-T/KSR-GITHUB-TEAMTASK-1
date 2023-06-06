function validate() {
    var name = document.getElementById("username");
    var pass = document.getElementById("password");
    var regex = /^[A-Za-z]{2,30}$/;
    if (name.match(regex)) {
        return true;
    }
    else {
        alert("Please Enter Your name coorectly");
    }

    if (name.value.trim() == "" || pass.value.trim() == "") {
        alert("no blank values...!");
        return false;
    }
    else if (pass.value.length < 6) {
        alert('password should be greater than 5 characters...!');
        return false;
    }
    else if (pass.value.length > 10) {
        alert('password should be lessthan than 10 characters...!');
        return false;
    }
    else {
        alert('Enter only letters');

        return true;
    }
}
function back() {
    location.replace("select.html");

}
function register() {
    location.replace("userRegister.html");

}