import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
import { b as authUsers } from './server.mjs';
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

const _sfc_main$2 = {
  __name: "ResendOtp",
  __ssrInlineRender: true,
  emits: ["resendError"],
  setup(__props, { emit: __emit }) {
    useToast();
    const loading = ref(false);
    const counter = ref(10);
    const flag = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center justify-end" }, _attrs))}>`);
      if (unref(flag)) {
        _push(`<div><button type="button" class="bg-sky-600 px-4 py-2 rounded-xl text-slate-100 text-[13px] mx-4"> \u0627\u0631\u0633\u0627\u0644 \u062F\u0648\u0628\u0627\u0631\u0647 \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F `);
        if (unref(loading)) {
          _push(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<div><span>00</span><span>:</span><span>${ssrInterpolate(unref(counter))}</span></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/ResendOtp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CheckOtp",
  __ssrInlineRender: true,
  setup(__props) {
    authUsers();
    useToast();
    const errors = ref([]);
    const loading = ref(false);
    const otp = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutResendOtp = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "check-otp" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><!--[-->`);
      ssrRenderList(unref(errors), (error) => {
        _push(`<div class="bg-red-600 text-slate-100"><p>${ssrInterpolate(error)}</p></div>`);
      });
      _push(`<!--]--><div class="w-4/12 mx-auto"><div class="flex flex-col"><form><label>\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F:</label><br><input type="text"${ssrRenderAttr("value", unref(otp))} class="p-2 w-full my-4 border border-1 border-slate-200 outline-none" placeholder="\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F"><br><button type="submit" class="bg-sky-600 rounded-xl px-8 py-2 text-slate-100 text-[15px]"> \u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F `);
      if (unref(loading)) {
        _push(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></form>`);
      _push(ssrRenderComponent(_component_LayoutResendOtp, {
        onResendError: (error) => errors.value = error,
        class: "my-4"
      }, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/CheckOtp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const cellphone = ref("");
    const errors = ref([]);
    const loading = ref(false);
    const flag = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutCheckOtp = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "login" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto">`);
      if (unref(flag)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_LayoutCheckOtp, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="w-4/12 mx-auto"><div class="flex flex-col"><!--[-->`);
        ssrRenderList(unref(errors), (error) => {
          _push(`<div class="bg-red-600 text-slate-100"><p>${ssrInterpolate(error)}</p></div>`);
        });
        _push(`<!--]--><form><label class="my-2">\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F:</label><br><input type="text"${ssrRenderAttr("value", unref(cellphone))} class="my-4 w-full p-2 outline-none border border-1 border-slate-200" placeholder="\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644"><br><button type="submit" class="my-4 bg-sky-600 px-8 py-2 rounded-xl text-slate-100 text-[15px]"> \u0627\u0631\u0633\u0627\u0644 `);
        if (unref(loading)) {
          _push(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></form></div></div></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Login-Csg13ehr.mjs.map
