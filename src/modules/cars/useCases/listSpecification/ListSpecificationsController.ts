import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificatonsUseCase";

class ListSpecificationsController {
    // eslint-disable-next-line prettier/prettier
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) { }
    handle(request: Request, response: Response) {
        const specificationsList = this.listSpecificationsUseCase.execute();

        return response.status(200).json(specificationsList);
    }
}

export { ListSpecificationsController };
