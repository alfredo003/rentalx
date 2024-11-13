import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCase/createCategory';
import { listCategoriesController } from '../modules/cars/useCase/ListCategory';
const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req,res)
});
categoriesRoutes.get('/', (req, res) => {
 return listCategoriesController.handle(req,res)
});

export { categoriesRoutes };
