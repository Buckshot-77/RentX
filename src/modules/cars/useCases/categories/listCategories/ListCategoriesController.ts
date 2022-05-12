import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }
    async handle(request: Request, response: Response) {
        const categoriesList = await this.listCategoriesUseCase.execute();

        return response.status(200).json(categoriesList);
    }
}

export { ListCategoriesController };
