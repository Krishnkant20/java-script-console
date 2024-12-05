// let objectName={
//     key1:"value",
//     key2:"value"
// }

let student={
    name:"sahil",
    age:20,
    gender:"female",
    welcome:function(){
    return ` Hello my name is ${this.name}  and age is  ${this.age}`
    }
}
console.log(student.gender);


student.age=200;
console.log(student);//update

console.log(student.welcome())