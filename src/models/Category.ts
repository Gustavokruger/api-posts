import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import Post from './Post';
import User from './User';

@Entity('categories')
class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @OneToMany(() => Post, post => post.category)
    posts: Post[];

    @ManyToOne(() => User, user => user.categories)
    user: User;

}

export default Category;
