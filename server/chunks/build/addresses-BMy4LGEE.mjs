import { ref, withAsyncContext, resolveComponent, withCtx, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, createVNode, useSSRContext, mergeProps } from 'vue';
import { u as useFetch } from './fetch-Bw42ECYN.mjs';
import { _ as _export_sfc, i as useRequestHeader } from './server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useToast } from 'vue-toastification';
import { reset } from '@formkit/core';
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
import '@formkit/utils';
import '@formkit/observer';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/inputs';
import '@formkit/themes';
import '@formkit/dev';
import 'pinia-plugin-persistedstate';

const _sfc_main$1 = {
  __name: "Edit",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const counter = ref(null);
    const loading = ref(false);
    const errors = ref([]);
    const cityEl = ref(null);
    const { data: editAddress, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/address/addresses", {
      headers: useRequestHeader(["cookie"])
    }, "$IYeYSKR4Xa")), __temp = await __temp, __restore(), __temp);
    console.log("address", editAddress.value);
    async function edit(formData) {
      try {
        loading.value = true;
        const data = await $fetch("/api/address/edit", {
          method: "POST",
          body: {
            ...formData,
            address_id: counter.value
          },
          headers: useRequestHeader(["cookie"])
        });
        toast.success("\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u062F\u0631\u0633 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", {
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
    function changeProvince(element) {
      cityEl.value.node.input(editAddress.value.cities.find((items) => items.province_id == element.target.value).id);
    }
    async function deleteAddress() {
      try {
        loading.value = true;
        const data = await $fetch("/api/address/delete", {
          method: "POST",
          body: {
            address_id: counter.value
          },
          headers: useRequestHeader(["cookie"])
        });
        toast.warning("\u062D\u0630\u0641 \u0627\u062F\u0631\u0633 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", {
          position: "top-right",
          timeout: 3e3,
          rtl: true
        });
        refresh();
        console.log(data);
      } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "addresses" }, _attrs))}><div class="container mx-auto p-1"><div class="w-full h-auto"><div class="flex flex-row items-center justify-between w-full flex-wrap"><!--[-->`);
      ssrRenderList(unref(editAddress).addresses, (address) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FormKit, {
          onSubmit: edit,
          type: "form",
          actions: false,
          "incomplete-message": false,
          style: { "width": "100%", "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" }
        }, {
          default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-5/12"${ssrRenderAttr("id", counter.value = address.id)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                value: address.title,
                type: "text",
                label: "\u0639\u0646\u0648\u0627\u0646",
                name: "title",
                id: "title",
                validation: "required",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-5/12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                value: address.cellphone,
                type: "text",
                label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
                name: "cellphone",
                id: "cellphone",
                validation: [["required"], ["matches", /^(\+98|0)?9\d{9}$/ig]],
                "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-5/12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                value: address.postal_code,
                type: "text",
                label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                name: "postal_code",
                id: "postal_code",
                validation: [["required"], ["matches", /^\d{5}[ -]\d{5}$/ig]],
                "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="w-5/12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                onChange: changeProvince,
                type: "select",
                label: "\u0627\u0633\u062A\u0627\u0646 \u0647\u0627",
                name: "province_id",
                id: "province_id",
                validation: "required",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(editAddress).provinces, (province) => {
                      _push3(`<option${ssrRenderAttr("value", province.id)}${_scopeId2}>${ssrInterpolate(province.name)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(editAddress).provinces, (province) => {
                        return openBlock(), createBlock("option", {
                          key: province.id,
                          value: province.id
                        }, toDisplayString(province.name), 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="w-5/12"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                ref_for: true,
                ref_key: "cityEl",
                ref: cityEl,
                type: "select",
                label: "\u0634\u0647\u0631 \u0647\u0627",
                name: "city_id",
                id: "city_id",
                validation: "required",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(editAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                      _push3(`<option${ssrRenderAttr("value", city.id)}${_scopeId2}>${ssrInterpolate(city.name)}</option>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(editAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                        return openBlock(), createBlock("option", {
                          key: city.id,
                          value: city.id
                        }, toDisplayString(city.name), 9, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><br${_scopeId}><div class="w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                value: address.address,
                style: { "width": "100%", "height": "150px" },
                type: "textarea",
                label: "\u0627\u062F\u0631\u0633",
                name: "address",
                id: "address",
                validation: "required",
                "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                "messages-class": "text-red-600",
                "input-class": "p-2 border border-1 border-slate-100"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_FormKit, {
                type: "submit",
                "input-class": " my-4 bg-sky-600 px-8 py-2 text-slate-100 rounded-xl"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
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
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="my-auto"${_scopeId}><div class="bg-red-600 px-8 py-2 mx-4 rounded-xl text-slate-100"${_scopeId}> \u062D\u0630\u0641 \u0627\u062F\u0631\u0633 `);
              if (unref(loading)) {
                _push2(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "w-5/12",
                  id: counter.value = address.id
                }, [
                  createVNode(_component_FormKit, {
                    value: address.title,
                    type: "text",
                    label: "\u0639\u0646\u0648\u0627\u0646",
                    name: "title",
                    id: "title",
                    validation: "required",
                    "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, null, 8, ["value"])
                ], 8, ["id"]),
                createVNode("div", { class: "w-5/12" }, [
                  createVNode(_component_FormKit, {
                    value: address.cellphone,
                    type: "text",
                    label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
                    name: "cellphone",
                    id: "cellphone",
                    validation: [["required"], ["matches", /^(\+98|0)?9\d{9}$/ig]],
                    "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "w-5/12" }, [
                  createVNode(_component_FormKit, {
                    value: address.postal_code,
                    type: "text",
                    label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                    name: "postal_code",
                    id: "postal_code",
                    validation: [["required"], ["matches", /^\d{5}[ -]\d{5}$/ig]],
                    "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, null, 8, ["value"])
                ]),
                createVNode("div", { class: "w-5/12" }, [
                  createVNode(_component_FormKit, {
                    onChange: changeProvince,
                    type: "select",
                    label: "\u0627\u0633\u062A\u0627\u0646 \u0647\u0627",
                    name: "province_id",
                    id: "province_id",
                    validation: "required",
                    "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(editAddress).provinces, (province) => {
                        return openBlock(), createBlock("option", {
                          key: province.id,
                          value: province.id
                        }, toDisplayString(province.name), 9, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "w-5/12" }, [
                  createVNode(_component_FormKit, {
                    ref_for: true,
                    ref_key: "cityEl",
                    ref: cityEl,
                    type: "select",
                    label: "\u0634\u0647\u0631 \u0647\u0627",
                    name: "city_id",
                    id: "city_id",
                    validation: "required",
                    "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(editAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                        return openBlock(), createBlock("option", {
                          key: city.id,
                          value: city.id
                        }, toDisplayString(city.name), 9, ["value"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1536)
                ]),
                createVNode("br"),
                createVNode("div", { class: "w-full" }, [
                  createVNode(_component_FormKit, {
                    value: address.address,
                    style: { "width": "100%", "height": "150px" },
                    type: "textarea",
                    label: "\u0627\u062F\u0631\u0633",
                    name: "address",
                    id: "address",
                    validation: "required",
                    "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                    "messages-class": "text-red-600",
                    "input-class": "p-2 border border-1 border-slate-100"
                  }, null, 8, ["value"])
                ]),
                createVNode(_component_FormKit, {
                  type: "submit",
                  "input-class": " my-4 bg-sky-600 px-8 py-2 text-slate-100 rounded-xl"
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
                }),
                createVNode("div", { class: "my-auto" }, [
                  createVNode("div", {
                    onClick: deleteAddress,
                    class: "bg-red-600 px-8 py-2 mx-4 rounded-xl text-slate-100"
                  }, [
                    createTextVNode(" \u062D\u0630\u0641 \u0627\u062F\u0631\u0633 "),
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
                      role: "status"
                    })) : createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "addresses",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const loading = ref(false);
    const errors = ref([]);
    const cityEl = ref(null);
    const { data: allAddress } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/address/addresses", {
      headers: useRequestHeader(["cookie"])
    }, "$fbC6LVXWXV")), __temp = await __temp, __restore(), __temp);
    async function create(formData) {
      try {
        loading.value = true;
        const data = await $fetch("/api/address/create", {
          method: "POST",
          body: formData,
          headers: useRequestHeader(["cookie"])
        });
        toast.success("\u0627\u06CC\u062C\u0627\u062F \u0627\u062F\u0631\u0633 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", {
          position: "top-right",
          timeout: 3e3,
          rtl: true
        });
        reset("myForm");
        console.log(data);
      } catch (error) {
        errors.value = Object.values(error.data.data.message).flat();
      } finally {
        loading.value = false;
      }
    }
    function changeProvince(element) {
      let result = allAddress.value.cities.find((items) => items.province_id == element.target.value).id;
      cityEl.value.node.input(result);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      const _component_LayoutEdit = _sfc_main$1;
      _push(`<!--[--><section class="addresses" data-v-db4b2b49><div class="container mx-auto p-1" data-v-db4b2b49><div class="w-full h-auto" data-v-db4b2b49><div class="flex flex-row items-center justify-between w-full flex-wrap" data-v-db4b2b49>`);
      _push(ssrRenderComponent(_component_FormKit, {
        id: "myForm",
        onSubmit: create,
        type: "form",
        actions: false,
        "incomplete-messages": false,
        style: { "width": "100%", "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" }
      }, {
        default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-5/12" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "\u0639\u0646\u0648\u0627\u0646",
              name: "title",
              id: "title",
              validation: "required",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-5/12" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
              name: "cellphone",
              id: "cellphone",
              validation: [["required"], ["matches", /^(\+98|0)?9\d{9}$/ig]],
              "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-5/12" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
              name: "postal_code",
              id: "postal_code",
              validation: [["required"], ["matches", /^\d{5}[ -]\d{5}$/ig]],
              "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-5/12" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              onChange: changeProvince,
              type: "select",
              label: "\u0627\u0633\u062A\u0627\u0646 \u0647\u0627",
              name: "province_id",
              id: "province_id",
              validation: "required",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(allAddress).provinces, (province) => {
                    _push3(`<option${ssrRenderAttr("value", province.id)} data-v-db4b2b49${_scopeId2}>${ssrInterpolate(province.name)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allAddress).provinces, (province) => {
                      return openBlock(), createBlock("option", {
                        key: province.id,
                        value: province.id
                      }, toDisplayString(province.name), 9, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-5/12" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              ref_key: "cityEl",
              ref: cityEl,
              type: "select",
              label: "\u0634\u0647\u0631 \u0647\u0627",
              name: "city_id",
              id: "city_id",
              validation: "required",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(allAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                    _push3(`<option${ssrRenderAttr("value", city.id)} data-v-db4b2b49${_scopeId2}>${ssrInterpolate(city.name)}</option>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                      return openBlock(), createBlock("option", {
                        key: city.id,
                        value: city.id
                      }, toDisplayString(city.name), 9, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><br data-v-db4b2b49${_scopeId}><div class="w-full" data-v-db4b2b49${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              style: { "width": "100%", "height": "150px" },
              type: "textarea",
              label: "\u0627\u062F\u0631\u0633",
              name: "address",
              id: "address",
              validation: "required",
              "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
              "messages-class": "text-red-600",
              "input-class": "p-2 border border-1 border-slate-100"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "submit",
              "input-class": " my-4 bg-sky-600 px-8 py-2 text-slate-100 rounded-xl"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0627\u06CC\u062C\u0627\u062F `);
                  if (unref(loading)) {
                    _push3(`<div class="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status" data-v-db4b2b49${_scopeId2}></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" \u0627\u06CC\u062C\u0627\u062F "),
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white",
                      role: "status"
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "w-5/12" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "\u0639\u0646\u0648\u0627\u0646",
                  name: "title",
                  id: "title",
                  validation: "required",
                  "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                })
              ]),
              createVNode("div", { class: "w-5/12" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633",
                  name: "cellphone",
                  id: "cellphone",
                  validation: [["required"], ["matches", /^(\+98|0)?9\d{9}$/ig]],
                  "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                })
              ]),
              createVNode("div", { class: "w-5/12" }, [
                createVNode(_component_FormKit, {
                  type: "text",
                  label: "\u06A9\u062F \u067E\u0633\u062A\u06CC",
                  name: "postal_code",
                  id: "postal_code",
                  validation: [["required"], ["matches", /^\d{5}[ -]\d{5}$/ig]],
                  "validation-messages": { "matches": "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A", required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                })
              ]),
              createVNode("div", { class: "w-5/12" }, [
                createVNode(_component_FormKit, {
                  onChange: changeProvince,
                  type: "select",
                  label: "\u0627\u0633\u062A\u0627\u0646 \u0647\u0627",
                  name: "province_id",
                  id: "province_id",
                  validation: "required",
                  "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allAddress).provinces, (province) => {
                      return openBlock(), createBlock("option", {
                        key: province.id,
                        value: province.id
                      }, toDisplayString(province.name), 9, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "w-5/12" }, [
                createVNode(_component_FormKit, {
                  ref_key: "cityEl",
                  ref: cityEl,
                  type: "select",
                  label: "\u0634\u0647\u0631 \u0647\u0627",
                  name: "city_id",
                  id: "city_id",
                  validation: "required",
                  "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(allAddress).cities.filter((items) => items.province_id == value.province_id), (city) => {
                      return openBlock(), createBlock("option", {
                        key: city.id,
                        value: city.id
                      }, toDisplayString(city.name), 9, ["value"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1536)
              ]),
              createVNode("br"),
              createVNode("div", { class: "w-full" }, [
                createVNode(_component_FormKit, {
                  style: { "width": "100%", "height": "150px" },
                  type: "textarea",
                  label: "\u0627\u062F\u0631\u0633",
                  name: "address",
                  id: "address",
                  validation: "required",
                  "validation-messages": { required: "\u0641\u06CC\u0644\u062F \u0631\u0648\u0631\u062F\u06CC \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A" },
                  "messages-class": "text-red-600",
                  "input-class": "p-2 border border-1 border-slate-100"
                })
              ]),
              createVNode(_component_FormKit, {
                type: "submit",
                "input-class": " my-4 bg-sky-600 px-8 py-2 text-slate-100 rounded-xl"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0627\u06CC\u062C\u0627\u062F "),
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
      _push(`</div></div></div></section><section data-v-db4b2b49>`);
      _push(ssrRenderComponent(_component_LayoutEdit, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/addresses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addresses = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db4b2b49"]]);

export { addresses as default };
//# sourceMappingURL=addresses-BMy4LGEE.mjs.map
