import {UserModel} from "../../domain/models/UserModel";
import {IDeepPartial} from "@steroidsjs/nest/usecases/interfaces/IDeepPartial";
import {TypeOrmTableFromModel} from '@steroidsjs/nest/infrastructure/decorators/typeorm/TypeOrmTableFromModel';

@TypeOrmTableFromModel(UserModel, 'user')
export class UserTable implements IDeepPartial<UserModel> {}
