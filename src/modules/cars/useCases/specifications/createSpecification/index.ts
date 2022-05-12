import { prismaClient } from "../../../../../database";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository =
    SpecificationsRepository.getInstance(prismaClient);

const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createspecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createspecificationController };
