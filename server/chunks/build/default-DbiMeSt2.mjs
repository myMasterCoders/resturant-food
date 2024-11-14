import { _ as __nuxt_component_0$1 } from './nuxt-link-BfpQVTeX.mjs';
import { _ as _sfc_main$3 } from './NuxtImg-CRLf3OoQ.mjs';
import { _ as _export_sfc, b as authUsers, e as __nuxt_component_2$1 } from './server.mjs';
import { useSSRContext, ref, computed, resolveComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { u as useCounterStore } from './useStore-cJ6784Rb.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-Ds4Yf0H0.mjs';
import '@unhead/shared';
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
import 'vue-toastification';

const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = authUsers();
    const store = useCounterStore();
    const flag = ref(false);
    const transAction = ref(160);
    computed(() => {
      return store.productsCounter;
    });
    function showSlide() {
      flag.value = !flag.value;
      transAction.value = 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TransitionScale = resolveComponent("TransitionScale");
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$3;
      const _component_ClientOnly = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "header relative" }, _attrs))} data-v-053b18ef><div class="container mx-auto p-2" data-v-053b18ef><div class="w-full h-auto" data-v-053b18ef>`);
      _push(ssrRenderComponent(_component_TransitionScale, { origin: "top right" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="duration-500 transition absolute w-full right-[5px] lg:invisible" style="${ssrRenderStyle({ "z-index": "10" })}" data-v-053b18ef${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
              onClick: showSlide,
              icon: ["fas", unref(flag) ? "times" : "bars"],
              class: "relative duration-500 transition text-slate-900 text-start p-4 leading-1"
            }, null, _parent2, _scopeId));
            if (unref(flag)) {
              _push2(`<div style="${ssrRenderStyle([{ transform: `translateX(${unref(transAction)})px` }, { "z-index": "20" }])}" class="relative duration-500 transition p-2 w-[150px] h-[250px]" data-v-053b18ef${_scopeId}><ul class="flex flex-col bg-slate-200 w-[500px] transition-all duration-500 motion" data-v-053b18ef${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2" data-v-053b18ef${_scopeId2}>\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC</li>`);
                  } else {
                    return [
                      createVNode("li", {
                        onClick: ($event) => flag.value = false,
                        class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                      }, "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/menu" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2" data-v-053b18ef${_scopeId2}>\u0645\u0646\u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A</li>`);
                  } else {
                    return [
                      createVNode("li", {
                        onClick: ($event) => flag.value = false,
                        class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                      }, "\u0645\u0646\u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2" data-v-053b18ef${_scopeId2}>\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627</li>`);
                  } else {
                    return [
                      createVNode("li", {
                        onClick: ($event) => flag.value = false,
                        class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                      }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<li class="p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2" data-v-053b18ef${_scopeId2}>\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627</li>`);
                  } else {
                    return [
                      createVNode("li", {
                        onClick: ($event) => flag.value = false,
                        class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                      }, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: "duration-500 transition absolute w-full right-[5px] lg:invisible",
                style: { "z-index": "10" }
              }, [
                createVNode(unref(FontAwesomeIcon), {
                  onClick: showSlide,
                  icon: ["fas", unref(flag) ? "times" : "bars"],
                  class: "relative duration-500 transition text-slate-900 text-start p-4 leading-1"
                }, null, 8, ["icon"]),
                unref(flag) ? (openBlock(), createBlock("div", {
                  key: 0,
                  style: [{ transform: `translateX(${unref(transAction)})px` }, { "z-index": "20" }],
                  class: "relative duration-500 transition p-2 w-[150px] h-[250px]"
                }, [
                  createVNode("ul", { class: "flex flex-col bg-slate-200 w-[500px] transition-all duration-500 motion" }, [
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        createVNode("li", {
                          onClick: ($event) => flag.value = false,
                          class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                        }, "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC", 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/menu" }, {
                      default: withCtx(() => [
                        createVNode("li", {
                          onClick: ($event) => flag.value = false,
                          class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                        }, "\u0645\u0646\u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A", 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/about" }, {
                      default: withCtx(() => [
                        createVNode("li", {
                          onClick: ($event) => flag.value = false,
                          class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                        }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627", 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtLink, { to: "/contact" }, {
                      default: withCtx(() => [
                        createVNode("li", {
                          onClick: ($event) => flag.value = false,
                          class: "p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-100 duration-500 transition text-slate-900 rounded-xl text-[13px] bg-slate-200 shadow-xl my-2"
                        }, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627", 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ])
                ], 4)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-row items-center justify-between p-4 w-full sm:invisible md:invisible lg:visible lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:w-full xl:justify-between 2xl:flex 2xl:flex-row 2xl:items-center 2xl:justify-between" data-v-053b18ef><div class="w-6/12 flex flex-row items-center lg:w-7/12 xl:w-6/12 2xl:w-6/12" data-v-053b18ef>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/image/images.png",
              alt: "",
              format: "webp",
              loading: "lazy",
              quality: "80",
              class: "w-[150px] h-[80px] lg:w-[100px] lg:h-[80px] xl:w-[150px] xl:h-[80px] p-2 mx-2 rounded-xl"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/image/images.png",
                alt: "",
                format: "webp",
                loading: "lazy",
                quality: "80",
                class: "w-[150px] h-[80px] lg:w-[100px] lg:h-[80px] xl:w-[150px] xl:h-[80px] p-2 mx-2 rounded-xl"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="flex flex-row items-center justify-between" data-v-053b18ef>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-800 text-[13px] cursor-pointer" data-v-053b18ef${_scopeId}>\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-800 text-[13px] cursor-pointer" }, "\u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/menu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-800 text-[13px] cursor-pointer" data-v-053b18ef${_scopeId}>\u0645\u0646\u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-800 text-[13px] cursor-pointer" }, "\u0645\u0646\u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-800 text-[13px] cursor-pointer" data-v-053b18ef${_scopeId}>\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-800 text-[13px] cursor-pointer" }, "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-800 text-[13px] cursor-pointer" data-v-053b18ef${_scopeId}>\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-800 text-[13px] cursor-pointer" }, "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ul></div><div class="w-3/12 flex flex-row items-center lg:w-4/12 xl:w-3/12 2xl:w-3/12 relative" data-v-053b18ef>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/saler" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-slate-900 mx-4 text-[15px]" data-v-053b18ef${_scopeId}> \u062B\u0628\u062A \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u06AF\u0627\u0646 </p>`);
          } else {
            return [
              createVNode("p", { class: "text-slate-900 mx-4 text-[15px]" }, " \u062B\u0628\u062A \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u06AF\u0627\u0646 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(user)) {
        _push(`<div data-v-053b18ef>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="bg-[#ff00a6] px-2 py-2 rounded-lg text-slate-100 text-[15px]" data-v-053b18ef${_scopeId}>\u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "bg-[#ff00a6] px-2 py-2 rounded-lg text-slate-100 text-[15px]"
                }, "\u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-053b18ef>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/Login" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="bg-[#ff00a6] px-2 py-2 rounded-lg text-slate-100 text-[15px]" data-v-053b18ef${_scopeId}>\u0648\u0631\u0648\u062F \u06CC\u0627 \u0639\u0636\u0648\u0628\u062A</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "bg-[#ff00a6] px-2 py-2 rounded-lg text-slate-100 text-[15px]"
                }, "\u0648\u0631\u0648\u062F \u06CC\u0627 \u0639\u0636\u0648\u0628\u062A")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-053b18ef"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="flex flex-row items-center w-full justify-between sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full xl:flex xl:flex-row xl:items-center xl:w-full xl:justify-between"><div class="w-4/12 sm:w-full h-[200px] flex flex-col"><div class="flex flex-row items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/image/images.png",
        alt: "",
        format: "webp",
        quality: "80",
        loading: "lazy",
        class: "w-[60px] h-[60px] mx-8"
      }, null, _parent));
      _push(`<div class="flex flex-col"><p class="text-[ff00a6] my-2">\u0627\u0633\u0646\u067E \u0641\u0648\u062F</p><p class="text-[12px]">\u062A\u062C\u0631\u0628\u0647 \u0633\u0641\u0627\u0631\u0634 \u063A\u0630\u0627\u060C \u0627\u0632 \u0632\u0648\u062F\u0641\u0648\u062F \u062A\u0627 \u0627\u0633\u0646\u067E\u200C\u0641\u0648\u062F</p></div></div><div class="flex flex-row items-center justify-center my-8">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fab", "twitter"],
        class: "text-slate-600 text-[20px] p-2 rounded-full shadow-lg mx-2"
      }, null, _parent));
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fab", "instagram"],
        class: "text-slate-600 text-[20px] p-2 rounded-full shadow-lg mx-2"
      }, null, _parent));
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fab", "youtube"],
        class: "text-slate-600 text-[20px] p-2 rounded-full shadow-lg mx-2"
      }, null, _parent));
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: ["fab", "linkedin"],
        class: "text-slate-600 text-[20px] p-2 rounded-full shadow-lg mx-2"
      }, null, _parent));
      _push(`</div></div><div class="w-2/12 sm:w-full h-[200px]"><ul class="flex flex-col"><li class="p-2 text-slate-600 text-[12px]">\u062F\u0631\u0628\u0627\u0631\u0647 \u0627\u0633\u0646\u067E \u0641\u0648\u062F</li><li class="p-2 text-slate-600 text-[12px]">\u0641\u0631\u0635\u062A \u0647\u0627\u06CC \u0634\u063A\u0644\u06CC</li><li class="p-2 text-slate-600 text-[12px]">\u0648\u0628\u0644\u0627\u06AF</li><li class="p-2 text-slate-600 text-[12px]">\u0642\u0648\u0627\u0646\u0646\u06CC\u0646 \u0633\u0627\u06CC\u062A</li><li class="p-2 text-slate-600 text-[12px]">\u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC</li><li class="p-2 text-slate-600 text-[12px]">\u062B\u0628\u062A \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u06AF\u0627\u0646</li></ul></div><div class="w-2/12 sm:w-full h-[200px]"><ul class="flex flex-col"><li class="p-2 text-slate-600 text-[12px]">\u062A\u0645\u0627\u0633 \u0628\u0627 \u0627\u0633\u0646\u067E \u0641\u0648\u062F</li><li class="p-2 text-slate-600 text-[12px]">\u067E\u0631\u0633\u0634 \u0647\u0627\u06CC \u0645\u062A\u062F\u0627\u0648\u0644</li><li class="p-2 text-slate-600 text-[12px]">\u062B\u0628\u062A \u0628\u0631\u0646\u0627\u0645\u0647</li><li class="p-2 text-slate-600 text-[12px]">\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0645\u0648\u0628\u0627\u06CC\u0644</li></ul></div><div class="w-2/12 sm:w-full h-[200px]">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/image/senf.png",
        alt: "",
        format: "webp",
        loading: "lazy",
        quality: "80",
        class: "w-[80px] h-[80px]"
      }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader = __nuxt_component_0;
  const _component_LayoutFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><header>`);
  _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
  _push(`</header><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer>`);
  _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DbiMeSt2.mjs.map
