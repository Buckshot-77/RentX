import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoriesRepository) { }

    async execute({ name, description }: IRequest): Promise<Category> {
        const category = this.categoriesRepository.create({
            name,
            description,
        });

        return category;
    }
}

export { CreateCategoryUseCase };
