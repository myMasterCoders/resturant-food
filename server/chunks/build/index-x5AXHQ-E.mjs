import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { i as useRequestHeader } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const errors = ref([]);
    const loading = ref(false);
    const { data: users } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/profile/info", {
      headers: useRequestHeader(["cookie"])
    }, "$9s2sm8iETc")), __temp = await __temp, __restore(), __temp);
    console.log(users.value);
    async function editUsers(formData) {
      try {
        loading.value = true;
        const data = await $fetch("/api/profile/edit", {
          method: "POST",
          headers: useRequestHeader(["cookie"]),
          body: {
            name: formData.name,
            email: formData.email
          }
        });
        toast.success("\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", {
          position: "top-right",
          timeout: 3e3,
          rtl: true
        });
        console.log(data);
      } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto">`);
      _push(ssrRenderComponent(_component_FormKit, {
        onSubmit: editUsers,
        type: "form",
        actions: false,
        "incomplete-message": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormKit, {
              value: unref(users).name,
              type: "text",
              name: "name",
              id: "name",
              label: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC:",
              validation: "required",
              "messages-class": "text-red-600",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              value: unref(users).email,
              type: "text",
              name: "email",
              id: "email",
              label: "\u0627\u06CC\u0645\u06CC\u0644",
              validation: "required",
              "messages-class": "text-red-600",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              value: unref(users).cellphone,
              type: "text",
              disabled: "",
              name: "cellphone",
              id: "cellphone",
              label: "\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",
              validation: "required",
              "messages-class": "text-red-600",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "submit",
              "messages-class": "text-red-600",
              "input-class": "text-slate-100 bg-sky-600 px-4 py-2 rounded-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0648\u06CC\u0631\u0627\u06CC\u0634 `);
                  if (unref(loading)) {
                    _push3(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 "),
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
                      role: "status"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormKit, {
                value: unref(users).name,
                type: "text",
                name: "name",
                id: "name",
                label: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC:",
                validation: "required",
                "messages-class": "text-red-600",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                value: unref(users).email,
                type: "text",
                name: "email",
                id: "email",
                label: "\u0627\u06CC\u0645\u06CC\u0644",
                validation: "required",
                "messages-class": "text-red-600",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                value: unref(users).cellphone,
                type: "text",
                disabled: "",
                name: "cellphone",
                id: "cellphone",
                label: "\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",
                validation: "required",
                "messages-class": "text-red-600",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "input-class": "p-1 my-4 border border-1 border-slate-200 outline-none"
              }, null, 8, ["value"]),
              createVNode(_component_FormKit, {
                type: "submit",
                "messages-class": "text-red-600",
                "input-class": "text-slate-100 bg-sky-600 px-4 py-2 rounded-lg"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0648\u06CC\u0631\u0627\u06CC\u0634 "),
                  unref(loading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
                    role: "status"
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-x5AXHQ-E.mjs.map
