import { Response,Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {

    constructor (private createSpecificationUsecase:CreateSpecificationUseCase){}
    handle(req:Request,res:Response)
    {
         const { name, description } = req.body;

         this.createSpecificationUsecase.execute({ name, description });

         return res.status(201).send();
    }

}

export { CreateSpecificationController}