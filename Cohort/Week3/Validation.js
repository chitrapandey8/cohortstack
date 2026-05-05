import express from  'express'
const app = express()
import {z} from 'zod'
app.use(express.json())

const PORT = 3000

const user  = z.object({
    name:z.string().max(20),
    age:z.number(),
    email:z.string().email()
})

app.get('/', (req,res)=>{
    const data = user.safeParse(req.body)
    if(!data.success){
      return res.json({
        mess:"ur fake!"
      })
    }else{
        return res.json({
            mess:"ur real!"
        })
    }
})


app.listen(PORT, ()=>{
  console.log(`PORT is listeing on ${PORT}`);
  
})