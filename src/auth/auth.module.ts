import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from 'src/users/users.module'

import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { TokenEntity } from './entities/token.entity'

@Module({
    providers: [AuthResolver, AuthService],
    imports: [
        forwardRef(() => UsersModule), // forwardRef - to avoid circular dependency
        TypeOrmModule.forFeature([
            TokenEntity,
        ]),
    ],
})
export class AuthModule { }
