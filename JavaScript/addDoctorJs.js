function doctorNameValidation() {
    var doctorName = document.getElementById("doctorName").value;

    if (doctorName.length == 0) {
        document.getElementById("patient-Error").innerHTML = "Name is required";
        document.getElementById("doctorName").style.borderBottomColor = "red";
        return false;
        
    }
    if (!doctorName.match(/^[A-Z][a-z]*[\s{1}]*[A-Za-z]*$/)) {
        document.getElementById("patient-Error").innerHTML = "Your first letter should be capital";
        document.getElementById("doctorName").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("patient-Error").innerHTML = "";
    document.getElementById("doctorName").style.borderBottomColor = "green";
    return true;
}
function dateValidate(){
    var date=document.getElementById("date").value;
    if(date.length==0){
        document.getElementById("dateError").innerHTML="Name is required";
        document.getElementById("date").style.borderBottomColor = "red";
        return false;
    }
    if(!date.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)){
        document.getElementById("dateError").innerHTML="Invalid date";
        document.getElementById("date").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("dateError").innerHTML="";
    document.getElementById("date").style.borderBottomColor = "green";

    return true;
}
function phoneNumberValidate(){
    var phoneNumber=document.getElementById("phoneNumber").value;
    if(phoneNumber.length==0){
        document.getElementById("phoneError").innerHTML="Phone number is required";
        document.getElementById("phoneNumber").style.borderBottomColor = "red";
        return false;
    }
    if(!phoneNumber.match(/^[6789][0-9]{9}$/)){
        document.getElementById("phoneError").innerHTML="Invalid number";
        document.getElementById("phoneNumber").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("phoneError").innerHTML="";
    document.getElementById("phoneNumber").style.borderBottomColor = "green";

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
function licenseIdValidation() {
    var license = document.getElementById("license").value;

    if (license.length == 0) {
        document.getElementById("licenceid-Error").innerHTML = "License Id is required";
        document.getElementById("license").style.borderBottomColor = "red";
        return false;
    }
    if (!license.match(/^[LI]+[0-9]{6}$/)) {
        document.getElementById("licenceid-Error").innerHTML = "License Id is invalid";
        document.getElementById("license").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("licenceid-Error").innerHTML = "";
    document.getElementById("license").style.borderBottomColor = "green";
    return true;
}
function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    var allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;

    if (!allowedExtensions.exec(filePath)){
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
}
function doctorIDValidation() {
    var id = document.getElementById("doctorid").value;

    if (id.length == 0) {
        document.getElementById("docid-Error").innerHTML = "Enter the Doctor Id";
        document.getElementById("doctorid").style.borderBottomColor = "red";
        return false;
    }
    if (!id.match(/^[DI]*[0-9]{5}$/)) {
        document.getElementById("docid-Error").innerHTML = "Invalid field";
        document.getElementById("doctorid").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("docid-Error").innerHTML = "";
    document.getElementById("doctorid").style.borderBottomColor = "green";
    return true;
}
function doctorpasswordValidation() {
    var password = document.getElementById("doctorpassword").value;

    if (password.length == 0) {
        document.getElementById("docpass-Error").innerHTML = "Enter the Password";
        document.getElementById("doctorpassword").style.borderBottomColor = "red";
        return false;
    }
    if (!password.match(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/)) {
        document.getElementById("docpass-Error").innerHTML = "Invalid Password";
        document.getElementById("doctorpassword").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("docpass-Error").innerHTML = "";
    document.getElementById("doctorpassword").style.borderBottomColor = "green";
    return true;
}
function confirmpasswordValidation(){
    var confirm = document.getElementById("doctorconfirmpassword").value;
    var check=document.getElementById("doctorpassword").value;
    if (!confirm.match(check)) {
        document.getElementById("docconpas-Error").innerHTML = "Unmatched Password";
        document.getElementById("doctorconfirmpassword").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("docconpas-Error").innerHTML = "";
    document.getElementById("doctorconfirmpassword").style.borderBottomColor = "green";
    return true;
}
function validatation() {
    if (!doctorNameValidation() || !dateValidate() || !phoneNumberValidate() || 
    !ageValidation() || !licenseIdValidation() || !fileValidation() || !doctorIDValidation() ||
    !doctorpasswordValidation || confirmpasswordValidation) {
        alert("Enter all the fields!");
        return false;
    }
    else {
        return true;
    }
}