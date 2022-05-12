import { PrismaClient } from "@prisma/client";
import { Specification } from "../../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private static INSTANCE: SpecificationsRepository;

    private constructor(private prismaClient: PrismaClient) {}

    public static getInstance(
        prismaClient: PrismaClient
    ): SpecificationsRepository {
        if (!this.INSTANCE) {
            this.INSTANCE = new SpecificationsRepository(prismaClient);
        }
        return this.INSTANCE;
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = await this.prismaClient.specification.create({
            data: {
                name,
                description,
            },
        });

        return specification;
    }

    async findByName(name: string): Promise<Specification | null> {
        const specification = await this.prismaClient.specification.findFirst({
            where: {
                name: name,
            },
        });

        return specification;
    }

    async list(): Promise<Specification[]> {
        return await this.prismaClient.specification.findMany();
    }
}

export { SpecificationsRepository };
