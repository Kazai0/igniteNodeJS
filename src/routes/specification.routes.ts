import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRouters = Router();

specificationRouters.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationRouters };
