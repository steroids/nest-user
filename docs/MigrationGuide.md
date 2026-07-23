# Steroids nest-user Migration Guide

## [Unreleased](../CHANGELOG.md#unreleased)

### Переход с форков TypeORM на оригинальные пакеты

Форки `@steroidsjs/typeorm` и `@steroidsjs/nest-typeorm` больше не используются.
Их необходимо заменить на оригинальные пакеты `typeorm` и `@nestjs/typeorm`.

Удалите старые зависимости и установите новые:

```shell
yarn remove @steroidsjs/typeorm @steroidsjs/nest-typeorm
yarn add typeorm@^1.1.0 @nestjs/typeorm@^11.0.3
```

Обновите импорты:

| Было | Стало |
| --- | --- |
| `@steroidsjs/typeorm` | `typeorm` |
| `@steroidsjs/typeorm/...` | `typeorm/...` |
| `@steroidsjs/nest-typeorm` | `@nestjs/typeorm` |

Например:

```ts
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
```

После замены зависимостей обновите lock-файл и убедитесь, что старые форки больше не устанавливаются транзитивно.

### Обновление NestJS и `@steroidsjs/nest`

Зависимости пакета приведены к версиям, которые требуются `@steroidsjs/nest@5.0.0-beta.1`.
В приложении необходимо использовать совместимые версии NestJS и связанных пакетов:

```json
{
  "dependencies": {
    "@nestjs/common": "^10.4.19",
    "@nestjs/typeorm": "^11.0.3",
    "@steroidsjs/nest": "^5.0.0-beta.1",
    "@steroidsjs/nest-modules": "^0.1.6",
    "typeorm": "^1.1.0"
  },
  "devDependencies": {
    "@nestjs/schematics": "^10.2.3",
    "@nestjs/testing": "^10.4.19",
    "@types/node": "^22.13.17"
  }
}
```

Если приложение использует другие пакеты NestJS, их версии также необходимо привести к требованиям
`@steroidsjs/nest@5.0.0-beta.1`. В частности, `@nestjs/core` и `@nestjs/platform-express`
должны использовать версию `^10.4.19`.

После обновления переустановите зависимости:

```shell
yarn install
```
