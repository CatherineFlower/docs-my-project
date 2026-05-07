---
sidebar_position: 3
title: AsyncAPI
---

# AsyncAPI

## Выбранное асинхронное взаимодействие

Асинхронным сценарием является генерация недельного плана. Пользователь отправляет HTTP-запрос на генерацию, а затем получает статусы выполнения через WebSocket.

## Почему WebSocket

WebSocket подходит, потому что клиенту нужно получать изменение статуса в реальном времени: `queued`, `processing`, `completed`, `failed`. Сообщения небольшие, polling не нужен.

## Запуск генерации

```http
POST /plans/generate
```

Сервер принимает запрос и возвращает `generationId`. После этого клиент подписывается на канал статусов.

## Канал статусов

```text
/ws/plans/generation-status
```

## Формат сообщения

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

## Событие завершения

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

## Ошибка генерации

```json
{
  "eventType": "plan.generation.failed",
  "generationId": "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  "userId": "9d373b67-4429-45fc-bb3b-217f42a5c0cc",
  "status": "failed",
  "errorCode": "PLAN_GENERATION_ERROR",
  "message": "Не удалось распределить все задачи по свободным слотам",
  "timestamp": "2026-04-20T12:30:00Z"
}
```
