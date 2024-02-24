import { Field, ID, ObjectType } from "@nestjs/graphql"
import { UserEntity } from "src/users/entities/users.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@ObjectType({ description: "Token" })
@Entity({
    name: 'tokens',
})
export class TokenEntity {
    @Field(() => ID, { description: 'token id' })
    @PrimaryGeneratedColumn()
    id: number

    @Field({ description: 'refreshToken' })
    @Column()
    refreshToken: string

    @Field(() => UserEntity, { description: 'user' })
    @ManyToOne(() => UserEntity, (user) => user.tokens)
    user: UserEntity
}