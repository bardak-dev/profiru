import {BaseEntity,BeforeInsert,Column,CreateDateColumn,Entity,PrimaryColumn,UpdateDateColumn} from 'typeorm';
import cuid                                                                                    from 'cuid';
import {Field,GraphQLISODateTime,ID,ObjectType}                                                from 'type-graphql';

@Entity('News')
@ObjectType()
export class News extends BaseEntity{
  @PrimaryColumn({
    primary:true,
    unique:true
  })
  @Field(() => ID)
  id!: string;
  @CreateDateColumn({
    type:Date,
    precision:3,
    readonly:true
  })
  @Field(() => GraphQLISODateTime)
  createdAt!: Date;
  @UpdateDateColumn({
    type:Date,
    precision:3,
    readonly:true
  })
  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
  @Column({nullable:true})
  @Field({nullable:true})
  title: string;
  @Column({nullable:true})
  @Field({nullable:true})
  description: string;
  @Column({nullable:true})
  @Field()
  image: string;
  @BeforeInsert()
  generateId(){
    this.id=cuid();
  }
}
