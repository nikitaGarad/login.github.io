function submitLoginForm(){
    let username=document.forms["loginForm"]["username"].value;
    let password=document.forms["loginForm"]["password"].value;

    if("username == "){
        alert("please enter Username")
        return false;

    }

    if(password ==""){
        alert("please Enter password")
        return false;
    }

    if(!validateEmail(username)){
        alert()

    }

}