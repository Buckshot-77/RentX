import { PrismaClient } from "@prisma/client";
import { Category } from "../../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private static INSTANCE: CategoriesRepository;

    private constructor(private prismaClient: PrismaClient) {}

    public static getInstance(
        prismaClient: PrismaClient
    ): CategoriesRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new CategoriesRepository(prismaClient);
        }
        return this.INSTANCE;
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = await this.prismaClient.category.create({
            data: {
                name,
                description,
            },
        });

        return category;
    }

    async list(): Promise<Category[]> {
        const categories = await this.prismaClient.category.findMany();

        return categories;
    }

    async findByName(name: string): Promise<Category | null> {
        const category = await this.prismaClient.category.findFirst({
            where: {
                name: name,
            },
        });

        return category;
    }
}

export { CategoriesRepository };
