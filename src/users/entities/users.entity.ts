import { Field, ID, ObjectType } from "@nestjs/graphql"
import { TokenEntity } from "src/auth/entities/token.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@ObjectType({ description: "User" })
@Entity({
    name: 'users',
})
export class UserEntity {
    @Field(() => ID, { description: 'user id' })
    @PrimaryGeneratedColumn()
    id: string

    @Field({ description: 'email' })
    @Column({ unique: true })
    email: string

    @Field({ description: 'password' })
    @Column()
    password: string

    @Field(() => [TokenEntity], { description: 'tokens' })
    @OneToMany(() => TokenEntity, (token) => token.user)
    tokens: TokenEntity[]
}