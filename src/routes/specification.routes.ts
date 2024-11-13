import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCase/createSpecification';

const specificationRoutes = Router();
specificationRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req,res);
});
export { specificationRoutes };
