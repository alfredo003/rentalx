import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post("/",(req,res)=>{
    const {name,description} = req.body;

    categoriesRespository.create({name, description})
    return res.status(201).send();
});
export {categoriesRoutes}