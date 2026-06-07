  //what is currently running or whatever we are running currently on our laptop it goes in ram.
//ssd--photos video that are not running cureently resides in ssd.
//we neend language becoz we cannot code in 01010 and complier convert it into 01010 which is understood my computer.
//g++ c++ ka complier hai commaond "g++ file.cpp -o temp.exe".

//complied language-- cpp, java, rust, golang ye sab complierd languaages se ismai lilha hua koi bhi code pehele complie hota hai uske baad run hota hai
//interpreted language-- line by line run hota hai ismia kuch eksath complie wala cheez nhi hai,agar teesre line pe erro h toh upar ki do line run karke apna result degi

//replit.
//browsers understands html, css, javascript.
// js is dynamically, lossly  typed language means one variable can store differnt data types
// js is single threaded languagen, a core can run one js program at once.it is considered to be bad language for scalable systems.
// NON - blocking??
//meta deta--objects can be very complex.


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
//     fntocall(result)
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// sum(2,3,displayResult)
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

// function greet(){
//     console.log("hello world"); 
// }
// setInterval(greet,1000)

// let clock = 30;
// let stop = clock+2;
// const id = setInterval(()=>{
//    console.log(clock);
//    clock--;
// },1000)
// //clear Interval and clear timeout comes with setinterval
// setTimeout(()=>{
// clearInterval(id)
// console.log("clock stopped");
// },stop*1000)

///settimout

// setTimeout(()=>{
// const start = Date.now()
// let sum = 0;
// for(let i = 0; i<100000000; i++){
// sum += i;
// }
// const end = Date.now();
// console.log(`total time it took is ${(end - start)/1000}`);
// },5000)

//cluster module -- node process ek hi core pe chlta hai toh baki core waste hote h, cluster module node js ki libararay hai jo multiple process run krta hai , agar 10 core h toh 10 worker bana deta hai, unki alagalag ides hongi, jo bhi kahlai worker hota hai process ko excute result return krta hai.


//custom setinterval with settimout 
// function customSetinterval(fn, delay){
// function immediate(){
//     fn();
//     setTimeout(immediate, delay);
// }
// immediate()
// }

// customSetinterval(()=>{
// console.log("hello");
// },1000)

//setinterval that stops after 5 sec, without usin setinterval and clearinterval


 
function sum(num1, num2, fn){
   let result = num1 + num2;
   return fn(result);
}


function display(fun){
   console.log("Result is" + " " + fun);
}
function display2(fun){
    console.log("RESULT IS" + " " + fun);
    
}

sum(1,2, display2)