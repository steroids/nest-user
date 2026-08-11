# Steroids nest-user Migration Guide

## [0.4.0](../CHANGELOG.md#040-2026-08-11) (2026-08-11)

### Поддержка NestJS 11

Новый релиз `@steroidsjs/nest-user` будет одновременно поддерживать NestJS 10 и NestJS 11.
Обновление пакета не требует обязательного перехода на NestJS 11: приложение может сохранить NestJS 10 и совместимые с ним версии остальных зависимостей.

Для перехода приложения на NestJS 11 обновите NestJS-зависимости согласованно:

```json
{
  "dependencies": {
    "@nestjs/common": "^11.1.28",
    "@nestjs/core": "^11.1.28",
    "@nestjs/typeorm": "^11.0.3"
  },
  "devDependencies": {
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.1.28"
  }
}
```

Перед обновлением также необходимо:

1. Обновить `@steroidsjs/nest` до версии с поддержкой NestJS 11.
2. Обновить реализацию auth-модуля, включая `@steroidsjs/nest-auth`, до совместимой с NestJS 11 версии.
3. Проверить `peerDependencies` остальных NestJS- и `@steroidsjs/*`-пакетов приложения.
4. Не смешивать разные major-версии `@nestjs/common`, `@nestjs/core` и `@nestjs/testing`.

`@nestjs/typeorm@^11.0.3` уже поддерживает NestJS 10 и NestJS 11, поэтому отдельное обновление TypeORM-интеграции не требуется. Минимальная версия Node.js для `@steroidsjs/nest-user` остаётся равна 22.

## [0.3.0](../CHANGELOG.md#030-2026-07-23) (2026-07-23)

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
