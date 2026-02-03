# Храм на честь Трьох святителів на Подолі

Офіційний веб-сайт православного храму на честь святителів Василія Великого, Григорія Богослова та Іоанна Златоуста.

## Технологічний стек

- **Astro 5.x** - фреймворк для створення швидких веб-сайтів
- **AstroWind** - шаблон для Astro
- **Keystatic CMS** - система управління контентом
- **Tailwind CSS** - utility-first CSS фреймворк
- **Vercel** - хостинг-платформа

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

- **posts** - новини та оголошення
- **events** - розклад богослужінь (одноразові та повторювані)
- **sermons** - проповіді
- **saints** - святі покровителі

### Singletons

- **about** - сторінка "Про прихід"
- **contacts** - контактна інформація

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

## Підтримка

Для питань та пропозицій створюйте issue у GitHub репозиторії.

## Ліцензія

MIT

---

Створено з ❤️ для Храму Трьох святителів на Подолі
