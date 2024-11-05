import express from 'express'
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

app.get("/hello",(req,res)=>{
    res.send();
});

app.use(categoriesRoutes);

app.listen(3000,()=>console.log("Server Running!"));