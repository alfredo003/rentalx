import { ImportCategoryUseCase } from "./ImportCategoryUsecase";
import { Request,Response } from "express";
class ImportCategoryController
{
    constructor(private importCategoryUseCase:ImportCategoryUseCase){}
    handle(req:Request,res:Response):Response
    {
         const { file } = req;
         this.importCategoryUseCase.execute(file);
         return res.send();

    }
}
export { ImportCategoryController }