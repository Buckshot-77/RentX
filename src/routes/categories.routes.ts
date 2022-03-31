import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const doesCategoryExist = categoriesRepository.findByName(name);

    if (doesCategoryExist) {
        return response.status(400).json({
            message: 'A category with the given name already exists.',
        });
    }
    categoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
    const categoriesList = categoriesRepository.list();

    return response.status(200).json(categoriesList);
});

export { categoriesRoutes };
