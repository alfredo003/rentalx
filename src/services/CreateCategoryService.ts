import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest
{
    name:string;
    description:string
}
class CreateCategoryService {
  
  constructor(private categoriesRepository: CategoryRepository) {}
  execute({ description, name }: IRequest):void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('Category already exits!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
