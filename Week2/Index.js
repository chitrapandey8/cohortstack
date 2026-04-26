import express from  'express'

const app = express()

const PORT = 3000

app.use(express.json())
app.get('', (req, res)=>{
    res.json({
        name:"chitanshi",
        age:20
    })
})

app.post('/add',(req, res)=>{ 
    console.log(req.body); //ye client se arra hai server papr mai usse log karri hu
   res.json({mes:"hello"}) //ye mai client ko send karri hu /add pe hit hone pe
})

app.listen(PORT,()=>{
    console.log(`server is at PORT ${PORT}`);  
})