import { Specification } from '../../model/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute(): Specification[] {
        const categories = this.specificationsRepository.list();

        return categories;
    }
}

export { ListSpecificationsUseCase };
