import { DataMapper } from '@steroidsjs/nest/usecases/helpers/DataMapper';
import { ISessionService } from '@steroidsjs/nest-modules/auth/services/ISessionService';
import { IUserRegistrationUseCase } from '@steroidsjs/nest-modules/user/usecases/IUserRegistrationUseCase';
import { IUserService } from '@steroidsjs/nest-modules/user/services/IUserService';
import { UserModel } from '../../domain/models/UserModel';
import { UserRegistrationDto } from './dtos/UserRegistrationDto';

export class UserRegistrationUseCase implements IUserRegistrationUseCase {
    constructor(
        private readonly sessionService: ISessionService,
        private readonly userService: IUserService,
    ) {}

    public async handle(dto: UserRegistrationDto) {
        const model = DataMapper.create(UserModel, dto);

        if (dto.password) {
            model.passwordHash = await this.sessionService.hashPassword(dto.password);
        }

        return this.userService.create(model);
    }
}
