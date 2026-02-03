import { config, collection, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'artemius-info/three-holy-hierarchs-church',
  },

  collections: {
    posts: collection({
      label: 'Новини',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Заголовок' } }),
        excerpt: fields.text({
          label: 'Короткий опис',
          multiline: true,
        }),
        image: fields.image({
          label: 'Головне зображення',
          directory: 'src/assets/images/posts',
          publicPath: '~/assets/images/posts/',
        }),
        publishDate: fields.date({
          label: 'Дата публікації',
          defaultValue: { kind: 'today' },
        }),
        category: fields.select({
          label: 'Категорія',
          options: [
            { label: 'Новини', value: 'news' },
            { label: 'Оголошення', value: 'announcements' },
            { label: 'Свята', value: 'holidays' },
            { label: 'Життя приходу', value: 'parish-life' },
          ],
          defaultValue: 'news',
        }),
        tags: fields.array(
          fields.text({ label: 'Тег' }),
          {
            label: 'Теги',
            itemLabel: (props) => props.value,
          }
        ),
        draft: fields.checkbox({
          label: 'Чернетка',
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: 'Зміст',
        }),
      },
    }),

    events: collection({
      label: 'Розклад богослужінь',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Назва події' } }),
        eventType: fields.select({
          label: 'Тип богослужіння',
          options: [
            { label: 'Літургія', value: 'liturgy' },
            { label: 'Вечірня', value: 'vespers' },
            { label: 'Утреня', value: 'matins' },
            { label: 'Молебень', value: 'moleben' },
            { label: 'Панахида', value: 'panakhyda' },
            { label: 'Акафіст', value: 'akathist' },
            { label: 'Сповідь', value: 'confession' },
          ],
          defaultValue: 'liturgy',
        }),
        recurrence: fields.conditional(
          fields.select({
            label: 'Тип події',
            options: [
              { label: 'Одноразова подія', value: 'single' },
              { label: 'Повторювана подія', value: 'recurring' },
            ],
            defaultValue: 'single',
          }),
          {
            single: fields.object({
              date: fields.date({ label: 'Дата' }),
              time: fields.text({ label: 'Час (наприклад, 09:00)' }),
            }),
            recurring: fields.object({
              dayOfWeek: fields.select({
                label: 'День тижня',
                options: [
                  { label: 'Неділя', value: '0' },
                  { label: 'Понеділок', value: '1' },
                  { label: 'Вівторок', value: '2' },
                  { label: 'Середа', value: '3' },
                  { label: 'Четвер', value: '4' },
                  { label: "П'ятниця", value: '5' },
                  { label: 'Субота', value: '6' },
                ],
                defaultValue: '0',
              }),
              time: fields.text({ label: 'Час (наприклад, 09:00)' }),
            }),
          }
        ),
        isActive: fields.checkbox({
          label: 'Активна подія',
          defaultValue: true,
        }),
        description: fields.markdoc({
          label: 'Опис',
        }),
      },
    }),

    sermons: collection({
      label: 'Проповіді',
      slugField: 'title',
      path: 'src/content/sermons/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Заголовок проповіді' } }),
        preacher: fields.text({
          label: 'Проповідник',
        }),
        date: fields.date({
          label: 'Дата проповіді',
          defaultValue: { kind: 'today' },
        }),
        occasion: fields.text({
          label: 'Привід (свято, подія)',
        }),
        bibleReading: fields.text({
          label: 'Біблійне читання',
          multiline: true,
        }),
        tags: fields.array(
          fields.text({ label: 'Тег' }),
          {
            label: 'Теги',
            itemLabel: (props) => props.value,
          }
        ),
        content: fields.markdoc({
          label: 'Текст проповіді',
        }),
      },
    }),

    saints: collection({
      label: 'Святі покровителі',
      slugField: 'name',
      path: 'src/content/saints/*',
      format: { contentField: 'biography' },
      schema: {
        name: fields.slug({ name: { label: "Ім'я святого" } }),
        title: fields.text({
          label: 'Титул',
        }),
        feastDay: fields.text({
          label: 'День пам\'яті',
        }),
        icon: fields.image({
          label: 'Ікона',
          directory: 'src/assets/images/saints',
          publicPath: '~/assets/images/saints/',
        }),
        shortDescription: fields.text({
          label: 'Короткий опис',
          multiline: true,
        }),
        quotes: fields.array(
          fields.object({
            text: fields.text({ label: 'Текст цитати', multiline: true }),
            source: fields.text({ label: 'Джерело' }),
          }),
          {
            label: 'Цитати',
            itemLabel: (props) => props.fields.source.value || 'Цитата',
          }
        ),
        biography: fields.markdoc({
          label: 'Біографія',
        }),
      },
    }),
  },

  singletons: {
    about: singleton({
      label: 'Про прихід',
      path: 'src/content/about',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Заголовок' }),
        heroImage: fields.image({
          label: 'Головне зображення',
          directory: 'src/assets/images',
          publicPath: '~/assets/images/',
        }),
        history: fields.text({
          label: 'Коротка історія',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Повний опис',
        }),
      },
    }),

    contacts: singleton({
      label: 'Контакти',
      path: 'src/content/contacts',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Заголовок' }),
        address: fields.text({
          label: 'Адреса',
          multiline: true,
        }),
        phone: fields.text({ label: 'Телефон' }),
        email: fields.text({ label: 'Email' }),
        mapLink: fields.text({
          label: 'Посилання на карту (Google Maps)',
        }),
        schedule: fields.text({
          label: 'Графік роботи',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Додаткова інформація',
        }),
      },
    }),
  },
});
