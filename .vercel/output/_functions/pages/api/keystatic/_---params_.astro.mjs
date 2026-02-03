import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, singleton, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "github",
    repo: "artemius-info/three-holy-hierarchs-church"
  },
  collections: {
    posts: collection({
      label: "Новини",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок" } }),
        excerpt: fields.text({
          label: "Короткий опис",
          multiline: true
        }),
        image: fields.image({
          label: "Головне зображення",
          directory: "src/assets/images/posts",
          publicPath: "~/assets/images/posts/"
        }),
        publishDate: fields.date({
          label: "Дата публікації",
          defaultValue: { kind: "today" }
        }),
        category: fields.select({
          label: "Категорія",
          options: [
            { label: "Новини", value: "news" },
            { label: "Оголошення", value: "announcements" },
            { label: "Свята", value: "holidays" },
            { label: "Життя приходу", value: "parish-life" }
          ],
          defaultValue: "news"
        }),
        tags: fields.array(
          fields.text({ label: "Тег" }),
          {
            label: "Теги",
            itemLabel: (props) => props.value
          }
        ),
        draft: fields.checkbox({
          label: "Чернетка",
          defaultValue: false
        }),
        content: fields.markdoc({
          label: "Зміст"
        })
      }
    }),
    events: collection({
      label: "Розклад богослужінь",
      slugField: "title",
      path: "src/content/events/*",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({ name: { label: "Назва події" } }),
        eventType: fields.select({
          label: "Тип богослужіння",
          options: [
            { label: "Літургія", value: "liturgy" },
            { label: "Вечірня", value: "vespers" },
            { label: "Утреня", value: "matins" },
            { label: "Молебень", value: "moleben" },
            { label: "Панахида", value: "panakhyda" },
            { label: "Акафіст", value: "akathist" },
            { label: "Сповідь", value: "confession" }
          ],
          defaultValue: "liturgy"
        }),
        recurrence: fields.conditional(
          fields.select({
            label: "Тип події",
            options: [
              { label: "Одноразова подія", value: "single" },
              { label: "Повторювана подія", value: "recurring" }
            ],
            defaultValue: "single"
          }),
          {
            single: fields.object({
              date: fields.date({ label: "Дата" }),
              time: fields.text({ label: "Час (наприклад, 09:00)" })
            }),
            recurring: fields.object({
              dayOfWeek: fields.select({
                label: "День тижня",
                options: [
                  { label: "Неділя", value: "0" },
                  { label: "Понеділок", value: "1" },
                  { label: "Вівторок", value: "2" },
                  { label: "Середа", value: "3" },
                  { label: "Четвер", value: "4" },
                  { label: "П'ятниця", value: "5" },
                  { label: "Субота", value: "6" }
                ],
                defaultValue: "0"
              }),
              time: fields.text({ label: "Час (наприклад, 09:00)" })
            })
          }
        ),
        isActive: fields.checkbox({
          label: "Активна подія",
          defaultValue: true
        }),
        description: fields.markdoc({
          label: "Опис"
        })
      }
    }),
    sermons: collection({
      label: "Проповіді",
      slugField: "title",
      path: "src/content/sermons/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Заголовок проповіді" } }),
        preacher: fields.text({
          label: "Проповідник"
        }),
        date: fields.date({
          label: "Дата проповіді",
          defaultValue: { kind: "today" }
        }),
        occasion: fields.text({
          label: "Привід (свято, подія)"
        }),
        bibleReading: fields.text({
          label: "Біблійне читання",
          multiline: true
        }),
        tags: fields.array(
          fields.text({ label: "Тег" }),
          {
            label: "Теги",
            itemLabel: (props) => props.value
          }
        ),
        content: fields.markdoc({
          label: "Текст проповіді"
        })
      }
    }),
    saints: collection({
      label: "Святі покровителі",
      slugField: "name",
      path: "src/content/saints/*",
      format: { contentField: "biography" },
      schema: {
        name: fields.slug({ name: { label: "Ім'я святого" } }),
        title: fields.text({
          label: "Титул"
        }),
        feastDay: fields.text({
          label: "День пам'яті"
        }),
        icon: fields.image({
          label: "Ікона",
          directory: "src/assets/images/saints",
          publicPath: "~/assets/images/saints/"
        }),
        shortDescription: fields.text({
          label: "Короткий опис",
          multiline: true
        }),
        quotes: fields.array(
          fields.object({
            text: fields.text({ label: "Текст цитати", multiline: true }),
            source: fields.text({ label: "Джерело" })
          }),
          {
            label: "Цитати",
            itemLabel: (props) => props.fields.source.value || "Цитата"
          }
        ),
        biography: fields.markdoc({
          label: "Біографія"
        })
      }
    })
  },
  singletons: {
    about: singleton({
      label: "Про прихід",
      path: "src/content/about",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Заголовок" }),
        heroImage: fields.image({
          label: "Головне зображення",
          directory: "src/assets/images",
          publicPath: "~/assets/images/"
        }),
        history: fields.text({
          label: "Коротка історія",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Повний опис"
        })
      }
    }),
    contacts: singleton({
      label: "Контакти",
      path: "src/content/contacts",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Заголовок" }),
        address: fields.text({
          label: "Адреса",
          multiline: true
        }),
        phone: fields.text({ label: "Телефон" }),
        email: fields.text({ label: "Email" }),
        mapLink: fields.text({
          label: "Посилання на карту (Google Maps)"
        }),
        schedule: fields.text({
          label: "Графік роботи",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Додаткова інформація"
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
