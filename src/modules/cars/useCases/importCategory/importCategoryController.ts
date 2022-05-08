import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;

        if (file) {
            this.importCategoryUseCase.execute(file);
            return response.send();
        }

        return response.status(400).json({ message: 'File is required!' });
    }
}

export { ImportCategoryController };
