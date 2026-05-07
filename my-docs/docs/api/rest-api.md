---
sidebar_position: 2
title: REST API
---

# REST API

## Подход к проектированию

API использует ресурсы `/tasks`, `/plans`, `/calendar`, `/users` и `/auth`. Для операций применяются стандартные HTTP-методы: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.

## Авторизация

Для защищённых endpoint используется схема Bearer JWT.

```http
Authorization: Bearer <accessToken>
```

## Основные endpoints

| Endpoint | Метод | Назначение |
| --- | --- | --- |
| `/auth/login` | POST | Авторизация пользователя |
| `/auth/register` | POST | Регистрация пользователя |
| `/auth/logout` | POST | Выход из системы |
| `/users/me` | GET | Получение текущего пользователя |
| `/users/profile` | GET | Получение профиля |
| `/users/profile` | PATCH | Обновление настроек |
| `/tasks` | GET | Получение списка задач |
| `/calendar/events` | GET | Получение событий календаря |
| `/plans/generate` | POST | Генерация недельного плана |
| `/plans/weekly` | GET | Получение недельного плана |
| `/plans/weekly` | PUT | Сохранение или обновление плана |

## Пример запроса генерации плана

```json
{
  "taskIds": [
    "4f5fcf2d-4f04-4db6-a5fc-52ca7ce58bcb",
    "e8c13f9c-7342-4f12-9a0b-e3a0cb2ea754"
  ],
  "eventIds": [
    "e2ca99ba-4252-4f1b-a546-23a2b7f1d1e2"
  ]
}
```

## Файл спецификации

Полная спецификация находится в файле [`openapi.yaml`](openapi.yaml).
