//how to do input validation in better way - Zodd.
import e from "express";
import z, { email } from 'zod';
const app  = e()

app.use(e.json())
// const schema =  z.array(z.number())


const schema = z.object({
    email:z.string().email(),
    password:z.string().min(5)
})


app.post('/health-checkup',(req, res)=>{
    //"Kidney" = [1,3]
// const Kidney = req.body.Kidney
// const response =  schema.safeParse(Kidney); //string jo convert karne ke liye
// if(!response.success){
// res.status(411).json({
//     mesg:`Input is Invalid!`
// })
// }else{
//      return res.send("ok")
// }

  const {email, password} = req.body
  const response = schema.safeParse({email, password})
  if(!response.success){
    return res.send("not correct!!!")
  }else{
    return res.send("its correct")
  }})
app.listen(3000)

