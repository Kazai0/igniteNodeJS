import { ICategoriesRepository } from "../../repositories/IcategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExisting = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExisting) {
      throw new Error("Category already existing");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
