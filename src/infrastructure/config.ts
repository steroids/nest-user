import {forwardRef} from '@nestjs/common';
import {AuthModule} from '@steroidsjs/nest-modules/auth/AuthModule';

export default {
    module: () => ({
        imports: [
            forwardRef(() => AuthModule),
        ],
    }),
}
