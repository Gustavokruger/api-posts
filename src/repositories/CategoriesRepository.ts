import { EntityRepository, Repository } from 'typeorm';
import Category from "../models/Category";
import { CategoryRequestDTO } from '../services/categories/CreateCategoryService';
@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {

    public async getAll(): Promise<Category[] | null> {
        return await this.find().then(result => result ? result : null)
    }

    public async createCategory({ title }: CategoryRequestDTO): Promise<Category | null> {
        return await this.create({ title });
    }
}


export default CategoriesRepository;
