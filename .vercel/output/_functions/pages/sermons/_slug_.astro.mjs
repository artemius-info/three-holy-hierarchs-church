import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DC1VdcpW.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DLSZWzLo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://three-holy-hierarchs-church.vercel.app");
const getStaticPaths = async () => {
  const sermons = await getCollection("sermons");
  return sermons.map((sermon) => ({
    params: { slug: sermon.id },
    props: { sermon }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { sermon } = Astro2.props;
  const { Content } = await sermon.render();
  const date = new Date(sermon.data.date);
  const formattedDate = date.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const metadata = {
    title: sermon.data.title
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="space-y-2"> <p class="text-lg">${formattedDate}</p> ${sermon.data.preacher && renderTemplate`<p class="text-base">Проповідник: ${sermon.data.preacher}</p>`} ${sermon.data.occasion && renderTemplate`<p class="text-base">Привід: ${sermon.data.occasion}</p>`} </div> ` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`${sermon.data.title}` })}` })}  ${sermon.data.bibleReading && renderTemplate`<div class="mx-auto max-w-3xl px-4 sm:px-6 py-8"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 border-l-4 border-accent"> <h3 class="text-lg font-semibold mb-2">Біблійне читання:</h3> <p class="text-lg italic">${sermon.data.bibleReading}</p> </div> </div>`} <div class="mx-auto max-w-3xl px-4 sm:px-6 py-8 md:py-12"> <div class="prose prose-lg dark:prose-invert max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </div>  ${sermon.data.tags && sermon.data.tags.length > 0 && renderTemplate`<div class="mx-auto max-w-3xl px-4 sm:px-6 pb-8"> <div class="flex flex-wrap gap-2"> <span class="font-semibold">Теги:</span> ${sermon.data.tags.map((tag) => renderTemplate`<span class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"> ${tag} </span>`)} </div> </div>`} <div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <div class="flex justify-center"> <a href="/sermons" class="btn btn-primary">
← Повернутися до списку проповідей
</a> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/sermons/[slug].astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/sermons/[slug].astro";
const $$url = "/sermons/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
