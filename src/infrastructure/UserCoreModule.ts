import {DynamicModule, forwardRef, Module} from '@nestjs/common';
import {UserModule} from '@steroidsjs/nest-modules/user/UserModule';
import {AuthModule} from '@steroidsjs/nest-modules/auth/AuthModule';

@Module({})
export class UserCoreModule {
    static forRoot(options): DynamicModule | any {
        return {
            module: UserModule,
            ...options,
            imports: [
                forwardRef(() => AuthModule),
                ...options.imports,
            ],
        };
    }
}
