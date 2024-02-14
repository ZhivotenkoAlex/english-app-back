import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ParsedTitleEntity } from './parsedTitle.entity';

@ObjectType({ description: 'TitleItems' })
@Entity({
  name: 'titleItems',
})
export class TitleItemsEntity {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'w' })
  @Column({ name: 'w' })
  w: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  order: number;

  @Field({ description: 'sentenceId' })
  @ManyToOne(() => ParsedTitleEntity, (item) => item.titleItems)
  titleItem: number;
}
