import { uuid } from "uuidv4";

class Category {
    id: string;
    title: string;

    constructor({title}: Omit<Category, 'id'>) {
        this.id = uuid();
        this.title = title
    }
}

export default Category;
