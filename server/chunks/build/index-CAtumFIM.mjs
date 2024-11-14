import { _ as _sfc_main$9 } from './NuxtImg-CRLf3OoQ.mjs';
import { useSSRContext, reactive, withAsyncContext, ref, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, resolveComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { TransitionExpand } from '@morev/vue-transitions';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { _ as _export_sfc, u as useRuntimeConfig, a as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BfpQVTeX.mjs';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { n as numberFormat } from './formatNumber-CWt9k62S.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useCounterStore } from './useStore-cJ6784Rb.mjs';
import { useToast } from 'vue-toastification';
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
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$8 = {
  __name: "Slider",
  __ssrInlineRender: true,
  setup(__props) {
    const text = reactive(["\u0634\u06CC\u0631\u06CC\u0646\u06CC", "\u0646\u0627\u0646", "\u062E\u0648\u0627\u0631\u0628\u0627\u0631", "\u0633\u0628\u0632\u06CC\u062C\u0627\u062A", "\u0645\u06CC\u0648\u0647"]);
    const counter = ref(Number(0));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider" }, _attrs))}><div class="container-fluid p-2"><div class="w-full h-auto"><div class="flex flex-row items-center justify-between sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between"><div class="w-6/12 sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 flex flex-col"><div class="flex flex-row sm:text-center sm:justify-center"><p class="text-slate-700 text-[50px] sm:text-center sm:text-[30px] font-bold">\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646</p>`);
      _push(ssrRenderComponent(unref(TransitionExpand), {
        scale: 0.8,
        origin: "top right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-[#ff00a6] text-center sm:text-center font-semibold text-[50px] mx-4 duration-500 transition sm:text-[30px]"${_scopeId}>${ssrInterpolate(unref(text)[unref(counter)])}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-[#ff00a6] text-center sm:text-center font-semibold text-[50px] mx-4 duration-500 transition sm:text-[30px]" }, toDisplayString(unref(text)[unref(counter)]), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-slate-600 sm:text-center text-[15px]">\u0633\u0641\u0627\u0631\u0634 \u0622\u0646\u0644\u0627\u06CC\u0646 \u063A\u0630\u0627 \u060C \u0645\u06CC\u0648\u0647\u060C \u0646\u0627\u0646\u060C \u0634\u06CC\u0631\u06CC\u0646\u06CC \u0648 ...</p><div class="relative my-8"><input type="text" class="px-4 py-4 sm:w-full text-start shadow-xl outline-none border border-1 border-slate-300 w-10/12 mx-auto rounded-r-full rounded-l-full text-slate-400" placeholder="\u0627\u0628\u062A\u062F\u0627 \u0627\u062F\u0631\u0633\u062A\u0627\u0646 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F..."><div class="absolute w-[50px] h-[50px] bg-[#ff00a6] rounded-full px-4 py-2 left-[110px] top-[5px] sm:left-[10px]">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fas", "search"],
        class: "text-slate-100 text-center px-[2px] py-2"
      }, null, _parent));
      _push(`</div></div></div><div class="w-6/12 sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/image/hero-image.png",
        alt: "",
        format: "webp",
        loading: "lazy",
        quality: "80",
        class: "w-full h-full md:h-[350px] lg:w-full lg:h-full"
      }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Slider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
SwiperCore.use([Navigation, Autoplay]);
const _sfc_main$7 = {
  name: "Foods",
  components: { Swiper, SwiperSlide },
  setup() {
    const breakpoints = reactive({
      500: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 10,
        spaceBetween: 10
      },
      1536: {
        slidesPerView: 10,
        spaceBetween: 10
      }
    });
    const listFoods = reactive([
      { id: 1, image: "/image/sl-1.png", title: "\u0631\u0633\u062A\u0648\u0631\u0627\u0646" },
      { id: 2, image: "/image/sl-2.png", title: "\u0633\u0648\u067E\u0631\u0645\u0627\u0631\u06A9\u062A" },
      { id: 3, image: "/image/sl-3.png", title: "\u06A9\u0627\u0641\u0647" },
      { id: 4, image: "/image/sl-4.png", title: "\u0634\u06CC\u0631\u06CC\u0646\u06CC" },
      { id: 5, image: "/image/sl-5.png", title: "\u0645\u06CC\u0648\u0647" },
      { id: 6, image: "/image/sl-6.png", title: "\u0646\u0627\u0646\u0648\u0627\u06CC\u06CC" },
      { id: 7, image: "/image/sl-7.png", title: "\u06AF\u0648\u0634\u062A" },
      { id: 8, image: "/image/sl-8.png", title: "\u067E\u0631\u0648\u062A\u06CC\u0646" },
      { id: 9, image: "/image/sl-9.png", title: "\u0627\u0628\u0645\u06CC\u0648\u0647" },
      { id: 10, image: "/image/sl-10.png", title: "\u0644\u0628\u0646\u06CC\u0627\u062A" },
      { id: 11, image: "/image/sl-11.png", title: "\u0639\u0633\u0644" },
      { id: 12, image: "/image/sl-12.png", title: "\u06AF\u0644 \u0648 \u06AF\u06CC\u0627\u0647" }
    ]);
    return {
      modules: [Navigation, Autoplay],
      listFoods,
      breakpoints
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "slider-foods" }, _attrs))}><div class="container mx-auto p-2"><div class="w-full h-auto"><div class="swiper-container"><div class="swiper-wrapper">`);
  _push(ssrRenderComponent(_component_swiper, {
    module: $setup.modules,
    "slides-per-view": 10,
    "space-between": 20,
    autoplay: { delay: 3e3 },
    speed: 3e3,
    navigation: true,
    breakpoints: $setup.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.listFoods, (food) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: food.id,
            class: "flex flex-col border border-1 border-slate-200 p-2 rounded-xl"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img${ssrRenderAttr("src", `${food.image}`)} alt="" class="w-[120px] h-[100px] rounded-full"${_scopeId2}><p class="text-[13px] text-slate-600 text-center my-2"${_scopeId2}>${ssrInterpolate(food.title)}</p>`);
              } else {
                return [
                  createVNode("img", {
                    src: `${food.image}`,
                    alt: "",
                    class: "w-[120px] h-[100px] rounded-full"
                  }, null, 8, ["src"]),
                  createVNode("p", { class: "text-[13px] text-slate-600 text-center my-2" }, toDisplayString(food.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.listFoods, (food) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: food.id,
              class: "flex flex-col border border-1 border-slate-200 p-2 rounded-xl"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: `${food.image}`,
                  alt: "",
                  class: "w-[120px] h-[100px] rounded-full"
                }, null, 8, ["src"]),
                createVNode("p", { class: "text-[13px] text-slate-600 text-center my-2" }, toDisplayString(food.title), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Foods.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$6 = {
  __name: "Categories",
  __ssrInlineRender: true,
  setup(__props) {
    const listCategories = reactive([
      { id: 1, image: "/image/ca-1.jpg", title: "\u0627\u06CC\u0631\u0627\u0646\u06CC", category: "" },
      { id: 2, image: "/image/ca-2.jpg", title: "\u0641\u0633\u062A \u0641\u0648\u062F", category: "" },
      { id: 3, image: "/image/ca-3.jpg", title: "\u06A9\u0628\u0627\u0628", category: "" },
      { id: 4, image: "/image/ca-4.jpg", title: "\u067E\u06CC\u062A\u0632\u0627", category: "" },
      { id: 5, image: "/image/ca-5.jpg", title: "\u0628\u0631\u06AF\u0631", category: "" },
      { id: 6, image: "/image/ca-6.jpg", title: "\u0633\u0627\u0646\u062F\u0648\u06CC\u0686", category: "" },
      { id: 7, image: "/image/ca-7.jpg", title: "\u0633\u0648\u062E\u0627\u0631\u06CC", category: "" },
      { id: 8, image: "/image/ca-8.jpg", title: "\u067E\u0627\u0633\u062A\u0627", category: "" },
      { id: 9, image: "/image/ca-9.jpg", title: "\u0633\u0627\u0644\u0627\u062F", category: "" },
      { id: 10, image: "/image/ca-10.jpg", title: "\u062F\u0631\u06CC\u0627\u06CC\u06CC", category: "" },
      { id: 11, image: "/image/ca-1.jpg", title: "\u0628\u06CC\u0646 \u0627\u0645\u0644\u0644\u06CC", category: "" },
      { id: 12, image: "/image/ca-2.jpg", title: "\u062F\u0631\u06CC\u0627\u06CC\u06CC", category: "" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "categories" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><h1 class="text-start text-slate-800 my-4">\u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u0647\u0627</h1><div class="flex flex-row items-center w-full justify-between flex-wrap"><!--[-->`);
      ssrRenderList(unref(listCategories), (category) => {
        _push(`<div class="flex flex-col w-2/12 sm:w-4/12 lg:w-2/12 lg:flex-col xl:w-2/12 lg:flex xl:flex-col 2xl:w-2/12 2xl:flex 2zl:flex-col">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${category.image}`,
          alt: "",
          format: "webp",
          loading: "lazy",
          quality: "80",
          class: "w-full h-[120px] p-2 rounded-2xl my-4"
        }, null, _parent));
        _push(`<div class="flex flex-row items-center w-[100px] shadow-xl"><p class="text-[13px] p-2 rounded-xl">${ssrInterpolate(category.title)}</p>`);
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["fas", "angle-left"],
          class: "text-[#ff00a6] text-[13px]"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Categories.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/image/not-found.jpg");
const _sfc_main$5 = {
  __name: "Products",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useCounterStore();
    const { public: { baseUrl } } = useRuntimeConfig();
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${baseUrl}/products/products-tabs`, "$Y5UgWD9fD7")), __temp = await __temp, __restore(), __temp);
    const counter = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_img = resolveDirective("img");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "products" }, _attrs))} data-v-296ee9b0><div class="container mx-auto p-2" data-v-296ee9b0><div class="w-full h-auto mx-auto sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:w-full xl:w-full 2xl:w-full" data-v-296ee9b0><div class="w-6/12 sm:w-full md:w-full lg:w-6/12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:mx-auto flex flex-row justify-between mx-auto my-4 xl:w-6/12 2xl:w-6/12" data-v-296ee9b0><!--[-->`);
      ssrRenderList(unref(products).data.tabList, (product, index2) => {
        _push(`<div data-v-296ee9b0><p class="${ssrRenderClass([{ bgBlack: unref(counter) === index2 }, "px-4 py-1 cursor-pointer text-[15px] rounded-xl"])}" data-v-296ee9b0>${ssrInterpolate(product)}</p></div>`);
      });
      _push(`<!--]--></div><div class="w-full sm:w-full md:w-10/12 lg:w-11/12 mx-auto lg:flex lg:flex-row lg:items-center lg:justify-around lg:flex-wrap flex flex-row items-center justify-around flex-wrap xl:w-full 2xl:w-full" data-v-296ee9b0><!--[-->`);
      ssrRenderList(unref(products).data.tabPanel[unref(counter)], (product) => {
        _push(`<div class="w-4/12 sm:w-10/12 lg:w-3/12 bg-slate-100 xl:w-4/12 2xl:w-4/12 p-4 rounded-xl" data-v-296ee9b0><img${ssrRenderAttrs(mergeProps({
          src: _imports_0,
          alt: "",
          class: "w-full h-[150px] md:h-[200px] lg:w-full lg:h-[150px] xl:h-[200px] 2xl:h-[200px] rounded-xl"
        }, ssrGetDirectiveProps(_ctx, _directive_img, `${product.primary_image}`)))} data-v-296ee9b0>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-slate-900 my-4" data-v-296ee9b0${_scopeId}>${ssrInterpolate(product.name)}</p>`);
            } else {
              return [
                createVNode("p", { class: "text-slate-900 my-4" }, toDisplayString(product.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="text-[13px]" data-v-296ee9b0>${ssrInterpolate(product.description)}</p>`);
        if (product.is_sale) {
          _push(`<div data-v-296ee9b0><del data-v-296ee9b0>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</del><p data-v-296ee9b0>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.sale_price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
        } else {
          _push(`<div data-v-296ee9b0><p class="my-4" data-v-296ee9b0>${ssrInterpolate(("numberFormat" in _ctx ? _ctx.numberFormat : unref(numberFormat))(product.price))} \u062A\u0648\u0645\u0627\u0646</p></div>`);
        }
        _push(`<div class="flex flex-row items-center justify-between" data-v-296ee9b0><button type="button" class="bg-green-600 px-4 py-2 rounded-xl text-white text-[12px]" data-v-296ee9b0> \u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F </button>`);
        _push(ssrRenderComponent(unref(FontAwesomeIcon), {
          icon: ["fas", "cart-plus"],
          class: "bg-orange-400 p-2 rounded-full text-slate-100"
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Products.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-296ee9b0"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$9;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "application bg-slate-100 h-[500px] p-4 my-4" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="flex flex-row items-center justify-around w-full sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:flex-row lg:items-center lg:justify-around lg:w-full xl:flex xl:flex-row xl:items-center xl:justify-around xl:w-full 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-around 2xl:w-full"><div class="w-5/12 sm:w-full md:w-full lg:w-5/12 flex flex-col xl:w-5/12 2xl:w-5/12"><p class="text-[30px] sm:text-[20px] my-8">\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0627\u0633\u0646\u067E\u200C\u0641\u0648\u062F</p><p class="text-slate-600 my-4" style="${ssrRenderStyle({ "line-height": "30px" })}">\u0628\u0627 \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0627\u0633\u0646\u067E\u200C\u0641\u0648\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u0628\u0627 \u0686\u0646\u062F \u06A9\u0644\u06CC\u06A9 \u0633\u0627\u062F\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0631\u0633\u062A\u0648\u0631\u0627\u0646\u200C\u0647\u0627\u060C \u06A9\u0627\u0641\u0647\u200C\u0647\u0627\u060C \u0634\u06CC\u0631\u06CC\u0646\u06CC\u200C\u0641\u0631\u0648\u0634\u06CC\u200C\u0647\u0627 \u0648 \u0633\u0648\u067E\u0631\u0645\u0627\u0631\u06A9\u062A\u200C\u0647\u0627\u06CC \u0646\u0632\u062F\u06CC\u06A9 \u062E\u0648\u062F\u062A\u0627\u0646 \u0631\u0627 \u062C\u0633\u062A\u200C\u0648\u200C\u062C\u0648 \u06A9\u0631\u062F\u0647 \u0648 \u0627\u0632 \u062A\u062C\u0631\u0628\u0647 \u0633\u0641\u0627\u0631\u0634 \u0622\u0633\u0627\u0646 \u0627\u0632 \u0627\u0633\u0646\u067E\u200C\u0641\u0648\u062F \u0644\u0630\u062A \u0628\u0628\u0631\u06CC\u062F.</p><div class="flex flex-col"><p class="text-[13px] my-4 text-slate-600"> \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9 \u062F\u0627\u0646\u0644\u0648\u062F \u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646\u060C \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644\u062A\u0627\u0646 \u0631\u0648 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F </p><div class="relative w-8/12 sm:w-full"><input type="text" class="sm:w-full p-2 outline-none w-full mx-auto border border-1 border-slate-200 shadow-xl" placeholder=" ******09"><div class="absolute bottom-[5px] left-[10px]"><button type="button" class="px-4 py-2 rounded-xl text-slate-100 text-[13px] bg-[#ff00a6]">\u062F\u0631\u06CC\u0627\u0641\u062A \u0644\u06CC\u0646\u06A9</button></div></div></div><div class="flex flex-row items-center justify-between"></div></div><div class="w-4/12 my-4 sm:w-full md:w-full lg:w-4/12 xl:w-4/12 2xl:w-4/12">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/img_app_mockup@2x.png",
    alt: "",
    format: "webp",
    loading: "lazy",
    quality: "80",
    class: "w-full h-[570px] sm:w-[300px] sm:h-[250px] sm:mx-auto lg:h-[500px] xl:w-full xl:h-[550px] 2xl:w-full 2xl:h-[550px]"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Application.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$9;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "worker" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="w-full flex flex-row items-center justify-between sm:mt-8 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full xl:flex xl:flex-row xl:items-center xl:w-full xl:justify-between 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between"><div class="w-5/12 sm:w-full md:w-full lg:w-5/12 xl:w-5/12 2xl:w-5/12 flex flex-col p-2"><p class="text-[30px] sm:text-[20px] text-slate-700 my-4">\u0635\u0627\u062D\u0628 \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631 \u0647\u0633\u062A\u06CC\u062F\u061F</p><p class="text-[17px] text-slate-700 my-4">\u0628\u0627 \u0627\u0633\u0646\u067E \u0641\u0648\u062F \u06A9\u0633\u0628 \u0648 \u06A9\u0627\u0631\u062A\u0627\u0646 \u0631\u0627 \u0622\u0646\u0644\u0627\u06CC\u0646 \u06A9\u0646\u06CC\u062F \u0648 \u0641\u0631\u0648\u0634\u062A\u0627\u0646 \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u06CC\u062F.</p><button type="button" class="bg-[#ff00a6] text-slate-100 my-4 px-4 py-2 rounded-lg sm:w-4/12 sm:mx-auto lg:w-full">\u062B\u0628\u062A \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u06AF\u0627\u0646</button></div><div class="w-5/12 sm:w-full md:w-full lg:w-5/12 xl:w-5/12 2xl:w-5/12">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/image/vendor_pic.png",
    alt: " ",
    format: "webp",
    loading: "lazy",
    quality: "80",
    class: "w-full h-[300px] sm:w-9/12 sm:mx-auto lg:w-full xl:w-full"
  }, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Worker.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const errors = ref([]);
    const loading = ref(false);
    const formData = ref({
      name: "",
      email: "",
      subject: "",
      text: ""
    });
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-us" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="flex flex-row items-center justify-between sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between"><div class="w-6/12 sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 flex flex-col"><!--[-->`);
      ssrRenderList(unref(errors), (error) => {
        _push(`<div class="bg-red-600 text-slate-100"><p>${ssrInterpolate(error)}</p></div>`);
      });
      _push(`<!--]--><form><input${ssrRenderAttr("value", unref(formData).name)} type="text" class="my-2 w-full p-2 rounded-lg outline-none border border-1 border-slate-100" placeholder="\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC..."><br><input${ssrRenderAttr("value", unref(formData).email)} type="email" class="my-2 w-full p-2 rounded-lg outline-none border border-1 border-slate-100" placeholder="\u0627\u06CC\u0645\u06CC\u0644"><br><input${ssrRenderAttr("value", unref(formData).subject)} type="text" class="my-2 w-full p-2 rounded-lg outline-none border border-1 border-slate-100" placeholder="\u0645\u0648\u0636\u0648\u0639 \u067E\u06CC\u0627\u0645"><br><textarea rows="5" class="my-2 outline-none w-full" placeholder="\u067E\u06CC\u0627\u0645">${ssrInterpolate(unref(formData).text)}</textarea><br><button type="submit" class="bg-sky-600 px-4 py-2 rounded-xl text-slate-100"> \u0627\u0631\u0633\u0627\u0644 \u067E\u06CC\u0627\u0645 `);
      if (unref(loading)) {
        _push(`<div class="mx-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form></div><div class="w-6/12 sm:w-full md:w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12 sm:mt-2"><div id="map" style="${ssrRenderStyle({ "width": "100%", "height": "320px" })}"></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ContactUs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "cityes",
  __ssrInlineRender: true,
  setup(__props) {
    const listCity = reactive(
      {
        f: ["\u062A\u0647\u0631\u0627\u0646", "\u0642\u0645", "\u0627\u0631\u062F\u0628\u06CC\u0644", "\u0631\u0648\u062F\u0628\u0627\u0631", "\u0633\u0627\u0631\u06CC", "\u06A9\u0627\u0647\u0634\u0647\u0631", "\u0627\u0644\u0628\u0631\u0632", "\u06A9\u0631\u062C", "\u062E\u0648\u0632\u0634\u062A\u0627\u0646", "\u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633"],
        s: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        t: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        fo: ["\u062A\u0647\u0631\u0627\u0646", "\u0642\u0645", "\u0627\u0631\u062F\u0628\u06CC\u0644", "\u0631\u0648\u062F\u0628\u0627\u0631", "\u0633\u0627\u0631\u06CC", "\u06A9\u0627\u0647\u0634\u0647\u0631", "\u0627\u0644\u0628\u0631\u0632", "\u06A9\u0631\u062C", "\u062E\u0648\u0632\u0634\u062A\u0627\u0646", "\u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633"],
        fi: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        si: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        se: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        e: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        n: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        te: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        el: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"],
        tw: ["\u06CC\u0627\u0633\u0648\u062C", "\u0645\u0634\u0647\u062F", "\u0634\u06CC\u0631\u0627\u0632", "\u0632\u0646\u062C\u0627\u0646", "\u0627\u0635\u0641\u0647\u0627\u0646", "\u0645\u0631\u0627\u063A\u0647", "\u062A\u0628\u0631\u06CC\u0632", "\u0627\u0631\u0648\u0645\u06CC\u0647", "\u06A9\u0631\u062F\u0633\u062A\u0627\u0646", "\u06CC\u0632\u062F"]
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cityes my-8" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="flex flex-row items-center w-full justify-between sm:grid sm:grid-cols-6 md:grid md:grid-cols-6 lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between"><!--[-->`);
      ssrRenderList(unref(listCity), (city) => {
        _push(`<div class="flex flex-col"><!--[-->`);
        ssrRenderList(city, (value) => {
          _push(`<div><p class="text-slate-400 text-[11px] my-1">${ssrInterpolate(value)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/cityes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutSlider = _sfc_main$8;
  const _component_LayoutFoods = __nuxt_component_1;
  const _component_LayoutCategories = _sfc_main$6;
  const _component_LayoutProducts = __nuxt_component_3;
  const _component_LayoutApplication = __nuxt_component_4;
  const _component_LayoutWorker = __nuxt_component_5;
  const _component_LayoutContactUs = _sfc_main$2;
  const _component_LayoutCityes = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutSlider, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutFoods, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutCategories, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutApplication, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutWorker, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutCityes, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CAtumFIM.mjs.map
