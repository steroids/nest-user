import {CrudService} from '@steroidsjs/nest/usecases/services/CrudService';
import {normalizePhone} from '@steroidsjs/nest/infrastructure/decorators/fields/PhoneField';
import {DataMapper} from '@steroidsjs/nest/usecases/helpers/DataMapper';
import {ISessionService} from '@steroidsjs/nest-modules/auth/services/ISessionService';
import {IUserService} from '@steroidsjs/nest-modules/user/services/IUserService';
import {UserSearchDto} from '../dtos/UserSearchDto';
import {UserSaveDto} from '../dtos/UserSaveDto';
import {UserModel} from '../models/UserModel';
import {IUserRepository} from '../interfaces/IUserRepository';
import {UserRegistrationDto} from '../dtos/UserRegistrationDto';

export class UserService extends CrudService<UserModel,
    UserSearchDto,
    UserSaveDto | UserModel> implements IUserService {
    protected modelClass = UserModel;

    constructor(
        /** UserRepository */
        public repository: IUserRepository,
        public session: ISessionService,
    ) {
        super();
    }

    async findByLogin(login: string): Promise<UserModel> {
        const user = await this.repository.findOne([
            'or',
            {email: login},
            {login},
            {phone: normalizePhone(login)},
        ]);
        return user || null;
    }

    async registration(dto: UserRegistrationDto): Promise<UserModel> {
        const model = DataMapper.create(UserModel, dto);

        if (dto.password) {
            model.passwordHash = await this.session.hashPassword(dto.password);
        }

        return this.create(model);
    }
}
