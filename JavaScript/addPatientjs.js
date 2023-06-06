function patientNameValidation() {
    var patientName = document.getElementById("patientName").value;

    if (patientName.length == 0) {
        document.getElementById("patient-Error").innerHTML = "Name is required";
        document.getElementById("patientName").style.borderBottomColor = "red";
        return false;
        
    }
    if (!patientName.match(/^[A-Z][a-z]*[\s{1}]*[A-Za-z]*$/)) {
        document.getElementById("patient-Error").innerHTML = "Your first letter should be capital";
        document.getElementById("patientName").style.borderBottomColor = "red";
        return false;
    }

    document.getElementById("patient-Error").innerHTML = "";
    document.getElementById("patientName").style.borderBottomColor = "green";
    return true;
}

function fatherNameValidation() {
    var fatherName = document.getElementById("fatherName").value;

    if (fatherName.length == 0) {
        document.getElementById("father-Error").innerHTML = "Father name is required";
        document.getElementById("fatherName").style.borderBottomColor = "red";
        return false;
    }
    if (!fatherName.match(/^[A-Z][a-z]*$/)) {
        document.getElementById("father-Error").innerHTML = "Your first letter should be capital";
        document.getElementById("fatherName").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("father-Error").innerHTML = "";
    document.getElementById("fatherName").style.borderBottomColor = "green";
    return true;
}
function mobileNumberValidation() {
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (mobileNumber.length == 0) {
        document.getElementById("mobile-Error").innerHTML = "Name is required";
        document.getElementById("mobileNumber").style.borderBottomColor = "red";
        return false;
    }
    if (!mobileNumber.match(/^[679][0-9]{9}$/)) {
        document.getElementById("mobile-Error").innerHTML = "Your mobile number should be 10 digits";
        document.getElementById("mobileNumber").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("mobile-Error").innerHTML = "";
    document.getElementById("mobileNumber").style.borderBottomColor = "green";
    return true;
}
function ageValidation() {
    var age = document.getElementById("age").value;

    if (age.length == 0) {
        document.getElementById("age-Error").innerHTML = "Age is required";
        document.getElementById("age").style.borderBottomColor = "red";
        return false;
    }
    if (!age.match(/^[0-9]{2}$/)) {
        document.getElementById("age-Error").innerHTML = "Your age is invalid";
        document.getElementById("age").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("age-Error").innerHTML = "";
    document.getElementById("age").style.borderBottomColor = "green";
    return true;
}
function doorValidation() {
    var door = document.getElementById("door").value;

    if (door.length == 0) {
        document.getElementById("dError").innerHTML = "Enter the details";
        document.getElementById("door").style.borderBottomColor = "red";
        return false;
    }
    if (!door.match(/^[A-Za-z0-9\-\/\.\,\s]{0,50}$/)) {
        document.getElementById("dError").innerHTML = "Invalid field";
        document.getElementById("door").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("dError").innerHTML = "";
    document.getElementById("door").style.borderBottomColor = "green";
    return true;
}
function pincodeValidation() {
    var pincode = document.getElementById("pincode").value;

    if (pincode.length == 0) {
        document.getElementById("pError").innerHTML = "Enter the pincode";
        document.getElementById("pincode").style.borderBottomColor = "red";
        return false;
    }
    if (!pincode.match(/^[6][0-9]{5}$/)) {
        document.getElementById("pError").innerHTML = "Enter valid pincode";
        document.getElementById("pincode").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("pError").innerHTML = "";
    document.getElementById("pincode").style.borderBottomColor = "green";
    return true;
}

function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    var allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
}

function validatation() {
    if (!patientNameValidation() || !fatherNameValidation() || !mobileNumberValidation() || !ageValidation() || !doorValidation() || !pincodeValidation()) {
        alert("Enter all the fields!");
        return false;
    }
    else {
        return true;
    }
}