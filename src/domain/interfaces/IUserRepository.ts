import {ICrudRepository} from '@steroidsjs/nest/usecases/interfaces/ICrudRepository';
import {UserModel} from '../models/UserModel';

export const IUserRepository = 'IUserRepository';

export type IUserRepository = ICrudRepository<UserModel>
