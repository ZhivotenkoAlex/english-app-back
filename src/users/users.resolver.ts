import { Args, Context, Mutation, Resolver } from "@nestjs/graphql"
import express from "express"

import { UserEntity } from "./entities/users.entities"
import { UsersService } from "./users.service"



@Resolver(() => UserEntity)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }


    @Mutation(() => [UserEntity], {
        name: 'register',
    })
    async register(@Args('email') email: string,
        @Args('password') password: string,
        @Context("req") req: express.Request) {
        try {
            const user = await this.usersService.register(email, password)
            //httpOnly - cannot change on UI, maxAge - 30 days  
            req.res.cookie('refresh', user.refreshToken, {
                maxAge: 30 * 60 * 24 * 60 * 1000,
                httpOnly: true,
            })
            return user
        } catch (e) {
            console.error(e)
        }
    }
}