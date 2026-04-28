//http create a sort of hostpital hwere i can expose my logic to the world
//HOW do u create a HTTP server - express. express is a framwworkk in node tahst let us create Http server.
//3000 acts like an address of a doctors room that u can contact me in room 3000
//url?n=50 , const n = query.n
//parsms -- url:id , params.id
import express from 'express'
const app  = express()

function sum(n){
    let ans = 0;
    for(let i = 0 ; i<=n; i++){
        ans += i;
    }
    return ans;
}

app.get('/sum',(req, res)=>{
    const n = req.query.n  //http://localhost:3000/sum?n=5
    let ans = sum(n);
    return res.json({
        message:`The sum is ${ans}`
    })
})

app.listen(3000)
