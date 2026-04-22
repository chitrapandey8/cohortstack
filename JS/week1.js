//what is currently running or whatever we are running currently on our laptop it goes in ram.
//ssd--photos video that are not running cureently resides in ssd.
//we neend language becoz we cannot code in 01010 and complier convert it into 01010 which is understood my computer.
//g++ c++ ka complier hai commaond "g++ file.cpp -o temp".
//replit.
//browsers understands html, css, javascript.
// js is dynamically typed language means one variable can store differnt data types
// js is single threaded languagen, a core can run one js program at once.it is considered to be bad language for scalable systems.
// 
//

// let obj = {
// 	name: "chitarnshi",
// 	gender:"male"
// }
// function greetbygender(obj){
// if(obj.gender === "female"){
// 	console.log(`hello queen ${obj.name}`)
// }else{
// 	console.log(`hello king ${obj.name}`)
// }
// }

// let sum = 0;
// for(let i = 0; i<101; i++){
// sum += i;
// }
// console.log(sum);

// greetbygender(obj)

//print all even in an array.
// let arrr = [1,2,3,4,5,6,8,10]
// let ans = arrr.filter((i)=>{
//     return i%2 == 0;
// })
// console.log(ans);

//print max in array
// let arr = [1,2,3,8,4,5,9]
// let maxi = 0;
// for(let i= 0; i< arr.length; i++){
//     maxi = Math.max(maxi, arr[i]);
// }
// console.log(maxi);

// const user = [{firstname:"pisuh", gender:"male"},{firstname:"pisjksduh", gender:"male"},{firstname:"pisuhjj", gender:"female"}]
// for(let i = 0; i<user.length; i++){
//     if(user[i].gender == "male"){
//         console.log(user[i].firstname);
        
//     }
// }

//reverse the array:



//function:
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));


// let sum = 0;
// for(let i = 0; i<100; i++){
//     sum += i;
// }
// console.log(sum);

// function sum(num1, num2, fntocall) { //this function somehow called aonthoer fucntion in this case which is displayresult
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// console.log(sum(2,3,displayResult));

// function calculate(a,b,type){
//     if(type == "sum"){
//         return a+b;
//     }else if(type == 'min'){
//         return a-b;
//     }
// } 

// console.log(calculate(2,3,"sum"));

// function sum(a,b){
// return a+b;
// }

// function sub(a,b){
// return a-b;
// }

// function fntocall(a,b,fn){
//     return fn(a,b);
// }


// console.log(fntocall(2,3,sum));

// setTimeout(greet,1000)

function greet(){
    console.log("hello world");
    
}

setInterval(greet,1000)
