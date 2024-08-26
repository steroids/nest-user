import { ContextDto } from '@steroidsjs/nest/usecases/dtos/ContextDto';
import { DataMapper } from '@steroidsjs/nest/usecases/helpers/DataMapper';
import { IUserService } from '@steroidsjs/nest-modules/user/services/IUserService';
import { IUserUpdatePasswordUseCase } from '@steroidsjs/nest-modules/user/usecases/IUserUpdatePasswordUseCase';
import { ISessionService } from '@steroidsjs/nest-modules/auth/services/ISessionService';
import { UserSaveDto } from '../../domain/dtos/UserSaveDto';

export class UserUpdatePasswordUseCase implements IUserUpdatePasswordUseCase {
    constructor(
        private readonly userService: IUserService,
        private readonly sessionService: ISessionService,
    ) {}

    public async handle(userId: number, password: string, context: ContextDto) {
        const userSaveDto = DataMapper.create(UserSaveDto, {
            passwordHash: await this.sessionService.hashPassword(password),
        });

        await this.userService.update(userId, userSaveDto, context);
    }
}
