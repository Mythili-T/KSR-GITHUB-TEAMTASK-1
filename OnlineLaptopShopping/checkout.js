document.getElementById("pay-amount").innerHTML=localStorage.getItem("textvalue");
//console.log(localStorage.getItem("textvalue"));
window.onbeforeunload = function (e) {
    localStorage.clear();
};

window.onload=function(){
    document.querySelector(".credit-card").style.display="flex";
	document.querySelector(".card-actions").style.display="flex";
}
const buttons = document.querySelectorAll('.tablinks');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		setActiveBtn(e);
	});
});
function setActiveBtn(e) {
	buttons.forEach((button) => {
	  button.classList.remove('btn-clicked');
	});
	e.target.classList.add('btn-clicked');
  }
  
function openCreditCardContent(){
	document.querySelector(".credit-card").style.display="flex";
	document.querySelector(".debit-card").style.display="none";
	document.querySelector(".net-banking").style.display="none";
	document.querySelector(".cash-on-delivery").style.display="none";	
}
function openDebitCardContent(){
	document.querySelector(".debit-card").style.display="flex";
	document.querySelector(".card-actions").style.display="flex";
	document.querySelector(".credit-card").style.display="none";
	document.querySelector(".net-banking").style.display="none";
	document.querySelector(".cash-on-delivery").style.display="none";

}
function openNetBankingContent(){
	document.querySelector(".net-banking").style.display="flex";
	document.querySelector(".card-actions").style.display="flex";
	document.querySelector(".credit-card").style.display="none";
	document.querySelector(".debit-card").style.display="none";
	document.querySelector(".cash-on-delivery").style.display="none";
}
function openCODContent(){
	document.querySelector(".cash-on-delivery").style.display="flex";
	document.querySelector(".credit-card").style.display="none";
	document.querySelector(".debit-card").style.display="none";
	document.querySelector(".net-banking").style.display="none";
	document.querySelector(".card-actions").style.display="none";
}
function openAlert(){
	alert("Your order placed successfully...");
    window.open('index.html');
}

