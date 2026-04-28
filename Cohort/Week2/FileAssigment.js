import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url' //library
import fs from 'fs'
const app = express()
const PORT = 3000
const __filename = fileURLToPath(import.meta.url) //current file ka url dega path format mai convert hopga taki os ko samjha aaye.
const __dirname = path.dirname(__filename) //__filename ki directory name.
const folderpathofNotes = path.join(__dirname,"notes");
console.log(folderpathofNotes);
app.use(express.static(folderpathofNotes))
app.get('/getfolders',(req,res)=>{
fs.readdir(folderpathofNotes, (err, files)=>{
    if(err){
      return res.status(400).json({
        message:`Wrong Folder Name`})}else{
      res.status(200).json({files})}})})
app.get('/readfile/:filename', (req ,res)=>{
const file = req.params.filename
const foldername = path.join(folderpathofNotes, file)
fs.readFile(foldername, "utf-8", (err, data)=>{
    if(err){
        return res.status(400).json({
            message:`Wrong File Name`
        })}else{
        return res.status(200).json({data})}})})
app.listen(PORT,()=>{
    console.log(`Listen on port ${PORT}`);})