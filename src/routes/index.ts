import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRouters } from "./specification.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRouters);

export { router };