# Інструкція з деплою на Vercel

## Передумови

1. Аккаунт на [Vercel](https://vercel.com)
2. Аккаунт на [GitHub](https://github.com)
3. Репозиторій вже створено: `artemius-info/three-holy-hierarchs-church`

## Крок 1: Налаштування GitHub OAuth App для Keystatic

Keystatic потребує GitHub OAuth для роботи в production режимі.

### 1.1. Створення GitHub App

1. Перейдіть на https://github.com/settings/apps/new
2. Заповніть форму створення GitHub App:

```
GitHub App name: three-holy-hierarchs-keystatic
Description: Content management for Three Holy Hierarchs Church website
Homepage URL: https://three-holy-hierarchs-church.vercel.app
Callback URL: https://three-holy-hierarchs-church.vercel.app/api/keystatic/github/oauth/callback
```

3. **Webhook**:
   - Зніміть галочку "Active"

4. **Permissions** (Repository permissions):
   - Contents: **Read and write**
   - Pull requests: **Read and write**

5. **Account permissions**:
   - Email addresses: **Read-only**

6. **Where can this GitHub App be installed?**:
   - Виберіть "Only on this account"

7. Натисніть **"Create GitHub App"**

### 1.2. Генерація Client Secret

1. Після створення застосунку перейдіть на вкладку "Client secrets"
2. Натисніть **"Generate a new client secret"**
3. **ВАЖЛИВО**: Збережіть секрет одразу, він більше не відобразиться!

### 1.3. Збереження облікових даних

Збережіть наступні дані (вони знадобляться для Vercel):

```
Client ID: Abc123... (на головній сторінці GitHub App)
Client Secret: abc123xyz... (згенерований на попередньому кроці)
App Slug: three-holy-hierarchs-keystatic (з URL застосунку)
```

### 1.4. Встановлення застосунку на репозиторій

1. На сторінці GitHub App перейдіть на вкладку "Install App"
2. Виберіть ваш аккаунт
3. Виберіть опцію "Only select repositories"
4. Виберіть репозиторій `three-holy-hierarchs-church`
5. Натисніть **"Install"**

## Крок 2: Деплой на Vercel

### 2.1. Імпорт проекту

1. Перейдіть на https://vercel.com/new
2. Виберіть **"Import Git Repository"**
3. Авторизуйтеся через GitHub (якщо ще не авторизовані)
4. Знайдіть репозиторій `artemius-info/three-holy-hierarchs-church`
5. Натисніть **"Import"**

### 2.2. Налаштування проекту

На сторінці налаштування проекту:

**Framework Preset**: Astro (має визначитися автоматично)

**Root Directory**: `./` (залишити за замовчуванням)

**Build Command**: `npm run build` (за замовчуванням)

**Output Directory**: `dist` (за замовчуванням)

**Install Command**: `npm install` (за замовчуванням)

### 2.3. Додавання змінних середовища

У розділі **"Environment Variables"** додайте:

```
KEYSTATIC_GITHUB_CLIENT_ID=ваш_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=ваш_client_secret
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=three-holy-hierarchs-keystatic
```

Натисніть кнопку "Add" після кожної змінної.

**ВАЖЛИВО**: Ці змінні мають бути доступні для всіх середовищ (Production, Preview, Development).

### 2.4. Деплой

1. Натисніть **"Deploy"**
2. Зачекайте завершення деплою (2-3 хвилини)

## Крок 3: Оновлення GitHub App з реальним URL

Після першого деплою Vercel надасть вам реальний URL (наприклад, `three-holy-hierarchs-church.vercel.app`).

1. Поверніться до налаштувань вашого GitHub App: https://github.com/settings/apps
2. Знайдіть `three-holy-hierarchs-keystatic`
3. Оновіть URL:
   - **Homepage URL**: `https://three-holy-hierarchs-church.vercel.app`
   - **Callback URL**: `https://three-holy-hierarchs-church.vercel.app/api/keystatic/github/oauth/callback`
4. Збережіть зміни

## Крок 4: Перевірка

### 4.1. Перевірка сайту

Відкрийте URL вашого сайту: `https://three-holy-hierarchs-church.vercel.app`

Має відобразитися головна сторінка храму.

### 4.2. Перевірка Keystatic

Перейдіть на: `https://three-holy-hierarchs-church.vercel.app/keystatic`

Ви маєте побачити:
1. Сторінку входу через GitHub
2. Після входу - інтерфейс Keystatic з колекціями

Якщо все працює - вітаємо! Сайт успішно задеплоєно.

## Крок 5: Налаштування custom domain (опціонально)

### 5.1. У панелі Vercel

1. Перейдіть до налаштувань проекту
2. Виберіть вкладку **"Domains"**
3. Додайте ваш домен (наприклад, `three-hierarchs.church`)
4. Слідуйте інструкціям Vercel для налаштування DNS

### 5.2. Оновлення GitHub App

Після налаштування custom domain оновіть URL в GitHub App:

```
Homepage URL: https://three-hierarchs.church
Callback URL: https://three-hierarchs.church/api/keystatic/github/oauth/callback
```

## Типові проблеми та їх вирішення

### Помилка "OAuth callback mismatch"

**Причина**: URL в GitHub App не співпадає з реальним URL сайту.

**Вирішення**: Перевірте, що Callback URL в GitHub App точно співпадає з URL вашого сайту.

### Keystatic не може зберегти зміни

**Причина**: GitHub App не має достатніх прав.

**Вирішення**: Перевірте, що в GitHub App встановлено:
- Contents: Read and write
- Pull requests: Read and write

### Сайт не збирається

**Причина**: Відсутні змінні середовища або неправильна конфігурація.

**Вирішення**:
1. Перевірте, що всі змінні середовища додані в Vercel
2. Перевірте логи збірки в Vercel Dashboard

## Подальше використання

### Автоматичний деплой

Кожен push до гілки `main` автоматично викликає новий деплой на Vercel.

### Редагування контенту

1. Перейдіть на `https://your-site.vercel.app/keystatic`
2. Авторизуйтеся через GitHub
3. Редагуйте контент
4. Зміни автоматично створюють pull request в GitHub
5. Після merge PR - автоматично деплояться на сайт

### Моніторинг

Vercel надає:
- Analytics (кількість відвідувачів)
- Логи помилок
- Performance insights

Доступно в панелі Vercel Dashboard.

## Контакти

При виникненні проблем створіть issue у GitHub репозиторії:
https://github.com/artemius-info/three-holy-hierarchs-church/issues
