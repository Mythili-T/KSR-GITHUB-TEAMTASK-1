function sum() {
    var cost1 = document.getElementById("cost1").value;
    var cost2 = document.getElementById("cost2").value;
    var total = parseInt(cost1) + parseInt(cost2);
    document.getElementById("total").innerHTML=total;
}
function patientNameValidate(){
    var pName=document.getElementById("pName").value;
    if(pName.length==0){
        document.getElementById("pNameError").innerHTML="Name is required";
        document.getElementById("pName").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("pNameError").innerHTML="";
    document.getElementById("pName").style.borderBottomColor = "green";

    return true;

}
function dateValidate(){
    var date=document.getElementById("date").value;
    if(date.length==0){
        document.getElementById("dateError").innerHTML="Date is required";
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
function patientIdValidate(){
    var pId=document.getElementById("pId").value;
    if(pId.length==0){
        document.getElementById("pIdError").innerHTML="Id is required";
        document.getElementById("pId").style.borderBottomColor = "red";
        return false;
    }
    if(!pId.match(/^[P][I][0-9]{5}$/)){
        document.getElementById("pIdError").innerHTML="Invalid Id";
        document.getElementById("pId").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("pIdError").innerHTML="";
    document.getElementById("pId").style.borderBottomColor = "green";

    return true;
}

function phoneNumberValidate(){
    var phoneNumber=document.getElementById("phoneNumber").value;
    if(phoneNumber.length==0){
        document.getElementById("phoneError").innerHTML="Phone number is required";
        document.getElementById("phoneNumber").style.borderBottomColor = "red";
        return false;
    }
    if(!phoneNumber.match(/^[679][0-9]{9}$/)){
        document.getElementById("phoneError").innerHTML="Invalid number";
        document.getElementById("phoneNumber").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("phoneError").innerHTML="";
    document.getElementById("phoneNumber").style.borderBottomColor = "green";

    return true;
}
function drNameValidate(){
    var drName=document.getElementById("drName").value;
    if(drName.length==0){
        document.getElementById("drNameError").innerHTML="Doctor name is required";
        document.getElementById("drName").style.borderBottomColor = "red";
        return false;
    }
    if(!drName.match(/^[A-Z][a-z]*\s*[A-Za-z]*$/)){
        document.getElementById("drNameError").innerHTML="first letter should be capital";
        document.getElementById("drName").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("drNameError").innerHTML="";
    document.getElementById("drName").style.borderBottomColor = "green";

    return true;
}
function billIdValidate(){
    var billId=document.getElementById("billId").value;
    if(billId.length==0){
        document.getElementById("billIdError").innerHTML="Bill Id is required";
        document.getElementById("billId").style.borderBottomColor = "red";
        return false;
    }
    if(!billId.match(/^[B][I][0-9]{8}$/)){
        document.getElementById("billIdError").innerHTML="Invalid Id";
        document.getElementById("billId").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("billIdError").innerHTML="";
    document.getElementById("billId").style.borderBottomColor = "green";

    return true;
}

function generateBillValidation(){
    if (!patientNameValidate() || !dateValidate() || !patientIdValidate() || !phoneNumberValidate() || !drNameValidate() || !billIdValidate()) {
        alert("Enter all the fields!");
        return false;
    }
    else {
        return true;
    }
}
