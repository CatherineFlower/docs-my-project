---
sidebar_position: 2
title: AsyncAPI и WebSocket
---

# AsyncAPI и WebSocket

Асинхронное взаимодействие используется для генерации недельного плана. Эта операция может занимать больше времени, чем обычный REST-запрос, потому что система объединяет задачи, дедлайны, события календаря, рассчитывает приоритеты и проверяет перегрузку.

Исходный AsyncAPI-файл: [`/static/api/asyncapi.yaml`](/api/asyncapi.yaml)

## Технология

Для уведомления клиента используется WebSocket. Он подходит для передачи статуса в реальном времени и не требует постоянного polling со стороны клиента.

## Запуск генерации

**Endpoint:** `POST /plans/generate`.

Клиент отправляет `taskIds` и `eventIds`. Сервер принимает запрос, создаёт `generationId` и запускает фоновую генерацию.

## Канал статусов

**Channel:** `/ws/plans/generation-status`.

Возможные статусы: `queued`, `processing`, `completed`, `failed`.

## Состав сообщения

| Поле | Назначение |
|---|---|
| eventType | Тип события генерации |
| generationId | Идентификатор генерации |
| userId | Идентификатор пользователя |
| status | Текущий статус |
| progress | Процент выполнения |
| planId | Идентификатор готового плана |
| errorCode | Код ошибки |
| message | Текстовое описание |
| timestamp | Время события |

## Пример статуса выполнения

```json
{
  "eventType": "plan.generation.processing",
  "generationId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "userId": "9d373b67-4429-45fc-bb3b-217f42a5c0cc",
  "status": "processing",
  "progress": 45,
  "message": "План формируется",
  "timestamp": "2026-04-20T12:25:00Z"
}
```

## Пример успешного завершения

```json
{
  "eventType": "plan.generation.completed",
  "generationId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "userId": "9d373b67-4429-45fc-bb3b-217f42a5c0cc",
  "status": "completed",
  "progress": 100,
  "planId": "550e8400-e29b-41d4-a716-446655440000",
  "message": "План успешно сформирован",
  "timestamp": "2026-04-20T12:30:00Z"
}
```
