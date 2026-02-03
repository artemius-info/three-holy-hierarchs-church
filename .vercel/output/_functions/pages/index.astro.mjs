import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { $ as $$Features } from '../chunks/Features_DWSZw-30.mjs';
import { $ as $$Content } from '../chunks/Content_DeUNxOwP.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_CimkGtoq.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_BZ-B9GSz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u0425\u0440\u0430\u043C \u043D\u0430 \u0447\u0435\u0441\u0442\u044C \u0422\u0440\u044C\u043E\u0445 \u0441\u0432\u044F\u0442\u0438\u0442\u0435\u043B\u0456\u0432 \u043D\u0430 \u041F\u043E\u0434\u043E\u043B\u0456",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "\u0420\u043E\u0437\u043A\u043B\u0430\u0434 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u044C",
      href: "/schedule",
      icon: "tabler:calendar"
    },
    { text: "\u041F\u0440\u043E \u0445\u0440\u0430\u043C", href: "/about" }
  ], "image": { src: "~/assets/images/default.png", alt: "\u0425\u0440\u0430\u043C \u0422\u0440\u044C\u043E\u0445 \u0441\u0432\u044F\u0442\u0438\u0442\u0435\u043B\u0456\u0432" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="font-semibold">Святителів Василія Великого, Григорія Богослова та Іоанна Златоуста</span> <br>
Вітаємо вас на офіційному сайті нашого приходу. Тут ви знайдете розклад богослужінь, новини храму та духовні матеріали.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Храм на честь <span class="text-accent dark:text-white">Трьох святителів</span> на Подолі
` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "schedule-preview", "title": "\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0456 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F", "subtitle": "\u0417\u0430\u043F\u0440\u043E\u0448\u0443\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u043D\u0430 \u0441\u043F\u0456\u043B\u044C\u043D\u0443 \u043C\u043E\u043B\u0438\u0442\u0432\u0443", "items": [
    {
      title: "\u041D\u0435\u0434\u0456\u043B\u044C\u043D\u0430 \u041B\u0456\u0442\u0443\u0440\u0433\u0456\u044F",
      description: "\u0429\u043E\u043D\u0435\u0434\u0456\u043B\u0456 \u043E 09:00",
      icon: "tabler:church"
    },
    {
      title: "\u0412\u0441\u0435\u043D\u0456\u0447\u043D\u0435 \u0431\u0434\u0456\u043D\u043D\u044F",
      description: "\u0421\u0443\u0431\u043E\u0442\u0438 \u043E 17:00",
      icon: "tabler:candle"
    },
    {
      title: "\u0421\u043F\u043E\u0432\u0456\u0434\u044C",
      description: "\u041F\u0435\u0440\u0435\u0434 \u043A\u043E\u0436\u043D\u0438\u043C \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F\u043C",
      icon: "tabler:rosary"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "\u0421\u0432\u044F\u0442\u0456 \u043F\u043E\u043A\u0440\u043E\u0432\u0438\u0442\u0435\u043B\u0456 \u043D\u0430\u0448\u043E\u0433\u043E \u0445\u0440\u0430\u043C\u0443", "subtitle": "\u0422\u0440\u0438 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u0432\u0447\u0438\u0442\u0435\u043B\u0456 \u0426\u0435\u0440\u043A\u0432\u0438", "isReversed": true, "items": [
    {
      title: "\u0412\u0430\u0441\u0438\u043B\u0456\u0439 \u0412\u0435\u043B\u0438\u043A\u0438\u0439",
      description: "\u0410\u0440\u0445\u0456\u0454\u043F\u0438\u0441\u043A\u043E\u043F \u041A\u0435\u0441\u0430\u0440\u0456\u0457 \u041A\u0430\u043F\u043F\u0430\u0434\u043E\u043A\u0456\u0439\u0441\u044C\u043A\u043E\u0457, \u0431\u043E\u0433\u043E\u0441\u043B\u043E\u0432 \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0442\u043E\u0440 \u0447\u0435\u0440\u043D\u0435\u0446\u0442\u0432\u0430"
    },
    {
      title: "\u0413\u0440\u0438\u0433\u043E\u0440\u0456\u0439 \u0411\u043E\u0433\u043E\u0441\u043B\u043E\u0432",
      description: "\u0410\u0440\u0445\u0456\u0454\u043F\u0438\u0441\u043A\u043E\u043F \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u044C\u043A\u0438\u0439, \u043D\u0430\u0439\u0432\u0438\u0434\u0430\u0442\u043D\u0456\u0448\u0438\u0439 \u0431\u043E\u0433\u043E\u0441\u043B\u043E\u0432 \u0442\u0430 \u043F\u043E\u0435\u0442"
    },
    {
      title: "\u0406\u043E\u0430\u043D\u043D \u0417\u043B\u0430\u0442\u043E\u0443\u0441\u0442",
      description: "\u0410\u0440\u0445\u0456\u0454\u043F\u0438\u0441\u043A\u043E\u043F \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C\u0441\u044C\u043A\u0438\u0439, \u043D\u0430\u0439\u0432\u0438\u0434\u0430\u0442\u043D\u0456\u0448\u0438\u0439 \u043F\u0440\u043E\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043A \u0426\u0435\u0440\u043A\u0432\u0438"
    }
  ], "image": {
    src: "~/assets/images/default.png",
    alt: "\u0422\u0440\u0438 \u0441\u0432\u044F\u0442\u0438\u0442\u0435\u043B\u0456"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`
Собор Трьох святителів встановлено у 1084 році, коли припинилися суперечки про те, кого з них вважати більшим. Церква вшановує їх разом 12 лютого (30 січня за старим стилем).
` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "\u041D\u043E\u0432\u0438\u043D\u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0443", "information": `\u0411\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0456 \u0436\u0438\u0442\u0442\u044F \u043D\u0430\u0448\u043E\u0457 \u043F\u0430\u0440\u0430\u0444\u0456\u0457` })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
      href: "/contacts",
      icon: "tabler:map-pin"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Ми раді вітати всіх, хто прагне молитви та спілкування з Богом.<br>
Київ, Поділ
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Відвідайте наш храм
` })}` })} ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/index.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
