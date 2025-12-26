# Steroids nest-user Changelog

## [0.2.0](https://github.com/steroids/nest-user/compare/0.1.2...0.2.0) (2024-12-26)

### Features

- UserUpdatePasswordUseCase провайдится по токену IUserUpdatePasswordUseCase ([#124](https://gitlab.kozhindev.com/steroids/steroids-nest/-/issues/124))

### Fixes
- NestJS вынесен в peerDependencies
- IUserService и IUserRepository подключены в модуль по-умолчанию

## [0.1.2](https://github.com/steroids/nest-user/compare/0.1.1...0.1.2) (2024-02-24)

### Fixes

- Фикс метода UserService.findByLogin (он возвращал любого пользователя c phone=null, если в него передавали строку не в формате телефона)
