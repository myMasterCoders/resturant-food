import { d as useRoute, u as useRuntimeConfig } from './server.mjs';
import { ref, withAsyncContext, reactive, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { n as numberFormat } from './formatNumber-CWt9k62S.mjs';
import { ssrInterpolate, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useCounterStore } from './useStore-cJ6784Rb.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'vue-toastification';

const _imports_0 = publicAssetsURL("/image/not-Found.jpg");
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCounterStore();
    const { public: { baseUrl } } = useRuntimeConfig();
    const quantity = ref(1);
    const route = useRoute();
    let counter = ref(0);
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${baseUrl}/products/${route.params.slug}`, "$DzmMIp66f7")), __temp = await __temp, __restore(), __temp);
    console.log("products", products.value);
    const { data: allProducts } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${baseUrl}/random-products?count=4`, "$X457phLkdN")), __temp = await __temp, __restore(), __temp);
    const listImg = reactive([
      { image: `${products.value.data.primary_image}` },
      { image: `${products.value.data.images[0].image}` },
      { image: `${products.value.data.images[1].image}` }
    ]);
    console.log(counter.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_img = resolveDirective("img");
      _push(`<!--[--><div class="flex flex-row items-center justify-around w-full p-4"><div class="w-4/12"><p class="my-2">${ssrInterpolate(unref(products).data.name)}</p><p>${ssrInterpolate(unref(products).data.description)}</p>`);
      if (unref(products).data.is_sale) {
        _push(`<div class="my-2"><del class="text-slate-600">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(products).data.price))} \u062A\u0648\u0645\u0627\u0646</del><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(products).data.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
      } else {
        _push(`<div class="my-4"><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(products).data.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
      }
      _push(`<div class="w-full flex flex-row items-center justify-around"><button type="button" class="bg-green-600 p-2 text-slate-100">\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F</button><div class="flex flex-row"><button type="button" class="mx-4">+</button><span>${ssrInterpolate(unref(quantity))}</span><button type="button" class="mx-4">- </button></div></div></div><div class="w-4/12"><img${ssrRenderAttrs(mergeProps({
        src: _imports_0,
        alt: "",
        class: "w-full h-[250px]"
      }, ssrGetDirectiveProps(_ctx, _directive_img, unref(listImg)[unref(counter)].image)))}></div></div><div class="flex flex-row items-center w-full justify-around my-8"><!--[-->`);
      ssrRenderList(unref(allProducts).data, (product) => {
        _push(`<div class="p-2 bg-slate-100 w-3/12 mx-2"><img${ssrRenderAttr("src", `${product.primary_image}`)} alt="" class="w-[200px] h-[200px]"><p class="my-4 text-[15px]">${ssrInterpolate(product.name)}</p><p class="my-4 text-[13px]">${ssrInterpolate(product.description)}</p>`);
        if (product.is_sale) {
          _push(`<div><del>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</del><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
        } else {
          _push(`<div><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CvCHX_EZ.mjs.map
