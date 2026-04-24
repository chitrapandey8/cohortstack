//find length of string
// function findlength(str){
// console.log(str);
// console.log(str.length);
// }
// findlength("hello")


//indexofaword
// function findindex(str, word){
// console.log(str.indexOf(word));
// console.log(str.lastIndexOf(word));}
// findindex("hello world world","world")

//get slice from a sentence\
// function substringg(str, start, end){
// console.log("original string:", str);
// console.log("Substring:", str.slice(start, end));
// }
// substringg("hello world",0,5)

// //get slice from a sentence\
// function substringg(str, start, end){
// console.log("original string:", str);
// console.log("Substring:", str.substring(start, end));
// }
// substringg("hello world",0,5)

//splits in array:
// function splitString(str, separator) {
//   console.log("Original String:", str);
//   console.log("After split:", str.split(separator));
// }
// splitString("Hello World", " ");

//trim
// str = "hello  world"
// console.log(str.trim());
// console.log(str.replace("world", "Javascript"));




///parseINT
// console.log(parseInt("42.0"));
// console.log(parseInt("wd42pscsgf")); //nana bacoz it is not a number it converts no into int.
// console.log(parseInt("42.099"));

// //parsefloat
// console.log(parseFloat("333.3"));

//Arrays
// let arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift() //removes from start
// console.log(arr);
// arr.unshift(1)
// console.log(arr); //adds at the front

//merging 2 ararys\
// let arr = [1,2,3,4,5]
// const arr1 = [1,2]
// let arr3 = arr1.concat(arr) 
// console.log(arr3);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//  let arr = [1,2,3,4,5]
// function logthing(i){
//     console.log(i);   
// }
// arr.forEach(logthing)


// arr.forEach((i)=>{
//     console.log(i);
// })


// function one(){
//     console.log(1);
// }
// function  two(){
//     console.log(2);
// }
// function fntocall(fn){
// fn()
// }
// fntocall(two)


///////////////////////////Class and objects????????????????????????????

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age
        
//     }

//     display(){
//    console.log(`${this.name} is age is ${this.age}`);
//     }
    
//     makesound(sound){
//         console.log(`this animal makes ${sound}`);
        
//     }

//     static mytype(){ //iot is associated with class not with object
//      console.log("im a Animal");
     
//     }
// }

// const dog = new Animal("bella", 3)
// dog.display()
// dog.makesound("moew mow")
// Animal.mytype() //can be called by a class only

////////////////////////date/////////////////////////////////////////////////////////////

// const currentdate = new Date()
// console.log(currentdate.getDate());
// console.log(currentdate.getFullYear());
// console.log(currentdate.getDay());
// console.log(currentdate.getMonth());
// console.log(currentdate.getTime()); //no of sec after 1970


// function sum(){
//     let a = 0;
//     for(let i = 0; i<100000000; i++){
//         a = a+i;
//     }
//     return  a;
// }

// const before  = new Date()
// const beforestart = before.getTime()
// sum()
// const after  = new Date()
// const afterstart = after.getTime()
// console.log(afterstart - beforestart);


////////////////////////////////json //////////////////////////////////
//parse, stringyfy

///parse
// const string = '{"name":"hello", "age":2}'
// const parsethis = JSON.parse(string)
// console.log(parsethis);

////stringyfy
// const user = {
//     name:"chitarnshi",
//     gender:"male"
// }

// //string to json ---parse
// //json to string --- string

// const stringg = JSON.stringify(user)
// console.log(user);

// console.log(stringg);

// let obj = {
//     name:"chitranshi",
//     age:5,
//     ok:8
// }
// console.log(Object.keys(obj)); //return array of keys
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(Object.hasOwnProperty("na"));
// console.log(Object.assign({}, obj, {adres:"hello"}));






