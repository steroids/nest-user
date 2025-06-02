import {AuthModule} from '@steroidsjs/nest-modules/auth/AuthModule';
import {IAppModuleConfig} from '@steroidsjs/nest/infrastructure/applications/IAppModuleConfig';
import {forwardRef, ModuleMetadata} from '@nestjs/common';
import {IUserService} from "@steroidsjs/nest-modules/user/services/IUserService";
import {UserService} from "../domain/services/UserService";
import {IUserRepository} from "../domain/interfaces/IUserRepository";
import {UserRepository} from "@steroidsjs/nest/infrastructure/tests/app/repositories/UserRepository";
import {UserUpdatePasswordUseCase} from "../usecases/userUpdatePassword/UserUpdatePasswordUseCase";
import {IUserUpdatePasswordUseCase} from "@steroidsjs/nest-modules/user/usecases/IUserUpdatePasswordUseCase";


export default (config: IAppModuleConfig) => ({
    imports: [
        forwardRef(() => AuthModule),
    ],
    providers: [
        {
            provide: IUserService,
            useClass: UserService,
        },
        {
            provide: IUserRepository,
            useClass: UserRepository,
        },
        {
            provide: IUserUpdatePasswordUseCase,
            useClass: UserUpdatePasswordUseCase,
        },
    ],
    exports: [
        IUserService,
        IUserRepository,
        IUserUpdatePasswordUseCase,
    ],
}) as ModuleMetadata;
