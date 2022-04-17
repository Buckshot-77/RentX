import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { createspecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (request, response) => {
    return createspecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
    const specifications = specificationsRepository.list();

    return response.status(200).json(specifications);
});

export { specificationsRoutes };
