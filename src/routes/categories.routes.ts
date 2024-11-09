import { Router } from 'express';
import { CategoryRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRespository);

  createCategoryService.execute({name,description});

  return res.status(201).send();
});
categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRespository.list();
  return res.json(all);
});

export { categoriesRoutes };
