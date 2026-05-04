---
id: architecture-bpmn
title: BPMN диаграммы
sidebar_label: BPMN
---

# BPMN диаграммы процессов

## Процесс генерации недельного плана

### Описание процесса

Процесс генерации плана включает следующие этапы:

1. Пользователь инициирует генерацию плана
2. Система получает задачи пользователя из БД
3. Система получает дедлайны из LMS (если подключено)
4. Система получает события из календаря
5. Для каждой задачи определяется приоритет через DMN-модуль
6. Формируется черновик плана
7. Проверяется нагрузка по дням
8. При перегрузе формируются рекомендации и план пересобирается
9. План отображается пользователю на подтверждение
10. Пользователь подтверждает или редактирует план

### BPMN 2.0 диаграмма

![BPMN диаграмма](/img/diagrams/bpmn-process.svg)

Ссылка на исходный файл: [https://demo.bpmn.io](https://demo.bpmn.io)

## DMN модель приоритизации

### Входные данные

| Вход | Тип | Значения |
|------|-----|----------|
| urgency | string | high, medium, low |
| effort | string | large, medium, small |
| hasDeadline | boolean | true, false |

### Выходные данные

| Выход | Тип | Значения |
|-------|-----|----------|
| priority | string | high, medium, low |

### Таблица решений

| Срочность | Трудоемкость | Есть дедлайн | Приоритет | Пояснение |
|-----------|--------------|--------------|-----------|-----------|
| high | - | - | high | Высокая срочность всегда дает высокий приоритет |
| medium | large | true | high | Средняя срочность при большой трудоемкости и дедлайне |
| medium | - | true | medium | Средняя срочность с фиксированным дедлайном |
| medium | small | false | medium | Средняя срочность без дедлайна и с малой трудоемкостью |
| low | - | true | medium | Низкая срочность при наличии дедлайна повышается |
| low | - | false | low | Низкая срочность без дедлайна сохраняет низкий приоритет |
| - | - | - | low | Правило по умолчанию |

### DMN XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/"
             id="Definitions_TaskPriority"
             name="TaskPriorityModel">

  <inputData id="InputData_urgency" name="urgency"/>
  <inputData id="InputData_effort" name="effort"/>
  <inputData id="InputData_deadline" name="hasDeadline"/>

  <decision id="Decision_TaskPriority" name="Определение приоритета задачи">
    <informationRequirement id="IR_urgency">
      <requiredInput href="#InputData_urgency"/>
    </informationRequirement>
    <informationRequirement id="IR_effort">
      <requiredInput href="#InputData_effort"/>
    </informationRequirement>
    <informationRequirement id="IR_deadline">
      <requiredInput href="#InputData_deadline"/>
    </informationRequirement>
    
    <decisionTable id="DecisionTable_TaskPriority" hitPolicy="FIRST">
      <!-- Таблица решений определена выше -->
    </decisionTable>
  </decision>
</definitions>
```
