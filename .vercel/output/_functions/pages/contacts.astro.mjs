import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { $ as $$Contact } from '../chunks/Contact_BMunTST6.mjs';
import { $ as $$Features2 } from '../chunks/Features2_cL4X_kV8.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Будемо раді відповісти на ваші запитання та бачити вас у нашому храмі
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-accent dark:text-white">Контакти</span> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u042F\u043A \u0437 \u043D\u0430\u043C\u0438 \u0437\u0432'\u044F\u0437\u0430\u0442\u0438\u0441\u044F", "items": [
    {
      title: "\u0410\u0434\u0440\u0435\u0441\u0430",
      description: "\u043C. \u041A\u0438\u0457\u0432, \u041F\u043E\u0434\u0456\u043B<br />(\u0442\u043E\u0447\u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u0430)",
      icon: "tabler:map-pin"
    },
    {
      title: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
      description: "+380 (XX) XXX-XX-XX<br />(\u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u043E)",
      icon: "tabler:phone"
    },
    {
      title: "Email",
      description: "temple@three-hierarchs.church<br />(\u0431\u0443\u0434\u0435 \u0434\u043E\u0434\u0430\u043D\u043E)",
      icon: "tabler:mail"
    },
    {
      title: "\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438",
      description: "\u0429\u043E\u0434\u043D\u044F \u043F\u0456\u0434 \u0447\u0430\u0441 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u044C<br />\u0426\u0435\u0440\u043A\u043E\u0432\u043D\u0430 \u043B\u0430\u0432\u043A\u0430: 8:00 - 18:00",
      icon: "tabler:clock"
    }
  ] })}  ${renderComponent($$result2, "ContactUs", $$Contact, { "id": "form", "title": "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C", "subtitle": "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0444\u043E\u0440\u043C\u0443, \u0456 \u043C\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C\u043E \u0432\u0430\u043C \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C", "inputs": [
    {
      type: "text",
      name: "name",
      label: "\u0406\u043C'\u044F"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "textarea": {
    label: "\u041F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F",
    name: "message"
  }, "disclaimer": {
    label: "\u041D\u0430\u0434\u0441\u0438\u043B\u0430\u044E\u0447\u0438 \u0444\u043E\u0440\u043C\u0443, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u043D\u0430\u0448\u043E\u044E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456."
  }, "description": "\u041C\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 1-2 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432." })}  <div class="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16"> <div class="rounded-lg overflow-hidden shadow-lg"> <div class="bg-slate-100 dark:bg-slate-800 h-96 flex items-center justify-center"> <p class="text-slate-600 dark:text-slate-400">
Карта буде додана після налаштування Google Maps
</p> </div> </div> </div>  <div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8"> <h3 class="text-2xl font-bold mb-4">Як дістатися</h3> <ul class="space-y-3"> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span><strong>Метро:</strong> станція Контрактова площа</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span><strong>Автобус:</strong> маршрути будуть додані</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span><strong>Трамвай:</strong> маршрути будуть додані</span> </li> <li class="flex items-start"> <span class="text-accent mr-2">•</span> <span><strong>Парковка:</strong> інформація буде додана</span> </li> </ul> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/contacts.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/contacts.astro";
const $$url = "/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
