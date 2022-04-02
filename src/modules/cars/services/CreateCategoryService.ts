import { Category } from '../model/Category';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest): Category {
        const doesCategoryExist = this.categoriesRepository.findByName(name);

        if (doesCategoryExist) {
            throw new Error('Category already exists!');
        }
        const category = this.categoriesRepository.create({
            name,
            description,
        });

        return category;
    }
}

export { CreateCategoryService };
