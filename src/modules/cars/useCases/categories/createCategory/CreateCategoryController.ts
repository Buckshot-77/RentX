import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    // eslint-disable-next-line prettier/prettier
    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const { name, description } = request.body;

            const category = await this.createCategoryUseCase.execute({
                name,
                description,
            });

            return response.status(201).json(category);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export { CreateCategoryController };
