import { _ as __nuxt_component_0 } from './nuxt-link-BfpQVTeX.mjs';
import { ref, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { n as numberFormat } from './formatNumber-CWt9k62S.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { useToast } from 'vue-toastification';
import { u as useCounterStore } from './useStore-cJ6784Rb.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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

const _imports_0 = publicAssetsURL("/image/empty.png");
const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useToast();
    const loading = ref(false);
    ref([]);
    const store = useCounterStore();
    const code = ref("");
    ref(null);
    const products = computed(() => {
      return store.allProducts;
    });
    console.log("products", products.value);
    const allPrice = computed(() => {
      return store.allAmount;
    });
    const percent = ref(0);
    ref(null);
    const { data: addresses } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/cart/address", {
      headers: {
        "Content-Type": "application/json"
      }
    }, "$0qHVSrtFrD")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))}>`);
      if (unref(products).length > 0) {
        _push(`<!--[--><div class="flex flex-row items-center w-full justify-around"><div class="w-2/12 text-center">\u0645\u062D\u0635\u0648\u0644</div><div class="w-2/12 text-center">\u0646\u0627\u0645 \u0645\u062D\u0635\u0648\u0644</div><div class="w-2/12 text-center">\u0642\u06CC\u0645\u062A</div><div class="w-2/12 text-center">\u062A\u0639\u062F\u0627\u062F</div><div class="w-2/12 text-center">\u0642\u06CC\u0645\u062A \u06A9\u0644</div><div class="w-2/12 text-center">\u062D\u0630\u0641</div></div><div class="flex flex-col my-8"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<div class="flex flex-row justify-around items-center w-full my-2"><div class="w-2/12 text-center"><img${ssrRenderAttr("src", `${product.primary_image}`)} alt="" class="w-[120px] h-[120px] items-center mx-auto rounded-xl"></div><div class="w-2/12 text-center"><p>${ssrInterpolate(product.name)}</p></div><div class="w-2/12 text-center">`);
          if (product.is_sale) {
            _push(`<div><del class="text-slate-600 my-4">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</del><p class="my-2">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
          } else {
            _push(`<div><p class="my-2">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
          }
          _push(`</div><div class="w-2/12 text-center flex flex-row items-center justify-around"><button type="button" class="bg-green-600 mx-4 p-2 rounded-lg text-slate-100">+</button><span>${ssrInterpolate(product.qty)}</span><button type="button" class="bg-red-600 mx-4 p-2 rounded-lg text-slate-100">-</button></div><div class="w-2/12 text-center">`);
          if (product.is_sale) {
            _push(`<div><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.qty * product.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
          } else {
            _push(`<div><p>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.qty * product.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
          }
          _push(`</div><div class="w-2/12 text-center"><button type="button" class="bg-red-600 p-2 text-slate-100">\u062D\u0630\u0641</button></div></div>`);
        });
        _push(`<!--]--></div><div class="mt-4"><button type="button" class="bg-sky-600 px-4 py-2 text-slate-100 rounded-xl text-[13px] mx-4">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u06A9\u0644 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F</button></div><div class="w-full flex flex-row items-center justify-around my-4"><div class="w-4/12 flex flex-row items-center"><input${ssrRenderAttr("value", unref(code))} type="text" class="p-2 w-10/12 outline-none border border-1 border-slate-200 rounded-xl text-slate-600" placeholder="\u06A9\u062F \u062A\u062E\u0641\u06CC\u0641"><button type="button" class="bg-sky-600 px-1 py-1 rounded-lg text-[12px] text-white"> \u0627\u0639\u0645\u0627\u0644 \u06A9\u062F \u062A\u062E\u0641\u06CC\u0641 `);
        if (unref(loading)) {
          _push(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div><div class="w-4/12 flex flex-row items-center justify-around"><p>\u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u062F\u0631\u0633:</p>`);
        if (((_a = unref(addresses)) == null ? void 0 : _a.length) !== 0) {
          _push(`<div><select class="p-2"><!--[-->`);
          ssrRenderList(unref(addresses), (address) => {
            _push(`<option${ssrRenderAttr("value", address.id)}>${ssrInterpolate(address.title)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button type="button" class="bg-sky-600 px-2 py-2 rounded-xl text-white text-[13px]"${_scopeId}>\u0627\u06CC\u062C\u0627\u062F \u0627\u062F\u0631\u0633</button>`);
              } else {
                return [
                  createVNode("button", {
                    type: "button",
                    class: "bg-sky-600 px-2 py-2 rounded-xl text-white text-[13px]"
                  }, "\u0627\u06CC\u062C\u0627\u062F \u0627\u062F\u0631\u0633")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div></div><div class="my-4 w-4/12 mx-auto flex flex-col"><h2>\u0645\u062C\u0645\u0648\u0639 \u06A9\u0644 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F:</h2><div class="flex flex-row items-center justify-between my-2"><p>\u0645\u0628\u0644\u063A \u06A9\u0644 \u067E\u0631\u062F\u0627\u062E\u062A\u06CC</p><span class="text-slate-600">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(allPrice)))} \u062A\u0648\u0645\u0627\u0646</span></div><div class="flex flex-row items-center justify-between my-2"><p> \u062A\u062E\u0641\u06CC\u0641:<span class="mx-2 text-green-600">${ssrInterpolate(unref(percent))} %</span></p><span class="text-slate-600">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(allPrice) * unref(percent) / 100))} \u062A\u0648\u0645\u0627\u0646</span></div><div class="flex flex-row items-center justify-between my-2"><p>\u0645\u0628\u0644\u063A \u0642\u0627\u0628\u0644 \u067E\u0631\u062F\u0627\u062E\u062A:</p><span class="text-slate-600">${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(unref(allPrice) - unref(allPrice) * unref(percent) / 100))} \u062A\u0648\u0645\u0627\u0646</span></div></div><div class="w-3/12 mx-auto my-4"><button type="button" class="bg-green-600 px-8 py-2 rounded-xl text-slate-100"> \u067E\u0631\u062F\u0627\u062E\u062A `);
        if (unref(loading)) {
          _push(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div><!--]-->`);
      } else {
        _push(`<div class="w-4/12 mx-auto"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full h-[300px]"><p class="text-center my-4">\u0633\u0628\u062F \u062E\u0631\u06CC\u062F \u062E\u0627\u0644\u06CC \u0627\u0633\u062A</p><div class="w-4/12 mx-auto">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/menu" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="bg-[#ff00a6] my-4 text-center text-[13px] text-slate-100 px-4 py-1 rounded-lg"${_scopeId}>\u0645\u0634\u0627\u0647\u062F\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "bg-[#ff00a6] my-4 text-center text-[13px] text-slate-100 px-4 py-1 rounded-lg"
                }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0645\u062D\u0635\u0648\u0644\u0627\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-3cYKQuKb.mjs.map
