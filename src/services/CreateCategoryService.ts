import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: CategoriesRepository) { }

    execute({ name, description }: IRequest): void {
        const doesCategoryExist = this.categoriesRepository.findByName(name);

        if (doesCategoryExist) {
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
