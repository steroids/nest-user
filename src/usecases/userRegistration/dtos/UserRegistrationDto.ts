import {ExtendField} from '@steroidsjs/nest/infrastructure/decorators/fields/ExtendField';
import {IntegerField, PasswordField, StringField} from '@steroidsjs/nest/infrastructure/decorators/fields';
import {IUserRegistrationDto} from '@steroidsjs/nest-modules/user/dtos/IUserRegistrationDto';
import {UserModel} from '../../../domain/models/UserModel';

export class UserRegistrationDto implements IUserRegistrationDto {
    @StringField({
        nullable: true,
    })
    login: string;

    @ExtendField(UserModel)
    email: string;

    @ExtendField(UserModel)
    phone: string;

    @PasswordField({
        nullable: true,
    })
    password: string;

    @IntegerField({
        nullable: true,
    })
    authRolesIds: number[];
}
