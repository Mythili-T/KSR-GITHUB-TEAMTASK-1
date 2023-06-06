function patientNameValidate(){    
    var patientName=document.getElementById("patientName").value;
    if(patientName.length==0){
        document.getElementById("pNameError").innerHTML="Name is required";
        document.getElementById("patientName").style.borderBottomColor = "red";
        return false;
    }
    document.getElementById("pNameError").innerHTML="";
    document.getElementById("patientName").style.borderBottomColor = "green";

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

function generatePrescriptionValidation(){
    if (!patientNameValidate() || !dateValidate()) {
        alert("Enter all the fields!");
        return false;
    }
    else {
        return true;
    }
}