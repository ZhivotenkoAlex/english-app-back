import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import jwt from 'jsonwebtoken'
import { UserEntity } from "src/users/entities/users.entities"
import { Repository } from "typeorm"

import { TokenEntity } from "./entities/token.entity"

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private tokenRepository: Repository<TokenEntity>,
    ) {

    }

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: '15m',
        })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: '30d',
        })
        return { accessToken, refreshToken }
    }

    async saveToken(userId: string, refreshToken: string) {
        const tokenData = await this.tokenRepository.findOne({ where: { user: { id: userId } } })
        if (tokenData) {
            return await this.tokenRepository.update(tokenData.id, { refreshToken })
        }

        return this.tokenRepository.create({ user: { id: userId }, refreshToken })
    }


}