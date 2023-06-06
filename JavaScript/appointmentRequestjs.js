function random() {
    var select = document.getElementById("input").value;
    if (select == "Cardiologist") {
        var doctorName = ["Select Doctor" , "Dr.Arivananthan MD", "Dr.Medunan MD" , "Dr. Manikandan S MS"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:00PM)"];
    }
    else if (select == "Cosmetic surgery") {
        var doctorName = ["Select Doctor", "Dr.Nagarajan MS", "Dr.Naveen MS", "Dr. Dinesh MD"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Friday" ];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:00PM)","(12:00PM - 01:00PM)"];
    }
    else if (select == "Anesthesiologist") {
        var doctorName = ["Select Doctor", "Dr.Tamil selvi MD", "Dr.Mouli krishnan MD"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        var timing = ["Timing", "(12:00PM - 01:00PM)", "(01:00PM - 02.00PM)"];
    }
    else if (select == "Pediatrician") {
        var doctorName = ["Select Doctor", "Dr.Rathinam MD", "Dr.Makesh MD"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:30AM)"];
    }
    else if (select == "General internists") {
        var doctorName = ["Select Doctor" , "Dr.Mezhiyalagan MD", "Dr.Madhavan MD", "Dr. kishore kumar MD" , "Dr. Dinesh kumar MD"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:30PM)","(03:00PM - 04:00PM)","(04:00PM - 05:00PM)"];
        
    }
    else if (select == "Dentist") {
        var doctorName = ["Select Doctor", "Dr.Jaya keerthana MS", "Dr.Madhubala MD"];
        var day = ["Select Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(06:00PM - 07:00PM)","(07:00PM - 08:00PM)"];
    }
    else if (select == "Gynecologist") {
        var doctorName = ["Select Doctor", "Dr.Devika MS", "Dr.Madhubala MD"];
        var day = ["Select Day", "Thursday","Sunday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:00PM)"];
    }
    else if (select == "Psychiatrist") {
        var doctorName = ["Select Doctor", "Dr.Sathish kumar MS", "Dr.Navaneethan MD", "Dr. Saranya MD"];
        var day = ["Select Day", "Thursday","Sunday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:00PM)"];
    }
    else if (select == "Neurologist") {
        var doctorName = ["Select Doctor", "Dr.Kamaraj MD", "Dr.Mohammed Upayathulla MD"];
        var day = ["Saturday", "Sunday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:00AM)","(11:00AM - 12:00PM)"];

    }
    else if (select == "Ophthalmologist") {
        var doctorName = ["Select Doctor", "Dr.Kalaimagal MD", "Dr.Sowmiya MD"]
        var day = ["Select Day","Thursday", "Friday", "Saturday"];
        var timing = ["Timing", "(9:00AM - 10:00AM)", "(10:00AM - 11:30AM)"];
    }


    var string ="";
    var st2="";
    var st3="";
    for (i = 0; i < doctorName.length; i++) {
        string=string+"<option value="+doctorName[i]+">"+doctorName[i]+"</option>";
    }
    for (i = 0; i < day.length; i++) {
        st2=st2+"<option value="+day[i]+">"+day[i]+"</option>";
    }
    for (i = 0; i < timing.length; i++) {
        st3=st3+"<option value="+timing[i]+">"+timing[i]+"</option>";
    }
    string="<select style='font-size: 20px;border-top: 0;color: #dfa364;border-left: 0;border-right: 0;border-bottom: 0;border-color: white;' >"+string+"</select>";
    st2="<select style='font-size: 20px;border-top: 0;color: #dfa364;border-left: 0;border-right: 0;border-bottom: 0;border-color: white;' >"+st2+"</select>";
    st3="<select style='font-size: 20px;border-top: 0;color: #dfa364;border-left: 0;border-right: 0;border-bottom: 0;border-color: white;' >"+st3+"</select>";

    document.getElementById("output").innerHTML = string;
    document.getElementById("out2").innerHTML = st2;
    document.getElementById("out3").innerHTML = st3;

}

function submitFunction(v) {
    let message = "Are you sure to make a appointment!\nEither click OK or Cancel button.";
    if (confirm(message) == true) {
        message = "<p style='color:red;font-size:18px'>Pending</p>";
        message.style="font-size:10px";
    } else {
        message = "<p style='color:red;font-size:18px'>Not Submitted</p>";
    }
    document.getElementById("mess").innerHTML = message;
    v.disabled=true;
}
  


