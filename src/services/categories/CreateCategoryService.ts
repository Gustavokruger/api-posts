import { getCustomRepository } from "typeorm";
import Category from "../../models/Category";
import CategoriesRepository from "../../repositories/CategoriesRepository";

export interface CategoryRequestDTO {
    title: string;
}
class CreateCategoryService {

    public async execute({ title }: CategoryRequestDTO): Promise<Category> {
        const categoriesRepository = getCustomRepository(CategoriesRepository);
        const entry = categoriesRepository.create({ title });

        await categoriesRepository.save(entry);

        return entry;
    }
}

export default CreateCategoryService;
