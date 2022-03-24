import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories: object[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;
    const id = uuidv4();

    const category = { id, name, description };

    categories.push(category);

    console.log(categories);
    return response.status(201).send();
});

export { categoriesRoutes };
