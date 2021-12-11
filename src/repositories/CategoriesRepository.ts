import Category from "../models/Category";

interface CreateCategoryDTO {
    title: string;
}
class CategoriesRepository {

    constructor() {

    }

    public create({title}: CreateCategoryDTO) {
        const category = new Category({title});

        //

        return category;
    }

    public getAll(): Category[] {
        const categories: Category[] = [];

        return categories;
    }
}

export default CategoriesRepository;
