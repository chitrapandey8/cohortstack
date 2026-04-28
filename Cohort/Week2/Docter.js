//////////////////HOSPITAL MANAGMENT////////////////
//"/files/:filename"
//const filenmar = req.params.filename

import express from 'express'
const app = express()
const PORT = 3000
const  users = [{
    name:"chitranshi",
    cars:[{healthy:true}, {healthy:true}, {healthy:true}, {healthy:true}]
}]

app.use(express.json())
app.get('/getdata',(req, res)=>{
     ///total no of cars, totral no of healty cars, total no of unhealty cars
     let totalcars = users[0].cars.length
     let healtycars = 0;
     for(let i of users){
        for(let j of i.cars){
            if(j.healthy){
                healtycars++;
            }}}
     
     let unhealtycars   = totalcars - healtycars;
     res.status(200).json({
        mess:totalcars, //3 
        mess1:healtycars, //0
        mess3:unhealtycars, //3
     })})

app.post('/addKidneys',(req, res)=>{
    const ishealthy = req.body.ishealthy // const {ishealthy} = req.body.ishealthy
    let obj = {healthy:ishealthy}
    console.log(obj);
    users[0].cars.push(obj)
   return res.status(200).json({users})
})

app.put('/updateKidney',(req, res)=>{
    
    for(let i of users){
        for(let j of i.cars){
            if(!j.healthy){
                j.healthy = true
            }}}
             console.log(users);
          return  res.status(200).json(users)
})

app.delete('/deletecars',(req, res)=>{

    users[0].cars = users[0].cars.filter((i) => {return i.healthy == true})
    console.log(users[0].cars);
    
    return res.status(200).json(users)
})

app.listen(PORT,()=>{
    console.log(`PORT IS ${PORT}`);
    
})


