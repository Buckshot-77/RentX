import { prismaClient } from "../../../../../database";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificatonsUseCase";

const specificationsRepository =
    SpecificationsRepository.getInstance(prismaClient);

const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
);

export { listSpecificationsController };
