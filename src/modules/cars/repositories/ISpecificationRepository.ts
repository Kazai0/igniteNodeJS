import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByname(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
