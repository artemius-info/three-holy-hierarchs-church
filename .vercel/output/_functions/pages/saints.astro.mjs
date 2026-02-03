import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { $ as $$Features3 } from '../chunks/Features3_MMSW-BH4.mjs';
import { g as getCollection } from '../chunks/_astro_content_DLSZWzLo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u0421\u0432\u044F\u0442\u0456 \u043F\u043E\u043A\u0440\u043E\u0432\u0438\u0442\u0435\u043B\u0456"
  };
  const saints = await getCollection("saints");
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`
Святителі Василій Великий, Григорій Богослов та Іоанн Златоуст —
      три великі вчителі Церкви, чия пам'ять вшановується разом 12 лютого (30 січня за старим стилем).
` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-accent dark:text-white">Три святителі</span> ` })}` })}  <div class="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16"> <div class="prose prose-lg dark:prose-invert max-w-none"> <h2>Собор Трьох святителів</h2> <p>
У XI столітті серед християн виникли суперечки про те, кого з трьох великих святителів
        вважати найбільшим: Василія Великого, Григорія Богослова чи Іоанна Златоуста.
        Одні віддавали перевагу Василію за його організаторський талант та аскетизм,
        інші вшановували Григорія за глибину богослов'я, треті захоплювалися красномовством Іоанна.
</p> <p>
У 1084 році митрополиту Євхаїтському Іоанну всі три святителі з'явилися уві сні та сказали:
        "Ми рівні перед Богом і немає між нами ні першого, ні другого."
        Тоді було встановлено спільне свято Трьох святителів.
</p> <p>
Це свято нагадує нам про єдність Церкви та про те, що різні дари Святого Духа
        служать одній меті — прославленню Бога та спасінню людей.
</p> </div> </div>  ${renderComponent($$result2, "Features3", $$Features3, { "title": "\u041D\u0430\u0448\u0456 \u0441\u0432\u044F\u0442\u0456 \u043F\u043E\u043A\u0440\u043E\u0432\u0438\u0442\u0435\u043B\u0456", "subtitle": "\u0414\u0456\u0437\u043D\u0430\u0439\u0442\u0435\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0436\u0438\u0442\u0442\u044F \u0442\u0430 \u0432\u0447\u0435\u043D\u043D\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0437\u0456 \u0441\u0432\u044F\u0442\u0438\u0442\u0435\u043B\u0456\u0432", "columns": 3, "items": saints.map((saint) => ({
    title: saint.data.name,
    description: saint.data.shortDescription || saint.data.title || "",
    icon: "tabler:user-star",
    callToAction: {
      text: "\u0427\u0438\u0442\u0430\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435",
      href: `/saints/${saint.id}`
    }
  })) })}  <div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8"> <h3 class="text-2xl font-bold mb-4 text-center">Тропар Трьом святителям, глас 4</h3> <div class="text-center italic"> <p class="mb-4">
Яко апостолів спільники і вселенськії вчителі,<br>
Владико всіх, мир світові даруй<br>
і душам нашим велію милість.
</p> </div> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/saints/index.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/saints/index.astro";
const $$url = "/saints";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
