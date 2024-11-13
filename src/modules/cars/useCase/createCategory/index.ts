import { CategoryRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRespository = CategoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRespository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
