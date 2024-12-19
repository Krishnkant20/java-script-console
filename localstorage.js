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