import express from 'express'

const app = express();

app.get("Hello",(req,res)=>{
    res.send();
})

app.listen(3000,()=>console.log("Server Running!"));