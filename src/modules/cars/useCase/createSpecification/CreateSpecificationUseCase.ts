import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExsits =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExsits) {
      throw new Error('Specification already exists!');
    }
    this.specificationRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
