import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategortyController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategortyController };
