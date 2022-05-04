import { ImportCategoryController } from './importCategoryController';
import { ImportCategoryUseCase } from './importCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategortyController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategortyController };
