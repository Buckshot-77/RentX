import { Router } from 'express';

const categoriesRoutes = Router();

const categories: object[] = [];

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    categories.push({ name, description });

    console.log(categories);
    return response.status(201).send();
});

export { categoriesRoutes };
