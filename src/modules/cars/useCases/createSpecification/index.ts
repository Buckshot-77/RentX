import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createspecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createspecificationController };
