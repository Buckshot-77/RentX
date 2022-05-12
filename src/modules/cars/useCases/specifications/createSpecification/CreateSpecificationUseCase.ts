import { Specification } from "../../../model/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    async execute({ name, description }: IRequest): Promise<Specification> {
        const specification = await this.specificationsRepository.create({
            name,
            description,
        });

        return specification;
    }
}

export { CreateSpecificationUseCase };
