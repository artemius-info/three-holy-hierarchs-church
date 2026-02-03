# Храм на честь Трьох святителів на Подолі

Офіційний веб-сайт православного храму на честь святителів Василія Великого, Григорія Богослова та Іоанна Златоуста.

## Технологічний стек

- **Astro 5.17+** - фреймворк для створення швидких веб-сайтів
- **AstroWind** - шаблон для Astro
- **Keystatic CMS** - система управління контентом (використовує Markdown)
- **Tailwind CSS** - utility-first CSS фреймворк
- **Vercel** - хостинг-платформа (serverless functions)

## Структура сайту

- **Головна** (`/`) - привітання, найближчі богослужіння, останні новини
- **Про прихід** (`/about`) - історія храму, діяльність
- **Розклад богослужінь** (`/schedule`) - календар з повторюваними подіями
- **Новини** (`/news`) - блог з тегами та категоріями
- **Проповіді** (`/sermons`) - тексти проповідей
- **Святі покровителі** (`/saints`) - матеріали про Трьох святителів
- **Контакти** (`/contacts`) - адреса, телефон, карта

## Локальна розробка

### Встановлення залежностей

```bash
npm install
```

### Запуск сервера розробки

```bash
npm run dev
```

Сайт буде доступний за адресою: `http://localhost:4321`

### Доступ до Keystatic CMS

Перейдіть за адресою: `http://localhost:4321/keystatic`

У локальному режимі Keystatic працює без GitHub OAuth.

## Деплой на Vercel

### 1. Налаштування GitHub OAuth для Keystatic

Keystatic потребує GitHub OAuth для роботи в production:

1. Перейдіть на https://github.com/settings/apps/new
2. Заповніть форму:
   - **GitHub App name**: `three-holy-hierarchs-keystatic` (або інше унікальне ім'я)
   - **Homepage URL**: `https://your-site.vercel.app`
   - **Callback URL**: `https://your-site.vercel.app/api/keystatic/github/oauth/callback`
   - **Webhook**: Не потрібен, можна залишити порожнім
   - **Permissions**:
     - Repository permissions:
       - Contents: Read and write
       - Pull requests: Read and write
     - Account permissions: Read-only access to email addresses
3. Натисніть "Create GitHub App"
4. Збережіть:
   - **Client ID**
   - **Client Secret** (згенеруйте, якщо потрібно)
   - **App Slug** (з URL застосунку)

### 2. Налаштування змінних середовища в Vercel

У панелі Vercel додайте змінні середовища:

```
KEYSTATIC_GITHUB_CLIENT_ID=ваш_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET=ваш_client_secret
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=ваш-app-slug
```

### 3. Деплой

```bash
# Переконайтеся, що всі зміни закомічені
git add .
git commit -m "Ready for production"
git push origin main
```

У Vercel:
1. Імпортуйте репозиторій `artemius-info/three-holy-hierarchs-church`
2. Framework Preset: **Astro**
3. Додайте змінні середовища
4. Deploy

## Управління контентом

### Доступ до CMS

Після деплою перейдіть на `https://your-site.vercel.app/keystatic`

Ви зможете:
- Додавати та редагувати новини
- Керувати розкладом богослужінь
- Публікувати проповіді
- Оновлювати інформацію про святих
- Редагувати сторінки "Про нас" та "Контакти"

### Колекції контенту

Всі файли зберігаються у форматі **Markdown (.md)**:

- **posts** (`src/content/posts/`) - новини та оголошення
- **events** (`src/content/events/`) - розклад богослужінь (одноразові та повторювані)
- **sermons** (`src/content/sermons/`) - проповіді
- **saints** (`src/content/saints/`) - святі покровителі (вже створено 3 файли)

### Singletons

- **about** (`src/content/about/`) - сторінка "Про прихід"
- **contacts** (`src/content/contacts/`) - контактна інформація

**Примітка**: Keystatic створює та редагує файли безпосередньо в репозиторії через GitHub API.

## Збірка для production

```bash
npm run build
```

Результат збірки буде у директорії `dist/`.

## Корисні команди

```bash
# Запуск dev сервера
npm run dev

# Збірка сайту
npm run build

# Попередній перегляд збірки
npm run preview

# Перевірка коду
npm run check
```

## Структура проекту

```
/
├── public/              # Статичні файли (favicon, robots.txt)
├── src/
│   ├── assets/         # Зображення та інші assets
│   │   └── images/     # Зображення (posts, saints)
│   ├── components/     # Astro компоненти
│   ├── content/        # Контент для Keystatic
│   │   ├── posts/      # Новини
│   │   ├── events/     # Розклад
│   │   ├── sermons/    # Проповіді
│   │   ├── saints/     # Святі
│   │   ├── about/      # Про прихід
│   │   └── contacts/   # Контакти
│   ├── layouts/        # Layout компоненти
│   ├── pages/          # Сторінки сайту
│   ├── utils/          # Допоміжні функції
│   ├── config.yaml     # Конфігурація сайту
│   └── navigation.ts   # Навігаційне меню
├── keystatic.config.ts # Конфігурація Keystatic CMS
├── astro.config.ts     # Конфігурація Astro
└── tailwind.config.js  # Конфігурація Tailwind CSS
```

## Типові проблеми та рішення

### Помилка з іконками (Icon not found)

**Проблема**: `Unable to locate "tabler:..." icon!`

**Рішення**: Використовуйте тільки базові іконки з Tabler Icons:
- `tabler:book`, `tabler:heart`, `tabler:users`, `tabler:star`
- `tabler:calendar`, `tabler:clock`, `tabler:map-pin`
- `tabler:phone`, `tabler:mail`, `tabler:building`

### Помилка 404 на динамічних сторінках

**Проблема**: Сторінки `/saints/[slug]` не працюють

**Рішення**: Переконайтеся, що додано `export const prerender = true;` на початку файлу

### Помилка при збірці на Vercel

**Проблема**: `Cannot find module 'entry.mjs'`

**Рішення**:
1. Перевірте, що використовуєте останню версію Astro (5.17+)
2. Перевірте імпорт: `import vercel from '@astrojs/vercel'` (без `/serverless`)
3. У `astro.config.ts` має бути `output: 'static'`

### Keystatic не зберігає зміни

**Проблема**: Зміни в Keystatic CMS не зберігаються в production

**Рішення**:
1. Перевірте змінні середовища у Vercel
2. Переконайтеся, що GitHub App встановлено на репозиторій
3. Перевірте права доступу (Contents: Read and write)

### Контент не відображається

**Проблема**: Колекція порожня або не завантажується

**Рішення**:
1. Перевірте, що файли мають розширення `.md` (не `.mdoc`)
2. Видаліть кеш: `rm -rf .astro`
3. Перезапустіть dev сервер

## Підтримка

Для питань та пропозицій створюйте issue у GitHub репозиторії.

**Live Site**: https://three-holy-hierarchs-church.vercel.app

## Ліцензія

MIT

---

Створено з ❤️ для Храму Трьох святителів на Подолі
