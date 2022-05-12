import { Specification } from "../../../model/Specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    async execute(): Promise<Specification[]> {
        const categories = await this.specificationsRepository.list();

        return categories;
    }
}

export { ListSpecificationsUseCase };
