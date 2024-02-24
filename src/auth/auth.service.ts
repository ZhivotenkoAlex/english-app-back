import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import * as jwt from 'jsonwebtoken'
import { Repository } from "typeorm"

import { TokenEntity } from "./entities/token.entity"

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(TokenEntity)
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
        const tokenData = await this.tokenRepository.findOne({
            where: { user: { id: userId } },
            relations: ['user'],
        })
        if (tokenData) {
            return await this.tokenRepository.update(tokenData.id, { refreshToken })
        }

        return this.tokenRepository.create({ user: { id: userId }, refreshToken })
    }


}