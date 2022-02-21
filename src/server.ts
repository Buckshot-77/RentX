import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

const port = 3333;

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => response.json({ message: 'hello' }));

app.post('/courses', (request, response) => {
    const { name } = request.body;

    return response.json({ name });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
