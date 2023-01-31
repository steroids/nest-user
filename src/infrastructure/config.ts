import {AuthModule} from '@steroidsjs/nest-modules/auth/AuthModule';
import {UserModule} from '@steroidsjs/nest-modules/user/UserModule';
import {IAppModuleConfig} from '@steroidsjs/nest/infrastructure/applications/IAppModuleConfig';
import {forwardRef} from '@nestjs/common';

export default {
    rootTarget: UserModule,
    module: (config: IAppModuleConfig) => ({
        imports: [
            forwardRef(() => AuthModule),
        ],
        providers: [],
        exports: [],
    }),
};
