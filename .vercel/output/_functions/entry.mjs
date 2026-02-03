import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BX-ZT9QY.mjs';
import { manifest } from './manifest_B0EcG8TC.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/contacts.astro.mjs');
const _page5 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page6 = () => import('./pages/privacy.astro.mjs');
const _page7 = () => import('./pages/rss.xml.astro.mjs');
const _page8 = () => import('./pages/saints/_slug_.astro.mjs');
const _page9 = () => import('./pages/saints.astro.mjs');
const _page10 = () => import('./pages/schedule.astro.mjs');
const _page11 = () => import('./pages/sermons/_slug_.astro.mjs');
const _page12 = () => import('./pages/sermons.astro.mjs');
const _page13 = () => import('./pages/terms.astro.mjs');
const _page14 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page15 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page16 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const _page18 = () => import('./pages/_---blog_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page3],
    ["src/pages/contacts.astro", _page4],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page5],
    ["src/pages/privacy.md", _page6],
    ["src/pages/rss.xml.ts", _page7],
    ["src/pages/saints/[slug].astro", _page8],
    ["src/pages/saints/index.astro", _page9],
    ["src/pages/schedule.astro", _page10],
    ["src/pages/sermons/[slug].astro", _page11],
    ["src/pages/sermons/index.astro", _page12],
    ["src/pages/terms.md", _page13],
    ["src/pages/[...blog]/[category]/[...page].astro", _page14],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page15],
    ["src/pages/[...blog]/[...page].astro", _page16],
    ["src/pages/index.astro", _page17],
    ["src/pages/[...blog]/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9be32c3d-f64c-4c21-8366-11de68a5ef68",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
