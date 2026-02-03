import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { $ as $$Content } from '../chunks/Content_DeUNxOwP.mjs';
import { $ as $$Features2 } from '../chunks/Features2_cL4X_kV8.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u041F\u0440\u043E \u0445\u0440\u0430\u043C"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/default.png",
    alt: "\u0425\u0440\u0430\u043C \u0422\u0440\u044C\u043E\u0445 \u0441\u0432\u044F\u0442\u0438\u0442\u0435\u043B\u0456\u0432"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Храм на честь Трьох святителів на Подолі — православна громада,
      присвячена пам'яті великих учителів Церкви
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Історія ${maybeRenderHead()}<span class="text-accent dark:text-white">нашого храму</span> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "\u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F",
      description: "\u0414\u0443\u0445\u043E\u0432\u043D\u0435 \u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043F\u0430\u0440\u0430\u0444\u0456\u044F\u043D \u0443 \u0457\u0445\u043D\u044C\u043E\u043C\u0443 \u0448\u043B\u044F\u0445\u0443 \u0434\u043E \u0411\u043E\u0433\u0430 \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F, \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0442\u0430 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0443."
    },
    {
      title: "\u041D\u0430\u0448\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456",
      description: "\u0412\u0456\u0440\u0430, \u043B\u044E\u0431\u043E\u0432, \u0441\u043C\u0438\u0440\u0435\u043D\u043D\u044F, \u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F \u0431\u043B\u0438\u0436\u043D\u044C\u043E\u043C\u0443 \u0442\u0430 \u0432\u0456\u0440\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u0441\u043B\u0430\u0432\u043D\u0438\u043C \u0442\u0440\u0430\u0434\u0438\u0446\u0456\u044F\u043C."
    },
    {
      title: "\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430",
      description: "\u041C\u0438 \u043F\u0440\u0430\u0433\u043D\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0442\u0435\u043F\u043B\u0435 \u0441\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0449\u0435, \u0434\u0435 \u043A\u043E\u0436\u0435\u043D \u043C\u043E\u0436\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 \u0434\u0443\u0445\u043E\u0432\u043D\u0443 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0443 \u0442\u0430 \u0431\u0440\u0430\u0442\u0435\u0440\u0441\u0442\u0432\u043E."
    }
  ], "image": {
    src: "~/assets/images/default.png",
    alt: "\u0425\u0440\u0430\u043C \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Про наш прихід
</h3>
Наш храм є духовним домом для всіх, хто прагне молитви та богопізнання.
      Ми продовжуємо багату традицію православної віри, черпаючи натхнення від наших святих покровителів —
      Трьох святителів.
` })}` })}  <div class="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16"> <div class="prose prose-lg dark:prose-invert max-w-none"> <h2>Історія храму</h2> <p>
Наш храм названо на честь трьох великих вчителів Церкви: Василія Великого,
        Григорія Богослова та Іоанна Златоуста. Ці святителі жили у IV столітті та
        зробили неоціненний внесок у богослов'я, літургійне життя та організацію Церкви.
</p> <p>
Їхнє спільне свято встановлено у 1084 році, коли припинилися суперечки про те,
        кого з них вважати більшим. Церква вшановує їх разом, підкреслюючи єдність у
        різноманітті дарів Святого Духа.
</p> <p>
Детальна історія нашого приходу буде додана.
</p> </div> </div>  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\u0414\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043D\u0430\u0448\u043E\u0433\u043E \u0445\u0440\u0430\u043C\u0443", "subtitle": "\u0427\u0438\u043C \u043C\u0438 \u0437\u0430\u0439\u043C\u0430\u0454\u043C\u043E\u0441\u044F", "items": [
    {
      title: "\u0411\u043E\u0433\u043E\u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F",
      description: "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u0442\u0443\u0440\u0433\u0456\u0457, \u0432\u0435\u0447\u0456\u0440\u043D\u0456 \u0442\u0430 \u0440\u0430\u043D\u043A\u043E\u0432\u0456 \u0441\u043B\u0443\u0436\u0431\u0438 \u0437\u0430 \u043F\u0440\u0430\u0432\u043E\u0441\u043B\u0430\u0432\u043D\u0438\u043C \u0441\u0442\u0430\u0442\u0443\u0442\u043E\u043C",
      icon: "tabler:church"
    },
    {
      title: "\u0422\u0430\u0457\u043D\u0441\u0442\u0432\u0430",
      description: "\u0425\u0440\u0435\u0449\u0435\u043D\u043D\u044F, \u0432\u0456\u043D\u0447\u0430\u043D\u043D\u044F, \u0441\u043F\u043E\u0432\u0456\u0434\u044C, \u043F\u0440\u0438\u0447\u0430\u0441\u0442\u044F \u0442\u0430 \u0456\u043D\u0448\u0456 \u0446\u0435\u0440\u043A\u043E\u0432\u043D\u0456 \u0442\u0430\u0457\u043D\u0441\u0442\u0432\u0430",
      icon: "tabler:heart-handshake"
    },
    {
      title: "\u0414\u0443\u0445\u043E\u0432\u043D\u0430 \u043E\u0441\u0432\u0456\u0442\u0430",
      description: "\u041D\u0435\u0434\u0456\u043B\u044C\u043D\u0430 \u0448\u043A\u043E\u043B\u0430 \u0434\u043B\u044F \u0434\u0456\u0442\u0435\u0439, \u0431\u0456\u0431\u043B\u0456\u0439\u043D\u0456 \u0443\u0440\u043E\u043A\u0438, \u043A\u0430\u0442\u0435\u0445\u0438\u0437\u0430\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u0431\u0435\u0441\u0456\u0434\u0438",
      icon: "tabler:book"
    },
    {
      title: "\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0435 \u0441\u043B\u0443\u0436\u0456\u043D\u043D\u044F",
      description: "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043D\u0443\u0436\u0434\u0435\u043D\u043D\u0438\u043C, \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0445\u0432\u043E\u0440\u0438\u0445, \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0441\u0456\u043C\u0435\u0439",
      icon: "tabler:heart"
    },
    {
      title: "\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430",
      description: "\u0421\u043F\u0456\u043B\u044C\u043D\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0441\u0432\u044F\u0442, \u043F\u0430\u043B\u043E\u043C\u043D\u0438\u0446\u0442\u0432\u0430, \u0431\u0440\u0430\u0442\u0441\u0442\u0432\u0430 \u0442\u0430 \u0441\u0435\u0441\u0442\u0440\u0438\u043D\u0441\u0442\u0432\u0430",
      icon: "tabler:users"
    },
    {
      title: "\u0411\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430",
      description: "\u0414\u0443\u0445\u043E\u0432\u043D\u0430 \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430, \u0436\u0438\u0442\u0456\u044F \u0441\u0432\u044F\u0442\u0438\u0445, \u043F\u0440\u0430\u0446\u0456 \u0441\u0432\u044F\u0442\u0438\u0445 \u043E\u0442\u0446\u0456\u0432",
      icon: "tabler:books"
    }
  ] })}  <div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 text-center"> <h3 class="text-2xl font-bold mb-4">Запрошуємо вас</h3> <p class="text-lg mb-6">
Двері нашого храму завжди відкриті для всіх, хто прагне молитви та спілкування з Богом.
        Приходьте, і ви знайдете тут духовну підтримку та християнську любов.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/schedule" class="btn btn-primary">
Розклад богослужінь
</a> <a href="/contacts" class="btn btn-outline">
Як нас знайти
</a> </div> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/about.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
