import { Router } from 'express';
import multer from 'multer';
import createCategoryController  from '../modules/cars/useCase/createCategory';
import { listCategoriesController } from '../modules/cars/useCase/ListCategory';
import { importCategoryController } from '../modules/cars/useCase/importCategory';
const categoriesRoutes = Router();

const upload = multer({
  dest:'./tmp'
});

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController().handle(req,res)
});
categoriesRoutes.get('/', (req, res) => {
 return listCategoriesController.handle(req,res)
});
categoriesRoutes.post('/import',upload.single("file"),(req,res)=>{

  return importCategoryController.handle(req,res)
})
export { categoriesRoutes };
