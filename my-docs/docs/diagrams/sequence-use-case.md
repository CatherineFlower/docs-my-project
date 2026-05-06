---
sidebar_position: 2
title: Sequence и Use Case
---

# Sequence и Use Case

## Sequence diagram

Диаграмма последовательности описывает сценарий формирования недельного учебного плана.

![Sequence diagram](/img/sequence-diagram.svg)

PlantUML-файл: [`/static/diagrams/sequence-weekly-plan.puml`](/diagrams/sequence-weekly-plan.puml)

```plantuml
@startuml
title Формирование недельного учебного плана

actor "Студент" as Student
boundary "Веб-интерфейс" as UI
control "Сервис планирования" as Planner
database "БД задач" as DB
participant "LMS вуза" as LMS
participant "Календарь студента" as Calendar
participant "DMN-модуль\nприоритизации" as DMN

Student -> UI : Запросить недельный план
UI -> Planner : createWeeklyPlan(studentId)
Planner -> DB : Получить задачи пользователя
DB --> Planner : Список задач
Planner -> LMS : Получить дедлайны из LMS
LMS --> Planner : Список дедлайнов
Planner -> Calendar : Получить события календаря
Calendar --> Planner : Список событий
Planner -> Planner : Объединить задачи и события

loop Для каждой задачи
    Planner -> DMN : Определить приоритет
    DMN --> Planner : Результат приоритизации
end

Planner -> Planner : Сформировать черновик плана
Planner -> Planner : Проверить нагрузку по дням
Planner --> UI : Сформированный недельный план
UI -> Student : Показать план на подтверждение
@enduml
```

## Use Case diagram

Диаграмма вариантов использования показывает взаимодействие студента, LMS и календаря с системой.

![Use Case diagram](/img/use-case-diagram.png)

PlantUML-файл: [`/static/diagrams/use-case-weekly-plan.puml`](/diagrams/use-case-weekly-plan.puml)

Ключевой сценарий — «Сформировать недельный план». Он включает импорт дедлайнов из LMS, получение событий календаря, определение приоритета задач и проверку перегруза по дням. Ручная корректировка и сохранение плана расширяют основной сценарий.

## Draw.io

Для выполнения требования по draw.io в проект добавлен файл: [`/static/diagrams/planning-flow.drawio`](/diagrams/planning-flow.drawio). Его можно открыть в diagrams.net или через VS Code-расширение Draw.io Integration.
