import { parse } from "csv-parse";
import fs from "fs";
import { Category } from "../../../model/Category";

import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const stream = fs.createReadStream(file.path);

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<Category[]> {
        const categories = await this.loadCategories(file);
        const results: Category[] = [];
        categories.forEach(async (category) => {
            const { name, description } = category;

            const doesCategoryExist =
                this.categoriesRepository.findByName(name);

            if (!doesCategoryExist) {
                const createdCategory = await this.categoriesRepository.create({
                    name,
                    description,
                });

                results.push(createdCategory);
            }
        });
        return results;
    }
}

export { ImportCategoryUseCase };
