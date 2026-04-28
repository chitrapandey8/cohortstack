///sync --- somthing running synchronasly one after another,
//async ---- things are happing parally, tasks are context switching.
//can js can be async?? yas by async functions.
//settimout is a global function by js, web api was not really a part of js it is provided by web browsers

// setTimeout(() => { //this is async
//     console.log("hello 2");
    
// }, 2000);
// console.log("hello 1"); //this is sync 

//few async functions that js provide for us 
//1.fs.readFile -- to read a file in filrsystem.
//2.Fetch -- to fetch some data from an API endpoint.

const fs = require('fs'); //filesystem module
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})   ///async function

console.log("1");


function sum(){  //this is a sync ye chalega jab ye ho jayega tab hello world print hoga phir async resolve hoga
    let summ = 0; 
    for(let i = 0; i<10000000000; i++){
     summ += i;
    }
    console.log(summ);
    
}
sum()  //thread chlti hai sync task perform kari hai or aysnc task callback queue mai jata hai sari thread sync task erform lrne ke baad event loop check karta hai ki call back mai kuch padah kya phir thread jab free hoti hai jab voh callback ko resolve krta hai

console.log("helllo world"); //sync function
