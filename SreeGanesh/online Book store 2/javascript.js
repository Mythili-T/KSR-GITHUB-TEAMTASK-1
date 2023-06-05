function validate()
{
    let username=document.getElementById('user-input').value;
    let password=document.getElementById('password-input').value;
    if(username=='sree'&&password=='Sree@098765')
    {
        alert("Sree your Login is successfull");
        return false;
    }
    else
    {
        alert("Login failed");
    }
    if(password.length<6)
    {
        alert("password should have atlest 6 character");
    }

}