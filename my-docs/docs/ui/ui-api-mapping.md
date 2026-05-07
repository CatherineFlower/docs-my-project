---
sidebar_position: 3
title: Связь экранов и API
---

# Связь экранов и API

| Экран | Элемент UI | Endpoint | Метод | Назначение |
| --- | --- | --- | --- | --- |
| `/login` | Кнопка «Войти» | `/auth/login` | POST | Авторизация |
| `/register` | Кнопка «Зарегистрироваться» | `/auth/register` | POST | Создание аккаунта |
| `/home` | Приветствие | `/users/me` | GET | Получение пользователя |
| `/home` | Задачи на сегодня | `/tasks?date=today` | GET | Получение задач на текущий день |
| `/home` | Текущий план | `/plans/weekly` | GET | Получение недельного плана |
| `/tasks` | Список задач | `/tasks` | GET | Получение всех задач |
| `/tasks` | Фильтры | `/tasks?filter=...` | GET | Фильтрация задач |
| `/calendar` | Календарь | `/calendar/events` | GET | Получение событий |
| `/generate-plan` | Список задач | `/tasks` | GET | Выбор задач |
| `/generate-plan` | Список событий | `/calendar/events` | GET | Выбор событий |
| `/generate-plan` | Кнопка «Сгенерировать» | `/plans/generate` | POST | Генерация плана |
| `/weekly-plan` | План | `/plans/weekly` | GET | Получение плана |
| `/weekly-plan` | Кнопка «Сохранить» | `/plans/weekly` | PUT | Сохранение плана |
| `/edit-plan` | Список задач по дням | `/plans/weekly` | GET | Получение текущего плана |
| `/edit-plan` | Кнопка «Сохранить» | `/plans/weekly` | PUT | Обновление плана |
| `/profile` | Данные пользователя | `/users/profile` | GET | Получение профиля |
| `/profile` | Настройки | `/users/profile` | PATCH | Обновление настроек |
| `/profile` | Кнопка «Выход» | `/auth/logout` | POST | Завершение сессии |
