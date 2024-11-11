import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCase/createCategory';
const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req,res)
});
categoriesRoutes.get('/', (req, res) => {
  const all = categoriesRespository.list();
  return res.json(all);
});

export { categoriesRoutes };
