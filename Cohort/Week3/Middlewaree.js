import express from 'express'
const app = express()

app.use(express.json())
function UserMiddleware(req, res, Next){
    const {username, password} =  req.body    
if(username != "chitranshi" || password != "pass"){
    return res.send("User not present")
}else{
    Next();
}}
function Kidneyiddleware(req, res, Next){
    const KidneyId =  Number( req.query.KidneyId)
    console.log(KidneyId);
    
if(KidneyId != 1 && KidneyId != 2){
    return res.send("Incorrect Input")
}else{
    Next();}}
app.get('/health', UserMiddleware, Kidneyiddleware,(req, res)=>{
   return  res.send("ur HEalth is healthy")
})
app.listen(3000)