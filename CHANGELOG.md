# Steroids nest-user Changelog

## [Unreleased]

[Migration guide](docs/MigrationGuide.md#unreleased)

### Changed

- Добавлена одновременная поддержка NestJS 10 и NestJS 11 в `peerDependencies` для `@nestjs/common` и `@nestjs/core`.
- Среда разработки обновлена до NestJS 11, включая `@nestjs/schematics` и `@nestjs/testing`.
- `ModuleMetadata` теперь импортируется из `@nestjs/common` как type-only import.

## [0.3.0](https://github.com/steroids/nest-user/compare/0.2.1...0.3.0) (2026-07-23)

[Migration guide](docs/MigrationGuide.md#030-2026-07-23)

### Changed

- Форки `@steroidsjs/typeorm` и `@steroidsjs/nest-typeorm` заменены на оригинальные пакеты `typeorm` и `@nestjs/typeorm`.
- `@steroidsjs/nest` обновлён до `5.0.0-beta.1`, а `@steroidsjs/nest-modules` — до `0.1.6`.
- Зависимости NestJS приведены к версиям, совместимым с `@steroidsjs/nest@5.0.0-beta.1`: `@nestjs/common` и `@nestjs/testing` обновлены до `10.4.19`, `@nestjs/schematics` — до `10.2.3`, добавлен `@nestjs/typeorm@11.0.3`.
- `@types/node` обновлён до `22.13.17` в соответствии с минимальной используемой версией Node.js.

## [0.2.1](https://github.com/steroids/nest-user/compare/0.2.0...0.2.1) (2026-01-19)

### Fixes

- Фикс импорта UserRepository в UserModule

## [0.2.0](https://github.com/steroids/nest-user/compare/0.1.2...0.2.0) (2025-12-26)

### Features

- UserUpdatePasswordUseCase провайдится по токену IUserUpdatePasswordUseCase ([#124](https://gitlab.kozhindev.com/steroids/steroids-nest/-/issues/124))

### Fixes
- NestJS вынесен в peerDependencies
- IUserService и IUserRepository подключены в модуль по-умолчанию

## [0.1.2](https://github.com/steroids/nest-user/compare/0.1.1...0.1.2) (2024-02-24)

### Fixes

- Фикс метода UserService.findByLogin (он возвращал любого пользователя c phone=null, если в него передавали строку не в формате телефона)
