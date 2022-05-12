import { prismaClient } from "../../../../../database";
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance(prismaClient);
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
);

export { createCategoryController };
