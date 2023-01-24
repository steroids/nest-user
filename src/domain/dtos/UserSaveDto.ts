import {ExtendField} from '@steroidsjs/nest/infrastructure/decorators/fields/ExtendField';
import {StringField} from '@steroidsjs/nest/infrastructure/decorators/fields';
import {UserModel} from '../models/UserModel';

export class UserSaveDto {
    @ExtendField(UserModel)
    id: number;

    @ExtendField(UserModel)
    phone: string;

    @ExtendField(UserModel)
    email: string;

    @StringField({
        nullable: true,
        min: 6,
        minConstraintMessage: 'Длина пароля должна составлять не менее 6 символов',
    })
    password: string;
}
