import Category from "../../models/Category";
import CategoriesRepository from "../../repositories/CategoriesRepository";

interface CategoryRequestDTO {
    title: string;
}
class CreateCategoryService {

    private repository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.repository = categoriesRepository;
    }
    public execute({ title }: CategoryRequestDTO): Category {
        return this.repository.create({ title });
    }
}

export default CreateCategoryService;
