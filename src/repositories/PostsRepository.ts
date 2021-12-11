import Category from "../models/Category";
import Post from "../models/Post";

interface CreatePostDTO {
    title: string;
    description: string;
    thumbmail: string;
    category: Category;
    status: string;
}
class PostsRepository {

    constructor() {

    }

    public create({
            title,
            description,
            thumbmail,
            category,
            status}: CreatePostDTO)
            : Post {
                const post = new Post({title, description, thumbmail, category, status});


                return post;
            }

    public getAll(): Post[] {
        const posts: Post[] = [];

        return posts;
    }
}

export default PostsRepository;
