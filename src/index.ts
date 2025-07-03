import {UserModule} from '@steroidsjs/nest-modules/user/UserModule';
import module from './infrastructure/module';
import {IModule} from "@steroidsjs/nest/infrastructure/decorators/Module";

export default {
    rootTarget: UserModule,
    module,
} as IModule;
