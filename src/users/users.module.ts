import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from 'src/auth/auth.module'
import { AuthService } from 'src/auth/auth.service'

import { UserEntity } from './entities/users.entities'
import { UsersResolver } from './users.resolver'
import { UsersService } from './users.service'

@Module({
    providers: [UsersService, UsersResolver, AuthService],
    imports: [
        forwardRef(() => AuthModule), // forwardRef - to avoid circular dependency
        TypeOrmModule.forFeature([
            UserEntity,
        ]),
    ],
    exports: [TypeOrmModule],
})
export class UsersModule { }
