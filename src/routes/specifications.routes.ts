import { Router } from "express";

import { createspecificationController } from "../modules/cars/useCases/specifications/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/specifications/listSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", async (request, response) => {
    return await createspecificationController.handle(request, response);
});

specificationsRoutes.get("/", async (request, response) => {
    return await listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
