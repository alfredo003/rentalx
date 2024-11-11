import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRespository = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(
    categoriesRespository,
  );

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});
categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRespository.list();
  return res.json(all);
});

export { categoriesRoutes };
