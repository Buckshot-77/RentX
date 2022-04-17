import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    try {
        const { name, description } = request.body;

        const createSpecificationService = new CreateSpecificationService(
            specificationsRepository
        );

        const specification = createSpecificationService.execute({
            name,
            description,
        });

        return response.status(201).json(specification);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return response.status(400).json({ message: error.message });
    }
});

specificationsRoutes.get('/', (request, response) => {
    const specifications = specificationsRepository.list();

    return response.status(200).json(specifications);
});

export { specificationsRoutes };
