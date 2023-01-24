import {
    PrimaryKeyField,
    PhoneField,
    EmailField,
} from '@steroidsjs/nest/infrastructure/decorators/fields';
import {UserModel as UserModelBase} from '@steroidsjs/nest-modules/user/models/UserModel';

/**
 * Пользователь системы
 */
export class UserModel extends UserModelBase {
    @PrimaryKeyField()
    id: number;

    @PhoneField({
        label: 'Телефон',
        unique: true,
        nullable: true,
        max: 20,
    })
    phone: string;

    @EmailField({
        label: 'Email',
        nullable: true,
        unique: true,
    })
    email: string;
}
