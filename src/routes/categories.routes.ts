import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/categories/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/categories/listCategories";
import { importCategortyController } from "../modules/cars/useCases/categories/importCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", async (request, response) => {
    return await createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
    return await listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    async (request, response) => {
        return await importCategortyController.handle(request, response);
    }
);

export { categoriesRoutes };
