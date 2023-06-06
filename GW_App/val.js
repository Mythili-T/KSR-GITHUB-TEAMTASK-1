const form = document.getElementById('form');
const first= document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone =document.getElementById('phone');
const confirmpwd = document.getElementById('confirmpwd');
const address=document.getElementById('address');
const pincode=document.getElementById('pincode');

/*Client side Validation*/

first.addEventListener('input',validateUsername);
email.addEventListener('input',validateEmail);
password.addEventListener('input',validatePassword);
confirmpwd.addEventListener('input',validatePasswords);
phone.addEventListener('input',validatePhone);
address.addEventListener('input', validateAddress);
pincode.addEventListener('input',ValidatePincode);

function validateUsername(){
    var usernameValue = first.value.trim();
    if(usernameValue.length < 3){
        setErrorFor(first, 'Username should be minimum 3 charcters')
    }
    else if(!isName(usernameValue)){
        setErrorFor(first, 'Enter a valid Name');
    }
    else{
        setSuccessFor(first);
    }
}
function validateEmail(){
    var emailValue = email.value.trim();
    if(emailValue === ''){
        setErrorFor(email, 'Email id cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Enter a valid email');
    }
    else{
        setSuccessFor(email);
    }
}
function validatePassword(){
    var passwordValue = password.value.trim();
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }
    
    else{
        setSuccessFor(password);
    }
}

function validatePasswords(){
    var passwordValue = password.value.trim();
    var confirmValue = confirmpwd.value.trim();
    if(confirmValue === ''){
        setErrorFor(confirmpwd, 'Confirm password cannot be blank');
    }
    else if(passwordValue !== confirmValue)
    {
        setErrorFor(confirmpwd, 'Password does not match ')
    }
    else{
        setSuccessFor(confirmpwd);
    }
}
function validatePhone(){
    var phoneValue = phone.value.trim();
    if(phoneValue === ''){
        setErrorFor(phone, 'Phone number cannot be blank');
    }
    else if(!isPhone(phoneValue)){
        setErrorFor(phone, 'Enter a valid phone number');
    }
    else{
        setSuccessFor(phone);
    }
}
function validateAddress(){
    var addressValue = address.value.trim();
    if(addressValue===''){
        setErrorFor(address, 'Address Cannot be blank')
    }
    else{
        setSuccessFor(address)
    }
}
function ValidatePincode(){
    var pincodeValue = pincode.value.trim();
    if(pincodeValue===''){
        setErrorFor(address, 'Address Cannot be blank')
    }
    else if(!isPincode(pincodeValue)){
        setErrorFor(pincode,'Please enter 6 digit pincode')
    }
    else{
        setSuccessFor(pincode)
    }
}



/*Serverside validation*/

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = first.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmpwd.value.trim();
    const addressValue = address.value.trim();
    const pincodeValue = pincode.value.trim();

    if (nameValue === '') {
        setErrorFor(first, 'Please enter your name');
    } else {
        setSuccessFor(first);
    }
    if (addressValue === '') {
        setErrorFor(address, 'Please enter your address');
    } else {
        setSuccessFor(address);
    }
    if (pincodeValue === '') {
        setErrorFor(pincode, 'Please enter your Pincode');
    } else {
        setSuccessFor(pincode);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Phone number cannot be blank');
    }
    else if(!isPhone(phoneValue)){
        setErrorFor(phone, 'Enter a valid phone number');
    }
    else{
        setSuccessFor(phone);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }else {
        setSuccessFor(password);
    }

    if (confirmValue === '') {
        setErrorFor(confirmpwd, 'Please re-enter password');
    }else if(passwordValue===confirmValue){
        setSuccessFor(confirmpwd)
    }else if (!isConfirm(confirmValue)) {
        setErrorFor(confirmpwd, 'Invalid password');
    }else {
        setErrorFor(confirmpwd, 'Passwords does not match');
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}
function isPhone(phone){
    return /^[6-9]\d{9}$/.test(phone);
}
function isPincode(pincode){  
    return /^\d{6}$/.test(pincode);
}
function isName(first){
return /^[A-Za-z\s]+$/.test(first);
}