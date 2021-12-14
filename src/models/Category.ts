import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categories')
class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

}

export default Category;
