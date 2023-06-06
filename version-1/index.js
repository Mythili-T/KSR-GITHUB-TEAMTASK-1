let adminDashboard = document.querySelector(".dashboard");
let userDetails = document.querySelector(".userDetails");
let loanApplied = document.querySelector(".loanApplied");
let loanPending = document.querySelector(".loanPending");
let loanStatus = document.querySelector(".loanStatus");
let loanApproved = document.querySelector(".loanApproved");


let dashboard = document.getElementById("dashboard");
let change = document.getElementById("change");
let change1 = document.getElementById("change1");
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
let change4 = document.getElementById("change4");

dashboard.addEventListener('click', () => {
     adminDashboard.style.display = "grid";
     userDetails.style.display = "none";
     loanApplied.style.display = "none";
     loanPending.style.display = "none";
     loanStatus.style.display = "none";
     loanApproved.style.display = "none";
});

change.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     userDetails.style.display = "grid";
     loanApplied.style.display = "none";
     loanPending.style.display = "none";
     loanStatus.style.display = "none";
     loanApproved.style.display = "none";
});
change1.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     userDetails.style.display = "none";
     loanApplied.style.display = "grid";
     loanPending.style.display = "none";
     loanStatus.style.display = "none";
     loanApproved.style.display = "none";
});
change2.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     userDetails.style.display = "none";
     loanApplied.style.display = "none";
     loanPending.style.display = "grid";
     loanStatus.style.display = "none";
     loanApproved.style.display = "none";
});
change3.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     userDetails.style.display = "none";
     loanApplied.style.display = "none";
     loanPending.style.display = "none";
     loanStatus.style.display = "grid";
     loanApproved.style.display = "none";
});
change4.addEventListener('click', () => {
     adminDashboard.style.display = "none";
     userDetails.style.display = "none";
     loanApplied.style.display = "none";
     loanPending.style.display = "none";
     loanStatus.style.display = "none";
     loanApproved.style.display = "grid";
});



function image() {
     var hide = document.getElementById("image");
     var result = document.querySelector("#toggle");

     if (result.style.display === "none") {
          result.style.display = "grid";
     } else {
          result.style.display = "none";
     }

}
function img() {
     var showDiv = document.querySelector("#form");

     showDiv.addEventListener('click', function () {
          document.getElementById("showRegister").classList.add("showDiv");
          document.getElementById("clickhere").classList.add("showDiv1");
          document.getElementById("footer").classList.add("showDiv2");

     });
}
function personInfo() {

     document.getElementById("personForm").style.display = "grid";
     document.getElementById("backColor1").style.background="rgb(178, 218, 204)";
     document.getElementById("studyForm").style.display = "none";
     document.getElementById("backColor2").style.background="none";
     document.getElementById("accForm").style.display = "none";
     document.getElementById("backColor3").style.background="none";
     document.getElementById("loanForm").style.display = "none";
     document.getElementById("backColor4").style.background="none";

}

function studyInfo() {

     document.getElementById("personForm").style.display = "none";
     document.getElementById("backColor1").style.background="none";
     document.getElementById("studyForm").style.display = "grid";
     document.getElementById("backColor2").style.background="rgb(178, 218, 204)";
     document.getElementById("accForm").style.display = "none";
     document.getElementById("backColor3").style.background="none";
     document.getElementById("loanForm").style.display = "none";
     document.getElementById("backColor4").style.background="none";

}

function accInfo() {

     document.getElementById("personForm").style.display = "none";
     document.getElementById("backColor1").style.background="none";
     document.getElementById("studyForm").style.display = "none";
     document.getElementById("backColor2").style.background="none";
     document.getElementById("accForm").style.display = "grid";
     document.getElementById("backColor3").style.background="rgb(178, 218, 204)";
     document.getElementById("loanForm").style.display = "none";
     document.getElementById("backColor4").style.background="none";
}

function loanInfo() {
     document.getElementById("personForm").style.display = "none";
     document.getElementById("backColor1").style.background="none";
     document.getElementById("studyForm").style.display = "none";
     document.getElementById("backColor2").style.background="none";
     document.getElementById("accForm").style.display = "none";
     document.getElementById("backColor3").style.background="none";
     document.getElementById("loanForm").style.display = "grid";
     document.getElementById("backColor4").style.background="rgb(178, 218, 204)";


}
