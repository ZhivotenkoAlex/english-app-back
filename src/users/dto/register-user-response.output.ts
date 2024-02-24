import { Field, ObjectType } from "@nestjs/graphql"

import { UserEntity } from "../entities/users.entity"


@ObjectType({ description: "Registration response" })
export class RegisterResponse {
    @Field(() => UserEntity, { description: 'User information' })
    user: UserEntity

    @Field({ description: 'Access token' })
    accessToken: string

    @Field({ description: 'Refresh token' })
    refreshToken: string
}