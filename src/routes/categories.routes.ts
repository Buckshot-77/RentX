import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const id = uuidv4();

    const category: Category = {
        id,
        name,
        description,
        created_at: new Date(),
    };

    categories.push(category);

    console.log(categories);
    return response.status(201).send();
});

export { categoriesRoutes };
