import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExisting =
      this.specificationsRepository.findByname(name);

    if (specificationAlreadyExisting) {
      throw new Error("Specification already existing!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
