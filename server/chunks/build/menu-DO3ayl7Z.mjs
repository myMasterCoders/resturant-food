import { _ as _sfc_main$1 } from './NuxtImg-CRLf3OoQ.mjs';
import { ref, withAsyncContext, watchEffect, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { _ as _export_sfc, c as useRouter, d as useRoute, u as useRuntimeConfig } from './server.mjs';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { n as numberFormat } from './formatNumber-CWt9k62S.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './index-Ds4Yf0H0.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';
import 'pinia-plugin-persistedstate';

const _sfc_main = {
  __name: "menu",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const search = ref("");
    const router = useRouter();
    const route = useRoute();
    const query = ref({});
    const { public: { baseUrl } } = useRuntimeConfig();
    const { data: categories } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${baseUrl}/categories`, "$4W2w75q3pE")), __temp = await __temp, __restore(), __temp);
    query.value = route.query;
    const { data, refresh, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${baseUrl}/menu`, {
      query
    }, "$JXkDRF063v")), __temp = await __temp, __restore(), __temp);
    watchEffect(() => {
      if (Object.keys(route.query).length === 0) {
        query.value = {};
        refresh();
      }
    });
    function getPage(data2) {
      query.value = { ...route.query, ...data2 };
      if (!data2.hasOwnProperty("page")) {
        delete query.value.page;
      }
      router.push({
        path: "/menu",
        query: query.value
      });
      refresh();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _directive_img = resolveDirective("img");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-d4ad731a><div class="container mx-ato p-1" data-v-d4ad731a><div class="w-full h-auto" data-v-d4ad731a>`);
      if (unref(pending)) {
        _push(`<div class="w-8/12 mx-auto text-center p-4" data-v-d4ad731a><div class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status" data-v-d4ad731a></div></div>`);
      } else {
        _push(`<div class="w-full flex flex-row items-center justify-between p-2 sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between" data-v-d4ad731a><div class="w-3/12 sm:w-full md:w-full lg:w-3/12 xl:w-3/12 sm:bg-slate-200 p-4 flex h-[600px] flex-col" data-v-d4ad731a><div class="relative" data-v-d4ad731a><p class="text-slate-800 my-2" data-v-d4ad731a>\u062C\u0633\u062A\u062C\u0648</p><div class="absolute left-[10px] top-[50px]" data-v-d4ad731a>`);
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          onClick: ($event) => unref(search) !== "" && getPage({ search: unref(search) }),
          icon: ["fas", "search"]
        }, null, _parent));
        _push(`</div></div><input type="text"${ssrRenderAttr("value", unref(search))} class="w-full p-2 outline-none border border-1 border-slate-200" placeholder="\u062C\u0633\u062A\u062C\u0648..." data-v-d4ad731a><p class="text-slate-200 p-2 bg-slate-700 my-2" data-v-d4ad731a>\u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC</p><ul class="flex flex-col" data-v-d4ad731a><!--[-->`);
        ssrRenderList(unref(categories).data, (category) => {
          _push(`<li class="${ssrRenderClass([{ bgBlack: unref(route).query.hasOwnProperty("category") } && unref(route).query.category == category.id, "hover:bg-slate-600 hover:text-slate-100 p-1 transition"])}" data-v-d4ad731a><p class="my-2 cursor-pointer" data-v-d4ad731a>${ssrInterpolate(category.name)}</p></li>`);
        });
        _push(`<!--]--></ul><p class="text-slate-200 bg-slate-700 p-2 my-2" data-v-d4ad731a>\u0641\u06CC\u0644\u062A\u0631 \u0645\u062D\u0635\u0648\u0644\u0627\u062A</p><ul class="flex flex-col" data-v-d4ad731a><li class="p-2 hover:bg-slate-600 hover:text-slate-100 transition" data-v-d4ad731a><button class="${ssrRenderClass([{ bgBlack: unref(route).query.hasOwnProperty("sortBy") && unref(route).query.sortBy == "max" }, "px-4 py-1"])}" type="button" data-v-d4ad731a>\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A</button></li><li class="p-2 hover:bg-slate-600 hover:text-slate-100 transition" data-v-d4ad731a><button class="${ssrRenderClass([{ bgBlack: unref(route).query.hasOwnProperty("sortBy") && unref(route).query.sortBy == "min" }, "px-4 py-1"])}" type="button" data-v-d4ad731a>\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A</button></li><li class="p-2 hover:bg-slate-600 hover:text-slate-100 transition" data-v-d4ad731a><button class="${ssrRenderClass([{ bgBlack: unref(route).query.hasOwnProperty("sortBy") } && unref(route).query.sortBy == "bestseller", "px-4 py-1"])}" type="button" data-v-d4ad731a>\u067E\u0631\u0641\u0631\u0648\u0634 \u062A\u0631\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644</button></li><li class="p-2 hover:bg-slate-600 hover:text-slate-100 transition" data-v-d4ad731a><button class="${ssrRenderClass([{ bgBlack: unref(route).query.hasOwnProperty("sortBy") } && unref(route).query.sortBy == "sale", "px-4 py-1"])}" type="button" data-v-d4ad731a>\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u062A\u062E\u0641\u06CC\u0641</button></li></ul></div>`);
        if (unref(data).data.products.length === 0) {
          _push(`<div class="w-4/12 mx-auto" data-v-d4ad731a><p class="text-slate-800 text-[20px]" data-v-d4ad731a>\u0645\u062D\u0635\u0648\u0644 \u0645\u0648\u0631\u062F\u0646\u0638\u0631 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F</p></div>`);
        } else {
          _push(`<div class="w-8/12 sm:w-full md:w-full lg:w-8/12 xl:w-8/12 lg:mx-auto xl:mx-auto mx-auto" data-v-d4ad731a><div class="w-full flex flex-row items-center justify-between flex-wrap" data-v-d4ad731a><!--[-->`);
          ssrRenderList(unref(data).data.products, (product) => {
            _push(`<div class="p-2 bg-slate-100 w-4/12" data-v-d4ad731a>`);
            _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
              src: "/image/not-Found.jpg",
              format: "webp",
              loading: "lazy",
              quality: "80",
              alt: "",
              class: "w-[250px] h-[150px]"
            }, ssrGetDirectiveProps(_ctx, _directive_img, `${product.primary_image}`)), null, _parent));
            _push(`<p class="my-2" data-v-d4ad731a>${ssrInterpolate(product.name)}</p><p class="my-2 text-[14px]" data-v-d4ad731a>${ssrInterpolate(product.description)}</p>`);
            if (product.is_sale) {
              _push(`<div data-v-d4ad731a><del class="my-4" data-v-d4ad731a>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</del><p class="my-4" data-v-d4ad731a>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
            } else {
              _push(`<div data-v-d4ad731a><p class="my-4" data-v-d4ad731a>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
            }
            _push(`<div class="flex flex-row items-center justify-between" data-v-d4ad731a><button type="button" class="bg-green-600 px-4 py-1 rounded-xl sm:text-[12px] text-[13px] text-slate-100" data-v-d4ad731a> \u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F </button>`);
            _push(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: ["fas", "cart-plus"],
              class: "p-2 rounded-full bg-orange-600 sm:invisible md:invisible lg:visible xl:visible text-slate-100"
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        }
        _push(`</div>`);
      }
      _push(`<div class="w-4/12 mx-auto my-4" data-v-d4ad731a><ul class="flex flex-row item-center justify-center" data-v-d4ad731a><!--[-->`);
      ssrRenderList(unref(data).data.meta.links.slice(1, -1), (page) => {
        _push(`<li class="${ssrRenderClass([{ bgBlack: page.active }, "px-4 py-2"])}" data-v-d4ad731a><button type="button" data-v-d4ad731a>${ssrInterpolate(page.label)}</button></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4ad731a"]]);

export { menu as default };
//# sourceMappingURL=menu-DO3ayl7Z.mjs.map
