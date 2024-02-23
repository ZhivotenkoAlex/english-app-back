import { Resolver } from "@nestjs/graphql"

import { AuthService } from "./auth.service"
import { TokenEntity } from "./entities/token.entity"


@Resolver(() => TokenEntity)
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

}