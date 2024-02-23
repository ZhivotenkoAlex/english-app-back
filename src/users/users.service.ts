import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import bcrypt from 'bcrypt'
import { AuthService } from "src/auth/auth.service"
import { Repository } from "typeorm"

import { UserEntity } from "./entities/users.entities"


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private readonly authService: AuthService,
    ) { }

    async register(email: string, password: string) {
        const candidate = await this.usersRepository.findOne({ where: { email } })

        if (candidate) {
            throw new Error('User with such email already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 3)

        const user = this.usersRepository.create({ email, password: hashedPassword })

        const tokens = this.authService.generateTokens({ id: user.id, email: user.email })
        await this.authService.saveToken(user.id, tokens.refreshToken)
        return {
            ...tokens,
            user,
        }
    }

    async login() {
    }

    async logout() {
    }

    async refresh() {
    }
}