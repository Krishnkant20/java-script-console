let store='';

let cal=(value)=>{
    let show=document.querySelector("#show")
    store=store+value //"2+5"
    show.innerHTML=store
}

let result=()=>{
    let show=document.querySelector("#show")

    show.innerHTML=eval(store) //"2+5"=>7 //number
    store=eval(store) //7 number
    store.toString(); //"7" string
}
let ac=()=>{
    store="";
    let show=document.querySelector("#show")
    show.innerHTML=""
}
let del=()=>{
     store=store.slice(0,-1)

     let show=document.querySelector("#show")
     show.innerHTML=store;
}