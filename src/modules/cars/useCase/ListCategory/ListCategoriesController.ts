import { Request,Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController
{
    constructor(private listCategoriesUse:ListCategoriesUseCase){}
    handle(req:Request,res:Response)
    {
        const all = this.listCategoriesUse.execute();
        return res.json(all);
    }
}

export {ListCategoriesController}