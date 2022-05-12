import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./importCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        if (file) {
            const results = await this.importCategoryUseCase.execute(file);
            return response.status(201).json(results);
        }

        return response.status(400).json({ message: "File is required!" });
    }
}

export { ImportCategoryController };
