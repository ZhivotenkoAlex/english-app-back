import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string
}
