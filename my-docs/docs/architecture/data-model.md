---
id: architecture-data-model
title: Модель данных
sidebar_label: Модель данных
---

# Модель данных

## Концептуальная модель

Основные сущности системы:

- **User** — пользователь системы (студент)
- **Task** — учебная задача с дедлайном и приоритетом
- **Event** — событие календаря (пара, встреча)
- **Plan** — недельный план пользователя
- **PlannedTask** — связь задачи с конкретным планом и датой
- **UserSettings** — настройки пользователя
- **ActivityLog** — логи активности для аналитики

## Логическая модель

### users

| Поле | Тип | Описание |
|------|-----|----------|
| user_id | uuid | Первичный ключ |
| full_name | varchar(150) | ФИО пользователя |
| email | varchar(255) | Email (уникальный) |
| password_hash | varchar(255) | Хеш пароля |
| university | varchar(255) | Название вуза |
| created_at | timestamptz | Дата создания |
| updated_at | timestamptz | Дата обновления |

### tasks

| Поле | Тип | Описание |
|------|-----|----------|
| task_id | uuid | Первичный ключ |
| user_id | uuid | Внешний ключ на users |
| title | varchar(255) | Название задачи |
| subject | varchar(150) | Предмет |
| description | text | Описание |
| due_date | date | Дедлайн |
| estimated_minutes | int | Оценка времени в минутах |
| priority | varchar(10) | Приоритет (low/medium/high) |
| status | varchar(20) | Статус (active/completed) |
| source_type | varchar(20) | Источник (manual/lms) |

### calendar_events

| Поле | Тип | Описание |
|------|-----|----------|
| event_id | uuid | Первичный ключ |
| user_id | uuid | Внешний ключ на users |
| title | varchar(255) | Название события |
| location | varchar(255) | Место проведения |
| start_at | timestamptz | Начало |
| end_at | timestamptz | Конец |
| type | varchar(30) | Тип события |

### plans

| Поле | Тип | Описание |
|------|-----|----------|
| plan_id | uuid | Первичный ключ |
| user_id | uuid | Внешний ключ на users |
| week_start_date | date | Начало недели |
| week_end_date | date | Конец недели |
| progress_percent | smallint | Прогресс выполнения (0-100) |
| status | varchar(20) | Статус плана |
| generation_id | uuid | ID процесса генерации |
| generation_status | varchar(20) | Статус генерации |

### planned_tasks

| Поле | Тип | Описание |
|------|-----|----------|
| planned_task_id | uuid | Первичный ключ |
| plan_id | uuid | Внешний ключ на plans |
| task_id | uuid | Внешний ключ на tasks |
| planned_date | date | Запланированная дата |
| start_time | time | Время начала |
| end_time | time | Время окончания |
| sort_order | smallint | Порядок отображения |
| task_title_snapshot | varchar(255) | Снимок названия задачи |
| task_priority_snapshot | varchar(10) | Снимок приоритета |

### user_settings

| Поле | Тип | Описание |
|------|-----|----------|
| settings_id | uuid | Первичный ключ |
| user_id | uuid | Внешний ключ на users (уникальный) |
| notifications_enabled | boolean | Уведомления включены |
| language | varchar(5) | Язык (ru/en) |
| theme | varchar(20) | Тема (light/dark) |

### activity_logs

| Поле | Тип | Описание |
|------|-----|----------|
| log_id | uuid | Первичный ключ |
| user_id | uuid | Внешний ключ на users |
| event_type | varchar(100) | Тип события |
| payload | json | Дополнительные данные |
| created_at | timestamptz | Дата события |

## ER-диаграмма

```
users ──┬── user_settings (1:1)
        ├── tasks (1:M)
        ├── calendar_events (1:M)
        ├── plans (1:M)
        └── activity_logs (1:M)

plans ──└── planned_tasks (1:M)
tasks ──┘── planned_tasks (1:M)
```

## Индексы

| Таблица | Поля | Тип |
|---------|------|-----|
| tasks | user_id, due_date, status, priority | B-tree |
| calendar_events | user_id, start_at | B-tree |
| plans | user_id, (user_id, week_start_date) unique | B-tree |
| planned_tasks | plan_id, task_id, planned_date | B-tree |
| activity_logs | user_id, created_at | B-tree |
