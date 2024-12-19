// --------------------------dice
// let go=()=>{
//     let show=document.querySelector("#text")
//     setTimeout(()=>{
//      show.style.display="none"
//     },3000)
// }
// go()

// ---------------------------time
let go=()=>{
    let show=document.querySelector("#text")
    let ans= new Date();
   let time=`${ans.getHours()}:${ans.getMinutes()}:${ans.getSeconds()}`;
   show.innerHTML=(time);
}
setInterval(go,1000)


