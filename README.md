# nonames_dev

## Описание проекта

**НЕ СПИТСЯ** — это веб-приложение для поиска досуговых мероприятий.  
Оно позволяет пользователям находить интересные события, такие как концерты, выставки, мастер-классы и другие активности, доступные в их городе.

### Основной функционал:
- Просмотр списка доступных мероприятий с фильтрацией по категории, дате и местоположению.
- Подробная информация о каждом мероприятии, включая описание, дату, время и место проведения.
- Регистрация и авторизация пользователей для персонализации опыта.
- Административная панель для добавления и редактирования мероприятий.

Проект состоит из двух частей: **backend** и **frontend**.  
- **Backend** реализует REST API для управления данными и взаимодействия с базой данных.  
- **Frontend** — это одностраничное приложение (SPA), созданное с использованием Angular, для взаимодействия с пользователем.

## Стек технологий

### Backend:
- **Node.js** — серверная платформа.
- **PostreSQL** — база данных.
- **Swagger** — для документирования API.

### Frontend:
- **Angular** — фреймворк для создания SPA.
- **TypeScript** — язык программирования для разработки фронтенда.
- **Taiga UI** — UX/UI библиотека для Angular.
- **Angular CLI** — для управления проектом.

## Инструкции по запуску

### Запуск Backend

1. Перейдите в директорию `backend`:
   ```bash
   cd backend
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите сервер:
   ```bash
   node index.js
   ```
4. Сервер будет доступен по адресу `http://localhost:3000`.

### Запуск Frontend

1. Перейдите в директорию `nespitsya`:
   ```bash
   cd nespitsya
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите локальный сервер разработки:
   ```bash
   ng serve
   ```
4. Откройте браузер и перейдите по адресу `http://localhost:4200`.

## Swagger-документация

Документация API доступна по адресу `http://localhost:3000/api-docs` после запуска backend-сервера.

## Дополнительная информация

Для получения дополнительной информации о работе с Angular CLI посетите [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
