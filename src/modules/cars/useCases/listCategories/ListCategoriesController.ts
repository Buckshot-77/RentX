import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }
    handle(request: Request, response: Response) {
        const categoriesList = this.listCategoriesUseCase.execute();

        return response.status(200).json(categoriesList);
    }
}

export { ListCategoriesController };