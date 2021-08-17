import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const specificationRouters = Router();

const specificationRepository = new SpecificationRepository();

specificationRouters.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationRouters };
