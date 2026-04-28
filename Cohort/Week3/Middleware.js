import express from 'express'
const app = express()
const PORT = 3000

app.use(express.json())
app.get('/health-checkup',(req, res)=>{
//do health checks here
const KidneyId = Number( req.query.KidneyId)
const {username, password} = req.body
if(username != "chitranshi" && password != "pass"){
    return res.status(400).json({
 message:`Invalid user!`
    })}

if(KidneyId != 1 &&  KidneyId !=  2){
       return  res.status(400).json({
            mes: `InValid Inputs!`
        })
    }
    return res.json({mes:`ur Kidney is fine`})
})



app.listen(PORT,()=>{
console.log(`The Port is Listening on ${PORT}`);
})