import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";
import Category from "./Category";
import User from "./User";

@Entity('posts')

class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    thumbmail: string;

    @ManyToOne(() => Category, category => category.posts)
    category: Category;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @Column()
    status: string;
}

export default Post;
