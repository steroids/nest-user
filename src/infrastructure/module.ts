import {AuthModule} from '@steroidsjs/nest-modules/auth/AuthModule';
import {IAppModuleConfig} from '@steroidsjs/nest/infrastructure/applications/IAppModuleConfig';
import {forwardRef} from '@nestjs/common';

export default (config: IAppModuleConfig) => ({
    imports: [
        forwardRef(() => AuthModule),
    ],
    providers: [],
    exports: [],
});
