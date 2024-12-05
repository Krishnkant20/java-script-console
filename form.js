let sub=()=>{


    let name=document.querySelector("#name").value;
    let number=document.querySelector("#num").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;


    let errorname=document.querySelector("#errorname");
    let errornum=document.querySelector("#errornum");
    let erroremail=document.querySelector("#erroremail");
    let errorpass=document.querySelector("#errorpass");
    let errorcpass=document.querySelector("#errorcpass");
    

    if(name===""){
        errorname.textContent="Please enter your name";
        errorname.style.color="red";
        errorname.style.fontSize="25px";
        return false;
    }
    else if(number===""){
        errornum.textContent="Please enter your number";
        errornum.style.color="red";
        errornum.style.fontSize="25px"
        return false;
    }

    else if(isNaN(number)){
        errornum.innerHTML="please enter number only";
        return false;
    }

    else if(number.length!==10){
        errornum.innerHTML="please enter valid number";
        return false;
    }
    else if(pass!==cpass)
        {
        errorcpass.textContent="please enter the correct password";
        return false;
         
    }
    else if(!
        (
            pass.match(/[123456789]/)
            &&
            pass.match(/[!@#$%^&*()]/)
            &&
            pass.match(/[a-z]/)
            &&
            pass.match(/[A-Z]/)
        )
    )
    {
        errorcpass.innerHTML="password contain atleaest 1 lower,upper,special and number";
        errorpass.style.color="red";

        let passinp=document.querySelector("#pass")
        passinp=style.borderColor="red"
        passinp.style.outlineColor="red"
        return false;
        
    }




























}