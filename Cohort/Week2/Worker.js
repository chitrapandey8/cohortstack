// import { parentPort } from "worker_threads";
// import fs from 'fs';

// parentPort.on('message', (file)=>{ //sare workers master process se link hai master port se kuch ayrga tab kuch kaam hoga
//    fs.readFile(file, "utf-8", (err, data)=>{
//      if(err){
//         parentPort.postMessage(err)
//         return 
//      }else{
//         parentPort.postMessage(data)
//         process.exit()
//      }
//    })
// })

import { parentPort } from "worker_threads";
import fs from 'fs'
import { resolve } from "dns";
parentPort.on('message',(file)=>{
    function Promisifiedport(file){
       return new Promise((resolve, reject)=>{
      fs.readFile(file, "utf-8", (err,data)=>{
         if(err){
            reject(err)
         }else{
            resolve(data)
         }})})}
    async function writetofile(){
       try{
        const Data = await Promisifiedport(file)
        const Data2  = Data.split(" ")
        const Arrayy = Data2.filter((i)=>{return i != ''})
        const stringg  = Arrayy.join(" ")
        parentPort.postMessage(stringg)
        fs.writeFileSync(file,stringg)
       }catch(err){
        parentPort.postMessage(err);
        return}}
    writetofile()
})

