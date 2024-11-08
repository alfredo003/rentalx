import { Router } from 'express';
import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post("/",(req,res)=>{
    const {name,description} = req.body;

    const categoryAlreadyExists = categoriesRespository.findByName(name);
    if(categoryAlreadyExists)
        return res.status(400).json({error:"Category already exists!"});
    categoriesRespository.create({name, description})
    return res.status(201).send();
});
categoriesRoutes.get('/',(req,res)=>{
    const all = categoriesRespository.list();
    return res.json(all);
});

export {categoriesRoutes}