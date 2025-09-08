
---

# 📌 To-Do List (Laravel + Blade)

Простое приложение для управления задачами (**To-Do List**), реализованное на **Laravel**.
Поддерживает как **REST API** (для тестирования в Postman), так и **фронтенд-интерфейс** (Blade + HTML/CSS) для работы через браузер.

---

## 🚀 Возможности

* ✅ Создание задачи (title, description, status/state).
* 📋 Просмотр списка всех задач.
* 🔍 Просмотр задачи по ID.
* ✏️ Редактирование задачи.
* ❌ Удаление задачи.
* 🛡️ Базовая валидация.
* 💾 Работа с MySQL (через XAMPP).

---

## 🛠 Установка и запуск

### 1️⃣ Клонирование проекта

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-rest
```

### 2️⃣ Установка зависимостей

```bash
composer install
```

### 3️⃣ Настройка окружения

Скопируйте `.env.example` → `.env`:

```bash
cp .env.example .env
```

Сгенерируйте ключ:

```bash
php artisan key:generate
```

Настройте подключение к базе MySQL (XAMPP) в `.env`:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo_db
DB_USERNAME=root
DB_PASSWORD=
```

### 4️⃣ Миграции и сидинг

Создайте таблицы и наполните тестовыми данными:

```bash
php artisan migrate --seed
```

### 5️⃣ Запуск сервера

```bash
php artisan serve
```

Проект будет доступен по адресу:
👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

## 📬 Тестирование через Postman

### 🔹 Эндпоинты API

* **Создать задачу:**
  `POST /api/tasks`
  Тело запроса:

  ```json
  {
    "title": "Купить продукты",
    "description": "Молоко, хлеб, сыр",
    "state": false
  }
  ```

* **Получить все задачи:**
  `GET /api/tasks`

* **Получить одну задачу:**
  `GET /api/tasks/{id}`

* **Обновить задачу:**
  `PUT /api/tasks/{id}`
  Пример:

  ```json
  {
    "title": "Сходить в спортзал",
    "description": "Тренировка спины и ног",
    "state": true
  }
  ```

* **Удалить задачу:**
  `DELETE /api/tasks/{id}`

👉 Пример запроса (обновление задачи):

```
PUT http://127.0.0.1:8000/api/tasks/101
```

Body:

```json
{
  "title": "testerererersds",
  "state": false,
  "description": "ptas nihil. Culpa alias ea qu"
}
```

---

## 🎨 Тестирование через фронтенд

Также доступен интерфейс на **Blade + HTML/CSS**.

1. Запустите сервер:

   ```bash
   php artisan serve
   ```

1. Запустить фронт:

   ```bash
   npm run dev
   ```
2. Перейдите в браузере по адресу:
   👉 [http://127.0.0.1:8000/tasks](http://127.0.0.1:8000/tasks)

Фронтенд позволяет:

* Добавлять задачи.
* Просматривать список задач.
* Редактировать задачи.
* Удалять задачи.

---
