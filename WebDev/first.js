//running two files at the same time.
// const {sum, sub} = require("./Second.js") //second wali filw ke code ko ek function mai wrap kar dega. 

import { sub, sum } from "./Second.js";


let ans = sum(2,3);
let subb = sub(5,1);
console.log(ans);
console.log(subb);

console.log("hello im first");
