import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { _ as _export_sfc, i as useRequestHeader } from './server.mjs';
import { ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "transaction",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref(0);
    const { data, refresh, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/transaction/transactions", {
      headers: useRequestHeader(["cookie"])
    }, "$tjbg47K5JD")), __temp = await __temp, __restore(), __temp);
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full flex flex-row items-center justify-between" data-v-827e70dd><div class="w-2/12 p-2" data-v-827e70dd>\u0634\u0645\u0627\u0631\u0647 \u0633\u0641\u0627\u0631\u0634</div><div class="w-2/12 p-2" data-v-827e70dd>\u0645\u0628\u0644\u063A</div><div class="w-2/12 p-2" data-v-827e70dd>\u0648\u0636\u0639\u06CC\u062A</div><div class="w-2/12 p-2" data-v-827e70dd>\u0634\u0645\u0627\u0631\u0647 \u067E\u06CC\u06AF\u06CC\u0631\u06CC</div><div class="w-2/12 p-2" data-v-827e70dd>\u062A\u0627\u0631\u06CC\u062E</div></div><div class="w-4/12 mx-auto" data-v-827e70dd><!--[-->`);
      ssrRenderList(unref(data).meta.links.slice(1, -1), (label) => {
        _push(`<div class="${ssrRenderClass([{ bgBlack: label.active }, "w-[20px] h-[20px] px-2"])}"${ssrRenderAttr("value", label.id)} data-v-827e70dd><p class="text-center" data-v-827e70dd>${ssrInterpolate(label.label)}</p></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/transaction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transaction = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-827e70dd"]]);

export { transaction as default };
//# sourceMappingURL=transaction-CLiCBu7f.mjs.map
