//loops, functions, callbacks in js
//latentflip- loupe(website)
//callbacks - passing functions as a arguments.


//a function calling anopther function
// function sq(n){
//     return n*n;
// }

// function sumofsq(a, b){
// let val1 = sq(a);
// let val2 = sq(b);

// return val1 + val2;
// }

// console.log(sumofsq(1,2));

////////callbacks;

// function sq(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function sumofsomthing(a, b, fn){  //fn is a callback fn which is pased as an argument in his funtion
//     let val1 =  fn(a); 
//     let val2 = fn(b);
//     return val1+val2;
// }
// console.log(sumofsomthing(1,2,cube));


////Anonumns funcion////////////////

// function sq(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function sumofsomthing(a, b, fn){                
//     let val1 =  fn(a); 
//     let val2 = fn(b);
//     return val1+val2;
// }
// console.log(sumofsomthing(1,2, function(n){
//     return n*n;
// }));

