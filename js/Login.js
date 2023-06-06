function email() {
  var userName = document.getElementById("user").value;
  if (userName.length == 0) {
      document.getElementById("us").innerHTML = "Email can't be blank";
      document.getElementById("user").style.borderBottomColor = "red";
      return false;

  }
  if (!userName.match(/^[a-z 0-9]+[@][a-z]+[\.]+[a-z]{2,3}$/)) {
      document.getElementById("us").innerHTML = "Enter valid Email Id";
      document.getElementById("user").style.borderColor = "red";
      return false;
  }
  document.getElementById("us").innerHTML = "";
  document.getElementById("user").style.borderColor = "#5372F0";
  document.getElementById("icon").style.Color = "green";

}

function password() {
  var passCode = document.getElementById("passwor").value;
  if (passCode.length == 0) {
      document.getElementById("pas").innerHTML = "Password can't be blank";
      document.getElementById("passwor").style.borderColor = "red";
      return false;

  }
  if (!passCode.match(/^[A-Za-z_\!\@\#\$]+[0-9]+$/)) {
      document.getElementById("pas").innerHTML = "Enter valid Password";
      document.getElementById("passwor").style.borderColor = "red";
      return false;
  }
  document.getElementById("pas").innerHTML = "";
  document.getElementById("passwor").style.borderColor = "#5372F0";
  document.getElementById("icon").style.Color = "green";

}


function button(){
  var userName = document.getElementById("user").value;
  var passCode = document.getElementById("passwor").value;
  if (userName == "vignesh2152002@gmail.com" && passCode == "vignesh123") {
    alert("Successfully logged in");
    window.open("../html/studentpage.html");
}
else if (userName == "ragul2152002@gmail.com" && passCode == "ragul123") {
  alert("Successfully logged in");
    window.open("../html/staffpage.html");
}
else if (userName == "admin@gmail.com" && passCode == "admin123") {
  alert("Successfully logged in");
    window.open("../html/adminpage.html");
}
else if (userName==null || passCode==null || userName=="" ||passCode==""){
    alert("Enter the valid input");
    return false;
}
else {
    alert("Invalid");
    return false;
}
}