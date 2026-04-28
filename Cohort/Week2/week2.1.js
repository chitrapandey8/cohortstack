////problem in programming is code repetition DRY -- dont repeat urself
// function sq(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function displayresult(sum){
// console.log(`the sum is ${sum}`);

// }
// function sumofsumthing(a,b, fn){
//     let val1 = fn(a);
//     let vaL2 = fn(b);
//     return displayresult(val1+vaL2)
// }
// sumofsumthing(1,2,sq);


///////////////////Async functions//////////////////////
// function setTimeoutfnSync(cb ,ms){
//     let startime = Date.now()
//     while(true){
//         let endtime = Date.now()
//         if(endtime - startime >= ms){
//          return cb()
//         }
//     }
// }
// console.log("hello 1");
// // setTimeout(()=>{
// //     console.log("hello 2");
// //     }, 2000)
// setTimeoutfnSync(()=>{
//     console.log("hello 2");
    
// },5000)

// console.log("hello 3");


/////////////////////////create a clock in HH:MM:SS format//////////////\

// function showTime(){
// let date =  new Date()
// let Hours = date.getHours()
// let minutes  = date.getMinutes()
// let seconds = date.getSeconds()
// console.log(`${Hours}:${minutes}:${seconds}`);
// }

// const  id = setInterval(showTime, 1000);

// setTimeout(()=>{
//     clearInterval(id)
//     console.log("clock Stopped");
    
// }, 5000)

////////////////////////////Promisess///////////////////////////
//IT is a cleaner way to write calllabcks under the hood it stilll works as callbacks
//Promise is also a class js provides
//CALLBACKHELL


// const fs =  require('fs')

// function ReadFilee(file){return new Promise((resolve, reject)=>{fs.readFile(file,"utf-8", (err, data)=>{if(err){reject("Eroorr")}else{setTimeout(()=>{resolve(data)},2000);}})})}
// ReadFilee('../JS/week1/a.txt').then((data)=>{
// console.log(data);}).catch((err)=>{console.log(err);})

// function Promisified(time){
//     const p =  new Promise((resolve)=>{
//      setTimeout(() => {
//          resolve()
//      }, time);
//     })
//     return p
// }

//promise chaning
// Promisified(1000).then(()=>{
// console.log("first");
// return Promisified(2000)
// }).then(()=>{
//     console.log("second");  
//     return Promisified(3000) 
// }).then(()=>{
// console.log("third");
// })

// async function main(){
//     await Promisified(1000)
//     console.log("first");
//     await Promisified(2000);
//     console.log("second");
//     await Promisified(3000)
//     console.log("third");
// } 
// main()

///create promise class by ur own
// function sum(a,b){
//     return a+b;
// }
// setTimeout(()=>{
//     console.log(sum(1,2));
    
// },2000);


////MAster process hoti hai ek jo worker ko kaam assign krta hai.

import {Worker} from 'worker_threads'

let worker = new  Worker('../Week2/Worker.js') //ye worker ki file lega

worker.postMessage('../JS/week1/a.txt')

worker.on('message',(mes)=>{
    console.log(mes);
})
worker.on('error',(err)=>{
    console.log(err);  
})
worker.on('exit',(exit)=>{
    console.log(exit);
    
})

