import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../chunks/Hero_DC1VdcpW.mjs';
import { g as getCollection } from '../chunks/_astro_content_DLSZWzLo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "\u041F\u0440\u043E\u043F\u043E\u0432\u0456\u0434\u0456"
  };
  const sermons = await getCollection("sermons");
  const sortedSermons = sermons.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`
Духовні настанови та роздуми про Святе Письмо
` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-accent dark:text-white">Проповіді</span> ` })}` })}  <div class="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16"> ${sortedSermons.length > 0 ? renderTemplate`<div class="space-y-8"> ${sortedSermons.map((sermon) => {
    const date = new Date(sermon.data.date);
    date.toLocaleDateString("uk-UA", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return renderTemplate`<article class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"> <div class="flex flex-col md:flex-row md:items-start gap-4"> <div class="flex-shrink-0"> <div class="bg-accent text-white rounded-lg px-4 py-2 text-center"> <div class="text-2xl font-bold"> ${date.getDate()} </div> <div class="text-sm"> ${date.toLocaleDateString("uk-UA", { month: "short" })} </div> </div> </div> <div class="flex-grow"> <h2 class="text-2xl font-bold mb-2"> <a${addAttribute(`/sermons/${sermon.id}`, "href")} class="hover:text-accent transition-colors"> ${sermon.data.title} </a> </h2> ${sermon.data.preacher && renderTemplate`<p class="text-sm text-slate-600 dark:text-slate-400 mb-2">
Проповідник: ${sermon.data.preacher} </p>`} ${sermon.data.occasion && renderTemplate`<p class="text-sm text-slate-600 dark:text-slate-400 mb-2">
Привід: ${sermon.data.occasion} </p>`} ${sermon.data.bibleReading && renderTemplate`<p class="text-sm italic text-slate-700 dark:text-slate-300 mb-3"> ${sermon.data.bibleReading} </p>`} ${sermon.data.tags && sermon.data.tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-3"> ${sermon.data.tags.map((tag) => renderTemplate`<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"> ${tag} </span>`)} </div>`} <div class="mt-4"> <a${addAttribute(`/sermons/${sermon.id}`, "href")} class="text-accent hover:underline font-medium">
Читати повністю →
</a> </div> </div> </div> </article>`;
  })} </div>` : renderTemplate`<div class="text-center py-12"> <p class="text-lg text-slate-600 dark:text-slate-400">
Проповіді скоро з'являться на сайті
</p> </div>`} </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/sermons/index.astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/sermons/index.astro";
const $$url = "/sermons";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
