import { Specification } from '../model/Specification';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): Specification {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }

        const specification = this.specificationsRepository.create({
            name,
            description,
        });

        return specification;
    }
}

export { CreateSpecificationService };
