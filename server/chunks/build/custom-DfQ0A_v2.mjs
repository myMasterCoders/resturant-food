import { _ as __nuxt_component_0 } from './nuxt-link-BfpQVTeX.mjs';
import { ref, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { b as authUsers } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
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

const _sfc_main = {
  __name: "custom",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    ref([]);
    authUsers();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "custom" }, _attrs))}><div class="container mx-auto p-1"><div class="w-ful h-auto"><div class="flex flex-row items-center justify-between"><div class="w-3/12 flex flex-col"><ul class="flex flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-900"${_scopeId}>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-900" }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/addresses" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-900"${_scopeId}> \u0622\u062F\u0631\u0633 \u0647\u0627</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-900" }, " \u0622\u062F\u0631\u0633 \u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/profile/transaction" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="p-2 text-slate-900"${_scopeId}>\u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627</li>`);
          } else {
            return [
              createVNode("li", { class: "p-2 text-slate-900" }, "\u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><button type="button" class="my-2 text-slate-900">\u062E\u0631\u0648\u062C</button></div></ul></div><div class="w-8/12">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=custom-DfQ0A_v2.mjs.map
