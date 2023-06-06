function userId() {
    var userName = document.getElementById("user").value;
    if (userName.length == 0) {
        document.getElementById("useId").innerHTML = "No empty";
        document.getElementById("user").style.borderBottomColor = "red";
        return false;
  
    }
    if (!userName.match(/^[PAD][I][0-9]{4}$/)) {
        document.getElementById("useId").innerHTML = "Enter valid Email Id";
        document.getElementById("user").style.borderColor = "red";
        return false;
    }
    document.getElementById("useId").innerHTML = "";
    document.getElementById("user").style.borderColor = "green";  
  }
  
  function pin() {
    var passCode = document.getElementById("pass").value;
    if (passCode.length == 0) {
        document.getElementById("pinID").innerHTML = "No empty";
        document.getElementById("pass").style.borderColor = "red";
        return false;
  
    }
    if (!passCode.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)) {
        document.getElementById("pinID").innerHTML = "Enter valid Password";
        document.getElementById("pass").style.borderColor = "red";
        return false;
    }
    document.getElementById("pinID").innerHTML = "";
    document.getElementById("pass").style.borderColor = "green";
  }
  
  function submitLog(){
    var userName = document.getElementById("user").value;
    var passCode = document.getElementById("pass").value;
    if (userName == "PI2563" && passCode == "05-10-2001") {
    //   alert("Successfully logged in");
      window.open("../patientPage.html");
  }
  else if (userName == "DI2563"  && passCode == "11-12-1980"
  ) {
    // alert("Successfully logged in");
      window.open("../doctorPage.html");
  }
  else if (userName == "AI2563" && passCode == "10-03-2002") {
    // alert("Successfully logged in");
      window.open("../adminPage.html");
  }
  else if (userName==null || passCode==null || userName=="" ||passCode==""){
      alert("Enter the all inputs");
      return false;
  }
  else {
      alert("Invalid");
      return false;
  }
  }