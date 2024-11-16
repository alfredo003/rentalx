import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUsecase";
const importeCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importeCategoryUseCase);

export {importCategoryController}