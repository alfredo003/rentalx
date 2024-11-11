import { ISpecificationRepository } from "../repositories/ISpecification";

interface IRequest
{
    name:string;
    description:string
}

class CreateSpecificationService
{
    constructor(private specificationRepository: ISpecificationRepository)
    {

    }
    execute({name,description}:IRequest):void
    {
      const specificationAlreadyExsits = this.specificationRepository.findByName(name);

      if(specificationAlreadyExsits)
      {
        throw new Error("Specification already exists!");
      }
      this.specificationRepository.create({
        name,
        description
      })
    }
}

export { CreateSpecificationService}