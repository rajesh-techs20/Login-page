 
function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    if(email==""&password==""){
        error=document.getElementById("error").innerHTML="Enter email-id";
        errors=document.getElementById("errors").innerHTML="Enter password";
        setTimeout(()=>{
            alert("Please enter your credentials");
        },100)
    }
    else if(!email.includes("@")&password.length<6){
        error=document.getElementById("error").innerHTML="incorrect email-id";
        errors=document.getElementById("errors").innerHTML="password must contain more than 6 characters";
        setTimeout(()=>{
            alert("Incorrect credentials");
        },100)
    }
     
    else if(password==""){
        errors=document.getElementById("errors").innerHTML="please enter password";
        setTimeout(()=>{
            alert("Please enter password");
        },100)
    }
     
    else if(password.length<6){
        errors=document.getElementById("errors").innerHTML="password must contain more than 6 characters";
        setTimeout(()=>{
            alert("Password must be more than 6 characters");
        },100)
    }
    else {
        error=document.getElementById("error").innerHTML="";
        errors=document.getElementById("errors").innerHTML="";
        setTimeout(()=>{
            alert("Login succesfull");
        },100);
    }
}
function showpassword(){
    let x= document.getElementById("pass");

    if(x.type==="password"){
        x.type="text";
    }
    else {
        x.type="password";
    }
}






























