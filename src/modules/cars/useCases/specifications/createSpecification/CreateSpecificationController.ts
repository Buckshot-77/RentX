import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase // eslint-disable-next-line prettier/prettier
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;

            const specification = await this.createSpecificationUseCase.execute(
                {
                    name,
                    description,
                }
            );

            return response.status(201).json(specification);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export { CreateSpecificationController };
