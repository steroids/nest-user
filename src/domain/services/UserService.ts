import {CrudService} from '@steroidsjs/nest/usecases/services/CrudService';
import {normalizePhone} from '@steroidsjs/nest/infrastructure/decorators/fields/PhoneField';
import {IUserService} from '@steroidsjs/nest-modules/user/services/IUserService';
import {ICondition} from '@steroidsjs/nest/infrastructure/helpers/typeORM/ConditionHelperTypeORM';
import {UserSearchDto} from '../dtos/UserSearchDto';
import {UserSaveDto} from '../dtos/UserSaveDto';
import {UserModel} from '../models/UserModel';
import {IUserRepository} from '../interfaces/IUserRepository';
import {Inject} from "@nestjs/common";

export class UserService extends CrudService<UserModel,
    UserSearchDto,
    UserSaveDto | UserModel> implements IUserService {
    protected modelClass = UserModel;

    constructor(
        /** UserRepository */
        @Inject(IUserRepository)
        public repository: IUserRepository,
    ) {
        super();
    }

    async findByLogin(login: string): Promise<UserModel> {
        const phone = normalizePhone(login);
        const user = await this.repository.findOne([
            'or',
            {email: login},
            {login},
            !!phone && {phone},
        ].filter(Boolean) as ICondition[]);
        return user || null;
    }
}
