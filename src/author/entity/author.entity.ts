import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { ProductEntity } from '../../product/entity/product.entity';
  
  @Entity({
    name: 'authors',
  })
  export class AuthorEntity {
    @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;
  
    @Column({
      length: 100,
      nullable: false,
    })
    name: string;
  
    @ManyToMany(() => ProductEntity, (product) => product.authors)
    @JoinTable({
      name: 'product_authors',
      joinColumn: { name: 'authorId', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'productId', referencedColumnName: 'id' },
    })
    products: ProductEntity[];
  }
  