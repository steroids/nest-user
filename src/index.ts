import {UserModule} from '@steroidsjs/nest-modules/user/UserModule';
import module from './infrastructure/module';

export default {
    rootTarget: UserModule,
    module,
};
