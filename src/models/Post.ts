import { uuid } from "uuidv4";
import Category from "./Category";



class Post {
    id: string;
    title: string;
    description: string;
    thumbmail: string;
    category: Category;
    status: string;

    constructor({
        title,
        description,
        thumbmail,
        category,
        status
    }: Omit<Post, 'id'>) {
        this.id = uuid();
        this.title = title;
        this.description = description;
        this.thumbmail = thumbmail;
        this.category = category;
        this.status = status
    }
}

export default Post;
