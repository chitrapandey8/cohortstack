import express from  'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT =  process.env.PORT ||  3000

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).json({
        name:"chitanshi",
        age:20
    })
})

// app.post('/add',(req, res)=>{ 
//     console.log(req.body); //ye client se arra hai server papr mai usse log karri hu
//    res.json({mes:"hello"}) //ye mai client ko send karri hu /add pe hit hone pe
// })


app.post('/add',(req, res)=>{
    const {a,b} = req.body
    let sum = parseInt(a)+parseInt(b)
    res.status(200).json({
       result:sum
    })
})

app.listen(PORT,()=>{
    console.log(`server is at PORT ${PORT}`);  
})