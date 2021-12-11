import { uuid } from "uuidv4";
import Post from "./Post";


class User {
    id: string;
    username :string;
    email: string;
    password: string;
    posts: Post[];

    constructor({username, email, password, posts }: Omit<User, 'id'>) {
        this.id = uuid();
        this.username = username;
        this.email = email;
        this.password = password;
        this.posts = posts;
    }
}

export default User;
