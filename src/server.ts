import express from 'express'

const app = express();
app.use(express.json());

app.get("/hello",(req,res)=>{
    res.send();
});

app.post("/courses",(req,res)=>{
    const {name} = req.body;

    res.send(name);
})

app.listen(3000,()=>console.log("Server Running!"));