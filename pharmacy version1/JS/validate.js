function checking() {
    var email = document.getElementById("user_email");
    var pass = document.getElementById("password");
    var user = "gautamkrishnasamy2001@gmail.com";
    var password= "1234567";
    email.style.border = "2px solid red";
    if(email.value == user){
        email.style.border = "2px solid green";
    }
}

function checkpass(){
    var pass = document.getElementById("password");
    var password= "1234567";
    pass.style.border = "2px solid red";
    if(pass.value == password){
        pass.style.border = "2px solid green";
    }
}
function validated() {
    var email = document.getElementById("user_email");
    var pass = document.getElementById("password");
    var user = "gautamkrishnasamy2001@gmail.com";
    var password= "Gautam@123";
    var admin = "gautamadmin@gmail.com";
    var admin_password = "Admingautam@123";

    if (email.value.trim() == "" || pass.value.trim() == "") {
        alert("No blank values");
        return false;
    }
    else if(email.value.trim() == user && pass.value.trim() == password) {
        alert("login success");
        return true;
    }
    else if(email.value.trim() == admin && pass.value.trim() == admin_password) {
        alert("login success");
        Window.location.href = "admin.html";

    }
    else if(email.value.trim() != user && pass.value.trim() == password) {
        alert("enter correct usernmae");
        return false;
    }
    else if(email.value.trim() == user && pass.value.trim() != password) {
        alert("enter correct password");

        return false;
    }
    else if(email.value.trim() != user && pass.value.trim() != password) {
        alert("enter correct username & password");
        return false;
    }

}

// --------------------------------------------------------------------- filter-------------------------------------

const buttons = document.querySelector('.btnn');
const boxes = document.querySelector('.boxx');

buttons.forEach((button)=>{
     button.addEventListener('click' , (e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter;

        boxes.forEach((box=>{
            if(btnfilter=='all'){
                box.style.display="block";
            }else{
                const boxfilter = boxx.dataset.item;
                if(btnfilter==boxfilter){
                    boxx.style.display="block";
                }else{
                    boxx.style.display="none";
                }
            }
        }));
     });
});

function setActiveBtn(e) {
    buttons.forEach((button)=>{
        button.classList.remove('btnn-clicked');
    });
    e.target.classList.add('btnn-clicked');

}