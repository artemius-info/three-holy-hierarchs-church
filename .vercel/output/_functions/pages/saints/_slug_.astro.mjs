import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D76GWIxZ.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_wNlYpnDe.mjs';
import { $ as $$Hero } from '../../chunks/Hero_DC1VdcpW.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DLSZWzLo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://three-holy-hierarchs-church.vercel.app");
const getStaticPaths = async () => {
  const saints = await getCollection("saints");
  return saints.map((saint) => ({
    params: { slug: saint.id },
    props: { saint }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { saint } = Astro2.props;
  const { Content } = await saint.render();
  const metadata = {
    title: saint.data.name,
    description: saint.data.shortDescription
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "subtitle": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": async ($$result4) => renderTemplate`${saint.data.title && renderTemplate`${maybeRenderHead()}<span class="block text-xl mb-2">${saint.data.title}</span>`}${saint.data.feastDay && renderTemplate`<span class="block text-lg"> <strong>День пам'яті:</strong> ${saint.data.feastDay} </span>`}` })}`, "title": async ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result4) => renderTemplate`${saint.data.name}` })}` })}  ${saint.data.shortDescription && renderTemplate`<div class="mx-auto max-w-3xl px-4 sm:px-6 py-8"> <div class="bg-blue-50 dark:bg-slate-800 rounded-lg p-6 md:p-8"> <p class="text-lg text-center italic">${saint.data.shortDescription}</p> </div> </div>`} <div class="mx-auto max-w-3xl px-4 sm:px-6 py-8 md:py-12"> <div class="prose prose-lg dark:prose-invert max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> </div>  ${saint.data.quotes && saint.data.quotes.length > 0 && renderTemplate`<div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <h2 class="text-3xl font-bold mb-8 text-center">Цитати</h2> <div class="space-y-6"> ${saint.data.quotes.map((quote) => renderTemplate`<div class="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 md:p-8 border-l-4 border-accent"> <blockquote class="text-lg italic mb-4">
"${quote.text}"
</blockquote> ${quote.source && renderTemplate`<cite class="text-sm text-slate-600 dark:text-slate-400 not-italic">
— ${quote.source} </cite>`} </div>`)} </div> </div>`} <div class="mx-auto max-w-3xl px-4 sm:px-6 pb-12 md:pb-16"> <div class="flex justify-center"> <a href="/saints" class="btn btn-primary">
← Повернутися до списку святих
</a> </div> </div> ` })}`;
}, "D:/Projects/Three_Holy_Hierarchs/src/pages/saints/[slug].astro", void 0);

const $$file = "D:/Projects/Three_Holy_Hierarchs/src/pages/saints/[slug].astro";
const $$url = "/saints/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
