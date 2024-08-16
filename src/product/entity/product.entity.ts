import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
  } from 'typeorm';
  import { ProductType } from '../../enums/product-type.enum';
  import { AuthorEntity } from '../../author/entity/author.entity';
  
  @Entity({
    name: 'products',
  })
  export class ProductEntity {
    @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;
  
    @Column({
      length: 100,
      nullable: false,
    })
    title: string;
  
    @Column({
      type: 'text',
      nullable: true,
    })
    description?: string;
  
    @Column({
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: false,
    })
    price: number;
  
    @Column({
      type: 'enum',
      enum: ProductType,
      nullable: false,
    })
    category: ProductType;
  
    @ManyToMany(() => AuthorEntity, (author) => author.products)
    authors: AuthorEntity[];
  
    @Column({
      length: 255,
      nullable: true,
    })
    fileUrl?: string;
  
    @CreateDateColumn()
    createdAt?: Date;
  
    @UpdateDateColumn()
    updatedAt?: Date;
  }
  
  
  