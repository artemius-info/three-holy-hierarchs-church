import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { $ as $$Features2 } from '../chunks/Features2_cL4X_kV8.mjs';
import { g as getCollection } from '../chunks/_astro_content_DLSZWzLo.mjs';
export { renderers } from '../renderers.mjs';

const $$Schedule = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u0420\u043E\u0437\u043A\u043B\u0430\u0434 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u044C"
  };
  const allEvents = await getCollection("events");
  const activeEvents = allEvents.filter((event) => event.data.isActive);
  const recurringEvents = activeEvents.filter((event) => event.data.recurrence.discriminant === "recurring").sort((a, b) => {
    const dayA = parseInt(a.data.recurrence.value.dayOfWeek);
    const dayB = parseInt(b.data.recurrence.value.dayOfWeek);
    return dayA - dayB;
  });
  const singleEvents = activeEvents.filter((event) => event.data.recurrence.discriminant === "single").sort((a, b) => {
    const dateA = new Date(a.data.recurrence.value.date);
    const dateB = new Date(b.data.recurrence.value.date);
    return dateA.getTime() - dateB.getTime();
  });
  const daysOfWeek = ["\u041D\u0435\u0434\u0456\u043B\u044F", "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0421\u0435\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440", "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F", "\u0421\u0443\u0431\u043E\u0442\u0430"];
  const eventTypeNames = {
    liturgy: "\u041B\u0456\u0442\u0443\u0440\u0433\u0456\u044F",
    vespers: "\u0412\u0435\u0447\u0456\u0440\u043D\u044F",
    matins: "\u0423\u0442\u0440\u0435\u043D\u044F",
    moleben: "\u041C\u043E\u043B\u0435\u0431\u0435\u043D\u044C",
    panakhyda: "\u041F\u0430\u043D\u0430\u0445\u0438\u0434\u0430",
    akathist: "\u0410\u043A\u0430\u0444\u0456\u0441\u0442",
    confession: "\u0421\u043F\u043E\u0432\u0456\u0434\u044C"
  };
  const regularScheduleItems = recurringEvents.map((event) => {
    const recurrence = event.data.recurrence.value;
    const dayName = daysOfWeek[parseInt(recurrence.dayOfWeek)];
    const typeName = eventTypeNames[event.data.eventType] || event.data.eventType;
    return {
      title: `${dayName} - ${event.data.title}`,
      description: `${typeName} \u043E ${recurrence.time}`,
      icon: "tabler:clock"
    };
  });
  const upcomingEventsItems = singleEvents.slice(0, 5).map((event) => {
    const recurrence = event.data.recurrence.value;
    const date = new Date(recurrence.date);
    const formattedDate = date.toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const typeName = eventTypeNames[event.data.eventType] || event.data.eventType;
    return {
      title: event.data.title,
      description: `${typeName} - ${formattedDate} \u043E ${recurrence.time}`,
      icon: "tabler:calendar-event"
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`
Запрошуємо всіх на спільну молитву у нашому храмі.
${maybeRenderHead()}<br>
Сповідь приймається перед кожним богослужінням.
` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate` <span class="text-accent dark:text-white">Розклад</span> богослужінь
` })}` })}  ${regularScheduleItems.length > 0 && renderTemplate`${renderComponent($$result2, "Features2", $$Features2, { "title": "\u041F\u043E\u0441\u0442\u0456\u0439\u043D\u0438\u0439 \u0440\u043E\u0437\u043A\u043B\u0430\u0434", "subtitle": "\u0429\u043E\u0442\u0438\u0436\u043D\u0435\u0432\u0456 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F", "items": regularScheduleItems })}`} ${upcomingEventsItems.length > 0 && renderTemplate`${renderComponent($$result2, "Features2", $$Features2, { "title": "\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0456 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F", "subtitle": "\u0421\u0432\u044F\u0442\u0430 \u0442\u0430 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456 \u043F\u043E\u0434\u0456\u0457", "items": upcomingEventsItems })}`} <div class="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8"> <h3 class="text-2xl font-bold mb-4">Корисна інформація</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span>Сповідь приймається до та під час богослужінь</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span>Приходьте за 10-15 хвилин до початку богослужіння</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span>Хрещення проводиться за попередньою домовленістю</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span>Для замовлення треб звертайтеся до церковної лавки</span> </li> </ul> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/schedule.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/schedule.astro";
const $$url = "/schedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Schedule,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
