let signup=()=>{
    let signname=document.querySelector("#signname").value;
    let signemail=document.querySelector("#signemail").value;
    let signpass=document.querySelector("#signpass").value;




    if(signname===""){
        let sign=document.querySelector("#signname")
     sign.style.borderColor="red";
     return false;
    }

localStorage.setItem("name",signname)
localStorage.setItem("email",signemail)
localStorage.setItem("pass",signpass)


 window.location.href="locallogin.html";
return false;  //for stop referece


}



let Login=()=>{
    let loginname=document.querySelector("#loginname").value;
    let loginpass=document.querySelector("#loginpass").value;

    let checkname=localStorage.getItem("name")
    let checkpass=localStorage.getItem("pass")

    if(loginname===checkname&&loginpass===checkpass){
        alert("login sucess")
        window.location.href="Localhome.html"
    }else{
        alert("login failed")
        return false;
    }
return false;
}