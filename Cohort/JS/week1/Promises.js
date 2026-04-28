//Promises----syntatical sugar that make this code slightly more readble, still uses callback under the hpod.
//How can we create a async function of out own.

// const fs   = require('fs')

// function 

//on notion




////////

// const fs = require('fs')

// console.log("hello");

// function REadthefile(file){ //promise is a class actually
//     return new Promise(function(resolve, reject){ //this is a object oof a class.promise takes a function  as argument, ans that funtion takes resolve and reject as its arugumewnt
//         fs.readFile(file, "utf-8", function(err, data){
//             console.log("before reolvin");
//             if(err){
//                 reject("there is an error");
//             }else{
//             setTimeout(() => {
//                 resolve(data);   //call resolve after 2 sec/
//             }, 2000);
            
//             }
//         })
//     })
// }
// console.log("hello middle");

// // function onDone(data){
// //  console.log(data);
 
// // }
// // REadthefile().then(onDone).catch((err)=>{
// //     console.log(err);
// // });

// async function logtheresult(){
//     try{
// const data = await REadthefile('a.txt');
// console.log(data);
//     }catch(error){
//    console.log(error);  
// }}
// logtheresult()
// console.log("bye");



function myfun(){
    let p = new Promise((resolve)=>{
      resolve("hello")
    })
    return p;
}
// myfun().then((data)=>{
// console.log(data);

// })

async function aunccaawait(){  //same thing as callback .then .cacth no nesting but a better way to right callbacks.
    console.log("hlo");
    
const data  = await myfun()
console.log(data);v
console.log("jello");

}
aunccaawait()






