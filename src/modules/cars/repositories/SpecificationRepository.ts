import { Specification } from "../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specifications);
  }

  findByname(name: string): Specification {
    const specification = this.specifications.find(
      specifications => specifications.name === name,
    );
    return specification;
  }
}

export { SpecificationRepository };
