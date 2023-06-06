// alert("Successfully logged in");
function name() {
    var userName = document.getElementById("FirstName").value;
    if (userName.length == 0) {
        document.getElementById("user").innerHTML = "FirstName can't be blank";
        document.getElementById("FirstName").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName.match(/^[a-z 0-9]+[@][a-z]+[\.]+[a-z]{2,3}$/)) {
        document.getElementById("user").innerHTML = "Enter valid FirstName";
        document.getElementById("FirstName").style.borderColor = "red";
        return false;
    }
    document.getElementById("user").innerHTML = "";
    document.getElementById("FirstName").style.borderColor = "#5372F0";
}
function name1() {
    var userName1 = document.getElementById("LastName").value;
    if (userName1.length == 0) {
        document.getElementById("user1").innerHTML = "LastName can't be blank";
        document.getElementById("LastName").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName1.match(/^[a-z 0-9]+[@][a-z]+[\.]+[a-z]{2,3}$/)) {
        document.getElementById("user1").innerHTML = "Enter valid lastName";
        document.getElementById("LastName").style.borderColor = "red";
        return false;
    }
    document.getElementById("user1").innerHTML = "";
    document.getElementById("lastName").style.borderColor = "#5372F0";
}
  
function email() {
    var userName2 = document.getElementById("emailid").value;
    if (userName2.length == 0) {
        document.getElementById("email1").innerHTML = "Email can't be blank";
        document.getElementById("emailid").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName2.match(/^[a-z 0-9]+[@][a-z]+[\.]+[a-z]{2,3}$/)) {
        document.getElementById("email1").innerHTML = "Enter valid Email Id";
        document.getElementById("emailid").style.borderColor = "red";
        return false;
    }
    document.getElementById("email1").innerHTML = "";
    document.getElementById("emailid").style.borderColor = "#5372F0";
   }
  
  function password() {
    var passCode = document.getElementById("password1").value;
    if (passCode.length == 0) {
        document.getElementById("password2").innerHTML = "Password can't be blank";
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
 }
 function conformpassword() {
    var passCode1 = document.getElementById("conformpassword1").value;
    if (passCode1.length == 0) {
        document.getElementById("conformpassword2").innerHTML = "ConformPassword can't be blank";
        document.getElementById("conformpassword1").style.borderColor = "red";
        return false;
  
    }
    if (!passCode1.match(/^[A-Za-z_\!\@\#\$]+[0-9]+$/)) {
        document.getElementById("conformpassword2").innerHTML = "Enter valid ConformPassword";
        document.getElementById("conformpassword1").style.borderColor = "red";
        return false;
    }
    document.getElementById("conformpassword2").innerHTML = "";
    document.getElementById("conformpassword1").style.borderColor = "#5372F0";
 }
  
  function button(){
    var passCode = document.getElementById("password1").value;
    var passCode1 = document.getElementById("conformpassword1").value;
    if (passCode == passCode1 && passCode1 == passCode) {
      alert("Successfully logged in");
      window.open("../html/studentpage.html","_self");
  }
  else if (passCode==null || passCode1==null || passCode=="" ||passCode1==""){
      alert("Enter the valid input");
      return false;
  }
  else {
      alert("Invalid");
      return false;
  }
  }