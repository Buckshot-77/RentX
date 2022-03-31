import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    try {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(
            categoriesRepository
        );
        createCategoryService.execute({ name, description });

        return response.status(201).send();
    } catch (error: any) {
        return response.status(400).json({ message: error.message });
    }
});

categoriesRoutes.get('/', (request, response) => {
    const categoriesList = categoriesRepository.list();

    return response.status(200).json(categoriesList);
});

export { categoriesRoutes };
