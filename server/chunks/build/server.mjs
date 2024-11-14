import { hasInjectionContext, inject, version, unref, defineComponent, ref, provide, createElementBlock, h, computed, shallowReactive, watch, Suspense, nextTick, Fragment, Transition, getCurrentInstance, toRef, isRef, mergeProps, useSSRContext, createApp, effectScope, reactive, getCurrentScope, isReactive, toRaw, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, onScopeDispose, defineAsyncComponent, shallowRef, isReadonly, toRefs, markRaw, triggerRef, withCtx, isShallow, watchEffect, createTextVNode, resolveComponent } from 'vue';
import { $ as $fetch$1, o as hasProtocol, p as isScriptProtocol, q as joinURL, w as withQuery, l as createError$1, t as getRequestHeader, v as defu, x as sanitizeStatusCode, y as createHooks, z as klona, A as parse, B as destr, C as isEqual, s as setCookie, g as getCookie, D as deleteCookie, E as toRouteMatcher, F as createRouter$1 } from '../runtime.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { getActiveHead, CapoPlugin } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { createClasses, generateClassList, createMessage, resetCount, createConfig, getNode, clearErrors, setErrors, submitForm, reset, error, createNode, warn, watchRegistry, isNode, sugar, isDOM, isComponent, isConditional, compile } from '@formkit/core';
import { extend, empty, has, eq, cloneAny, shallowClone, undefine, camel, kebab, nodeProps, only, except, oncePerTick, slugify, isObject, token, isPojo } from '@formkit/utils';
import { createObserver } from '@formkit/observer';
import * as defaultRules from '@formkit/rules';
import { createValidationPlugin } from '@formkit/validation';
import { createI18nPlugin, en } from '@formkit/i18n';
import { createSection, createLibraryPlugin, inputs, runtimeProps } from '@formkit/inputs';
import { createThemePlugin } from '@formkit/themes';
import { register } from '@formkit/dev';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const fetchDefaults = {};
const appId = "nuxt-app";
function getNuxtAppCtx(appName = appId) {
  return getContext(appName, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _name: appId,
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.12.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._name);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(appName) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(appName).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(appName) {
  const nuxtAppInstance = tryUseNuxtApp(appName);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error2) => {
  const nuxtError = createError(error2);
  try {
    const nuxtApp = useNuxtApp();
    const error22 = useError();
    if (false) ;
    error22.value = error22.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error2) => !!error2 && typeof error2 === "object" && NUXT_ERROR_SIGNATURE in error2;
const createError = (error2) => {
  const nuxtError = createError$1(error2);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error2) => {
      restore();
      throw error2;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$1 = {
  middleware: "guest"
};
const __nuxt_page_meta = {
  middleware: "auth"
};
const _routes = [
  {
    name: "about",
    path: "/about",
    component: () => import('./index-QFRuLSuH.mjs').then((m) => m.default || m)
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import('./cart-3cYKQuKb.mjs').then((m) => m.default || m)
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import('./index-BeiaicyS.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-CAtumFIM.mjs').then((m) => m.default || m)
  },
  {
    name: "Login",
    path: "/Login",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./Login-Csg13ehr.mjs').then((m) => m.default || m)
  },
  {
    name: "menu",
    path: "/menu",
    component: () => import('./menu-DO3ayl7Z.mjs').then((m) => m.default || m)
  },
  {
    name: "payment-verify",
    path: "/payment/verify",
    component: () => import('./verify-BPbbgaoy.mjs').then((m) => m.default || m)
  },
  {
    name: "products-slug",
    path: "/products/:slug()",
    component: () => import('./_slug_-CvCHX_EZ.mjs').then((m) => m.default || m)
  },
  {
    name: __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name,
    path: "/profile",
    meta: __nuxt_page_meta || {},
    component: () => import('./profile-C14Ti9gM.mjs').then((m) => m.default || m),
    children: [
      {
        name: "profile-addresses",
        path: "addresses",
        component: () => import('./addresses-BMy4LGEE.mjs').then((m) => m.default || m)
      },
      {
        name: "profile",
        path: "",
        component: () => import('./index-x5AXHQ-E.mjs').then((m) => m.default || m)
      },
      {
        name: "profile-transaction",
        path: "transaction",
        component: () => import('./transaction-CLiCBu7f.mjs').then((m) => m.default || m)
      }
    ]
  },
  {
    name: "saler",
    path: "/saler",
    component: () => import('./index-BLAsnMiy.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return Number.parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  auth: () => import('./auth-F61n4eI2.mjs'),
  guest: () => import('./guest-2k1toCy2.mjs')
};
const plugin$2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production") )) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production") )) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error2) {
        triggerSubscriptions(onErrorCallbackList, error2);
        throw error2;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error2) => {
          triggerSubscriptions(onErrorCallbackList, error2);
          return Promise.reject(error2);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeader(header) {
  const event = useRequestEvent();
  return event ? getRequestHeader(event, header) : void 0;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_2$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var vueBindings, bindings_default;
var init_bindings = __esm({
  "packages/vue/src/bindings.ts"() {
    vueBindings = function vueBindings2(node) {
      node.ledger.count("blocking", (m) => m.blocking);
      const isValid = ref(!node.ledger.value("blocking"));
      node.ledger.count("errors", (m) => m.type === "error");
      const hasErrors = ref(!!node.ledger.value("errors"));
      let hasTicked = false;
      nextTick(() => {
        hasTicked = true;
      });
      const availableMessages = reactive(
        node.store.reduce((store, message3) => {
          if (message3.visible) {
            store[message3.key] = message3;
          }
          return store;
        }, {})
      );
      const validationVisibility = ref(
        node.props.validationVisibility || (node.props.type === "checkbox" ? "dirty" : "blur")
      );
      node.on("prop:validationVisibility", ({ payload }) => {
        validationVisibility.value = payload;
      });
      const hasShownErrors = ref(validationVisibility.value === "live");
      const isRequired = ref(false);
      const checkForRequired = (parsedRules) => {
        isRequired.value = (parsedRules ?? []).some(
          (rule) => rule.name === "required"
        );
      };
      checkForRequired(node.props.parsedRules);
      node.on("prop:parsedRules", ({ payload }) => checkForRequired(payload));
      const items = ref(node.children.map((child) => child.uid));
      const validationVisible = computed(() => {
        if (!context.state)
          return false;
        if (context.state.submitted)
          return true;
        if (!hasShownErrors.value && !context.state.settled) {
          return false;
        }
        switch (validationVisibility.value) {
          case "live":
            return true;
          case "blur":
            return context.state.blurred;
          case "dirty":
            return context.state.dirty;
          default:
            return false;
        }
      });
      const isInvalid = computed(() => {
        return context.state.failing && validationVisible.value;
      });
      const isComplete = computed(() => {
        return context && hasValidation.value ? isValid.value && !hasErrors.value : context.state.dirty && !empty(context.value);
      });
      const hasValidation = ref(
        Array.isArray(node.props.parsedRules) && node.props.parsedRules.length > 0
      );
      node.on("prop:parsedRules", ({ payload: rules }) => {
        hasValidation.value = Array.isArray(rules) && rules.length > 0;
      });
      const messages3 = computed(() => {
        const visibleMessages = {};
        for (const key in availableMessages) {
          const message3 = availableMessages[key];
          if (message3.type !== "validation" || validationVisible.value) {
            visibleMessages[key] = message3;
          }
        }
        return visibleMessages;
      });
      const ui = reactive(
        node.store.reduce((messages4, message3) => {
          if (message3.type === "ui" && message3.visible)
            messages4[message3.key] = message3;
          return messages4;
        }, {})
      );
      const passing = computed(() => !context.state.failing);
      const cachedClasses = reactive({});
      const classes2 = new Proxy(cachedClasses, {
        get(...args) {
          const [target, property] = args;
          let className = Reflect.get(...args);
          if (!className && typeof property === "string") {
            if (!has(target, property) && !property.startsWith("__v")) {
              const observedNode = createObserver(node);
              observedNode.watch((node2) => {
                const rootClasses = typeof node2.config.rootClasses === "function" ? node2.config.rootClasses(property, node2) : {};
                const globalConfigClasses = node2.config.classes ? createClasses(property, node2, node2.config.classes[property]) : {};
                const classesPropClasses = createClasses(
                  property,
                  node2,
                  node2.props[`_${property}Class`]
                );
                const sectionPropClasses = createClasses(
                  property,
                  node2,
                  node2.props[`${property}Class`]
                );
                className = generateClassList(
                  node2,
                  property,
                  rootClasses,
                  globalConfigClasses,
                  classesPropClasses,
                  sectionPropClasses
                );
                target[property] = className ?? "";
              });
            }
          }
          return className;
        }
      });
      node.on("prop:rootClasses", () => {
        const keys = Object.keys(cachedClasses);
        for (const key of keys) {
          delete cachedClasses[key];
        }
      });
      const describedBy = computed(() => {
        const describers = [];
        if (context.help) {
          describers.push(`help-${node.props.id}`);
        }
        for (const key in messages3.value) {
          describers.push(`${node.props.id}-${key}`);
        }
        return describers.length ? describers.join(" ") : void 0;
      });
      const value = ref(node.value);
      const _value = ref(node.value);
      const context = reactive({
        _value,
        attrs: node.props.attrs,
        disabled: node.props.disabled,
        describedBy,
        fns: {
          length: (obj) => Object.keys(obj).length,
          number: (value2) => Number(value2),
          string: (value2) => String(value2),
          json: (value2) => JSON.stringify(value2),
          eq
        },
        handlers: {
          blur: (e) => {
            if (!node)
              return;
            node.store.set(
              /* @__PURE__ */ createMessage({ key: "blurred", visible: false, value: true })
            );
            if (typeof node.props.attrs.onBlur === "function") {
              node.props.attrs.onBlur(e);
            }
          },
          touch: () => {
            var _a;
            const doCompare = context.dirtyBehavior === "compare";
            if (((_a = node.store.dirty) == null ? void 0 : _a.value) && !doCompare)
              return;
            const isDirty = !eq(node.props._init, node._value);
            if (!isDirty && !doCompare)
              return;
            node.store.set(
              /* @__PURE__ */ createMessage({ key: "dirty", visible: false, value: isDirty })
            );
          },
          DOMInput: (e) => {
            node.input(e.target.value);
            node.emit("dom-input-event", e);
          }
        },
        help: node.props.help,
        id: node.props.id,
        items,
        label: node.props.label,
        messages: messages3,
        didMount: false,
        node: markRaw(node),
        options: node.props.options,
        defaultMessagePlacement: true,
        slots: node.props.__slots,
        state: {
          blurred: false,
          complete: isComplete,
          dirty: false,
          empty: empty(value),
          submitted: false,
          settled: node.isSettled,
          valid: isValid,
          invalid: isInvalid,
          errors: hasErrors,
          rules: hasValidation,
          validationVisible,
          required: isRequired,
          failing: false,
          passing
        },
        type: node.props.type,
        family: node.props.family,
        ui,
        value,
        classes: classes2
      });
      node.on("created", () => {
        if (!eq(context.value, node.value)) {
          _value.value = node.value;
          value.value = node.value;
          triggerRef(value);
          triggerRef(_value);
        }
        (async () => {
          await node.settled;
          if (node)
            node.props._init = cloneAny(node.value);
        })();
      });
      node.on("mounted", () => {
        context.didMount = true;
      });
      node.on("settled", ({ payload: isSettled }) => {
        context.state.settled = isSettled;
      });
      function observeProps(observe) {
        const propNames = Array.isArray(observe) ? observe : Object.keys(observe);
        propNames.forEach((prop) => {
          prop = camel(prop);
          if (!has(context, prop)) {
            context[prop] = node.props[prop];
          }
          node.on(`prop:${prop}`, ({ payload }) => {
            context[prop] = payload;
          });
        });
      }
      const rootProps = () => {
        const props = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ];
        const iconPattern = /^[a-zA-Z-]+(?:-icon|Icon)$/;
        const matchingProps = Object.keys(node.props).filter((prop) => {
          return iconPattern.test(prop);
        });
        return props.concat(matchingProps);
      };
      observeProps(rootProps());
      function definedAs(definition3) {
        if (definition3.props)
          observeProps(definition3.props);
      }
      node.props.definition && definedAs(node.props.definition);
      node.on("added-props", ({ payload }) => observeProps(payload));
      node.on("input", ({ payload }) => {
        if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
          _value.value = shallowClone(payload);
        } else {
          _value.value = payload;
          triggerRef(_value);
        }
      });
      node.on("commitRaw", ({ payload }) => {
        if (node.type !== "input" && !isRef(payload) && !isReactive(payload)) {
          value.value = _value.value = shallowClone(payload);
        } else {
          value.value = _value.value = payload;
          triggerRef(value);
        }
        node.emit("modelUpdated");
      });
      node.on("commit", ({ payload }) => {
        var _a;
        if ((!context.state.dirty || context.dirtyBehavior === "compare") && node.isCreated && hasTicked) {
          if (!((_a = node.store.validating) == null ? void 0 : _a.value)) {
            context.handlers.touch();
          } else {
            const receipt = node.on("message-removed", ({ payload: message3 }) => {
              if (message3.key === "validating") {
                context.handlers.touch();
                node.off(receipt);
              }
            });
          }
        }
        if (isComplete && node.type === "input" && hasErrors.value && !undefine(node.props.preserveErrors)) {
          node.store.filter(
            (message3) => {
              var _a2;
              return !(message3.type === "error" && ((_a2 = message3.meta) == null ? void 0 : _a2.autoClear) === true);
            }
          );
        }
        if (node.type === "list" && node.sync) {
          items.value = node.children.map((child) => child.uid);
        }
        context.state.empty = empty(payload);
      });
      const updateState = async (message3) => {
        if (message3.type === "ui" && message3.visible && !message3.meta.showAsMessage) {
          ui[message3.key] = message3;
        } else if (message3.visible) {
          availableMessages[message3.key] = message3;
        } else if (message3.type === "state") {
          context.state[message3.key] = !!message3.value;
        }
      };
      node.on("message-added", (e) => updateState(e.payload));
      node.on("message-updated", (e) => updateState(e.payload));
      node.on("message-removed", ({ payload: message3 }) => {
        delete ui[message3.key];
        delete availableMessages[message3.key];
        delete context.state[message3.key];
      });
      node.on("settled:blocking", () => {
        isValid.value = true;
      });
      node.on("unsettled:blocking", () => {
        isValid.value = false;
      });
      node.on("settled:errors", () => {
        hasErrors.value = false;
      });
      node.on("unsettled:errors", () => {
        hasErrors.value = true;
      });
      watch(validationVisible, (value2) => {
        if (value2) {
          hasShownErrors.value = true;
        }
      });
      node.context = context;
      node.emit("context", node, false);
      node.on("destroyed", () => {
        node.context = void 0;
        node = null;
      });
    };
    bindings_default = vueBindings;
  }
});
var defaultConfig_exports = {};
__export(defaultConfig_exports, {
  defaultConfig: () => defaultConfig
});
var defaultConfig;
var init_defaultConfig = __esm({
  "packages/vue/src/defaultConfig.ts"() {
    init_bindings();
    defaultConfig = (options = {}) => {
      register();
      const {
        rules = {},
        locales = {},
        inputs: inputs$1 = {},
        messages: messages3 = {},
        locale = void 0,
        theme = void 0,
        iconLoaderUrl = void 0,
        iconLoader = void 0,
        icons = {},
        ...nodeOptions
      } = options;
      const validation = createValidationPlugin({
        ...defaultRules,
        ...rules || {}
      });
      const i18n = createI18nPlugin(
        extend({ en, ...locales || {} }, messages3)
      );
      const library = createLibraryPlugin(inputs, inputs$1);
      const themePlugin = createThemePlugin(theme, icons, iconLoaderUrl, iconLoader);
      return extend(
        {
          plugins: [library, themePlugin, bindings_default, i18n, validation],
          ...!locale ? {} : { config: { locale } }
        },
        nodeOptions || {},
        true
      );
    };
  }
});
var ssrCompleteRegistry = /* @__PURE__ */ new Map();
function ssrComplete(app) {
  const callbacks = ssrCompleteRegistry.get(app);
  if (!callbacks)
    return;
  for (const callback of callbacks) {
    callback();
  }
  callbacks.clear();
  ssrCompleteRegistry.delete(app);
}
function onSSRComplete(app, callback) {
  var _a;
  if (!app)
    return;
  if (!ssrCompleteRegistry.has(app))
    ssrCompleteRegistry.set(app, /* @__PURE__ */ new Set());
  (_a = ssrCompleteRegistry.get(app)) == null ? void 0 : _a.add(callback);
}
var memo = {};
var memoKeys = {};
var instanceKey;
var instanceScopes = /* @__PURE__ */ new WeakMap();
var raw = "__raw__";
var isClassProp = /[a-zA-Z0-9\-][cC]lass$/;
function getRef(token3, data) {
  const value = ref(null);
  if (token3 === "get") {
    const nodeRefs = {};
    value.value = get.bind(null, nodeRefs);
    return value;
  }
  const path = token3.split(".");
  watchEffect(() => {
    value.value = getValue(
      isRef(data) ? data.value : data,
      path
    );
  });
  return value;
}
function getValue(set2, path) {
  if (Array.isArray(set2)) {
    for (const subset of set2) {
      const value = subset !== false && getValue(subset, path);
      if (value !== void 0)
        return value;
    }
    return void 0;
  }
  let foundValue = void 0;
  let obj = set2;
  for (const i in path) {
    const key = path[i];
    if (typeof obj !== "object" || obj === null) {
      foundValue = void 0;
      break;
    }
    const currentValue = obj[key];
    if (Number(i) === path.length - 1 && currentValue !== void 0) {
      foundValue = typeof currentValue === "function" ? currentValue.bind(obj) : currentValue;
      break;
    }
    obj = currentValue;
  }
  return foundValue;
}
function get(nodeRefs, id) {
  if (typeof id !== "string")
    return warn(650);
  if (!(id in nodeRefs))
    nodeRefs[id] = ref(void 0);
  if (nodeRefs[id].value === void 0) {
    nodeRefs[id].value = null;
    const root = getNode(id);
    if (root)
      nodeRefs[id].value = root.context;
    watchRegistry(id, ({ payload: node }) => {
      nodeRefs[id].value = isNode(node) ? node.context : node;
    });
  }
  return nodeRefs[id].value;
}
function parseSchema(library, schema, memoKey) {
  function parseCondition(library2, node) {
    const condition = provider(compile(node.if), { if: true });
    const children = createElements(library2, node.then);
    const alternate = node.else ? createElements(library2, node.else) : null;
    return [condition, children, alternate];
  }
  function parseConditionAttr(attr, _default) {
    var _a, _b;
    const condition = provider(compile(attr.if));
    let b = () => _default;
    let a = () => _default;
    if (typeof attr.then === "object") {
      a = parseAttrs(attr.then, void 0);
    } else if (typeof attr.then === "string" && ((_a = attr.then) == null ? void 0 : _a.startsWith("$"))) {
      a = provider(compile(attr.then));
    } else {
      a = () => attr.then;
    }
    if (has(attr, "else")) {
      if (typeof attr.else === "object") {
        b = parseAttrs(attr.else);
      } else if (typeof attr.else === "string" && ((_b = attr.else) == null ? void 0 : _b.startsWith("$"))) {
        b = provider(compile(attr.else));
      } else {
        b = () => attr.else;
      }
    }
    return () => condition() ? a() : b();
  }
  function parseAttrs(unparsedAttrs, bindExp, _default = {}) {
    const explicitAttrs = new Set(Object.keys(unparsedAttrs || {}));
    const boundAttrs = bindExp ? provider(compile(bindExp)) : () => ({});
    const setters = [
      (attrs) => {
        const bound = boundAttrs();
        for (const attr in bound) {
          if (!explicitAttrs.has(attr)) {
            attrs[attr] = bound[attr];
          }
        }
      }
    ];
    if (unparsedAttrs) {
      if (isConditional(unparsedAttrs)) {
        const condition = parseConditionAttr(
          unparsedAttrs,
          _default
        );
        return condition;
      }
      for (let attr in unparsedAttrs) {
        const value = unparsedAttrs[attr];
        let getValue2;
        const isStr = typeof value === "string";
        if (attr.startsWith(raw)) {
          attr = attr.substring(7);
          getValue2 = () => value;
        } else if (isStr && value.startsWith("$") && value.length > 1 && !(value.startsWith("$reset") && isClassProp.test(attr))) {
          getValue2 = provider(compile(value));
        } else if (typeof value === "object" && isConditional(value)) {
          getValue2 = parseConditionAttr(value, void 0);
        } else if (typeof value === "object" && isPojo(value)) {
          getValue2 = parseAttrs(value);
        } else {
          getValue2 = () => value;
        }
        setters.push((attrs) => {
          attrs[attr] = getValue2();
        });
      }
    }
    return () => {
      const attrs = Array.isArray(unparsedAttrs) ? [] : {};
      setters.forEach((setter) => setter(attrs));
      return attrs;
    };
  }
  function parseNode(library2, _node) {
    let element = null;
    let attrs = () => null;
    let condition = false;
    let children = null;
    let alternate = null;
    let iterator = null;
    let resolve = false;
    const node = sugar(_node);
    if (isDOM(node)) {
      element = node.$el;
      attrs = node.$el !== "text" ? parseAttrs(node.attrs, node.bind) : () => null;
    } else if (isComponent(node)) {
      if (typeof node.$cmp === "string") {
        if (has(library2, node.$cmp)) {
          element = library2[node.$cmp];
        } else {
          element = node.$cmp;
          resolve = true;
        }
      } else {
        element = node.$cmp;
      }
      attrs = parseAttrs(node.props, node.bind);
    } else if (isConditional(node)) {
      [condition, children, alternate] = parseCondition(library2, node);
    }
    if (!isConditional(node) && "if" in node) {
      condition = provider(compile(node.if));
    } else if (!isConditional(node) && element === null) {
      condition = () => true;
    }
    if ("children" in node && node.children) {
      if (typeof node.children === "string") {
        if (node.children.startsWith("$slots.")) {
          element = element === "text" ? "slot" : element;
          children = provider(compile(node.children));
        } else if (node.children.startsWith("$") && node.children.length > 1) {
          const value = provider(compile(node.children));
          children = () => String(value());
        } else {
          children = () => String(node.children);
        }
      } else if (Array.isArray(node.children)) {
        children = createElements(library2, node.children);
      } else {
        const [childCondition, c, a] = parseCondition(library2, node.children);
        children = (iterationData) => childCondition && childCondition() ? c && c(iterationData) : a && a(iterationData);
      }
    }
    if (isComponent(node)) {
      if (children) {
        const produceChildren = children;
        children = (iterationData) => {
          return {
            default(slotData2, key) {
              var _a, _b, _c, _d;
              const currentKey = instanceKey;
              if (key)
                instanceKey = key;
              if (slotData2)
                (_a = instanceScopes.get(instanceKey)) == null ? void 0 : _a.unshift(slotData2);
              if (iterationData)
                (_b = instanceScopes.get(instanceKey)) == null ? void 0 : _b.unshift(iterationData);
              const c = produceChildren(iterationData);
              if (slotData2)
                (_c = instanceScopes.get(instanceKey)) == null ? void 0 : _c.shift();
              if (iterationData)
                (_d = instanceScopes.get(instanceKey)) == null ? void 0 : _d.shift();
              instanceKey = currentKey;
              return c;
            }
          };
        };
        children.slot = true;
      } else {
        children = () => ({});
      }
    }
    if ("for" in node && node.for) {
      const values = node.for.length === 3 ? node.for[2] : node.for[1];
      const getValues = typeof values === "string" && values.startsWith("$") ? provider(compile(values)) : () => values;
      iterator = [
        getValues,
        node.for[0],
        node.for.length === 3 ? String(node.for[1]) : null
      ];
    }
    return [condition, element, attrs, children, alternate, iterator, resolve];
  }
  function createSlots(children, iterationData) {
    const slots = children(iterationData);
    const currentKey = instanceKey;
    return Object.keys(slots).reduce((allSlots, slotName) => {
      const slotFn = slots && slots[slotName];
      allSlots[slotName] = (data) => {
        return slotFn && slotFn(data, currentKey) || null;
      };
      return allSlots;
    }, {});
  }
  function createElement(library2, node) {
    const [condition, element, attrs, children, alternate, iterator, resolve] = parseNode(library2, node);
    let createNodes = (iterationData) => {
      if (condition && element === null && children) {
        return condition() ? children(iterationData) : alternate && alternate(iterationData);
      }
      if (element && (!condition || condition())) {
        if (element === "text" && children) {
          return createTextVNode(String(children()));
        }
        if (element === "slot" && children)
          return children(iterationData);
        const el = resolve ? resolveComponent(element) : element;
        const slots = (children == null ? void 0 : children.slot) ? createSlots(children, iterationData) : null;
        return h(
          el,
          attrs(),
          slots || (children ? children(iterationData) : [])
        );
      }
      return typeof alternate === "function" ? alternate(iterationData) : alternate;
    };
    if (iterator) {
      const repeatedNode = createNodes;
      const [getValues, valueName, keyName] = iterator;
      createNodes = () => {
        const _v = getValues();
        const values = Number.isFinite(_v) ? Array(Number(_v)).fill(0).map((_, i) => i) : _v;
        const fragment = [];
        if (typeof values !== "object")
          return null;
        const instanceScope = instanceScopes.get(instanceKey) || [];
        const isArray = Array.isArray(values);
        for (const key in values) {
          if (isArray && key in Array.prototype)
            continue;
          const iterationData = Object.defineProperty(
            {
              ...instanceScope.reduce(
                (previousIterationData, scopedData) => {
                  if (previousIterationData.__idata) {
                    return { ...previousIterationData, ...scopedData };
                  }
                  return scopedData;
                },
                {}
              ),
              [valueName]: values[key],
              ...keyName !== null ? { [keyName]: isArray ? Number(key) : key } : {}
            },
            "__idata",
            { enumerable: false, value: true }
          );
          instanceScope.unshift(iterationData);
          fragment.push(repeatedNode.bind(null, iterationData)());
          instanceScope.shift();
        }
        return fragment;
      };
    }
    return createNodes;
  }
  function createElements(library2, schema2) {
    if (Array.isArray(schema2)) {
      const els = schema2.map(createElement.bind(null, library2));
      return (iterationData) => els.map((element2) => element2(iterationData));
    }
    const element = createElement(library2, schema2);
    return (iterationData) => element(iterationData);
  }
  const providers = [];
  function provider(compiled, hints = {}) {
    const compiledFns = /* @__PURE__ */ new WeakMap();
    providers.push((callback, key) => {
      compiledFns.set(
        key,
        compiled.provide((tokens) => callback(tokens, hints))
      );
    });
    return () => compiledFns.get(instanceKey)();
  }
  function createInstance(providerCallback, key) {
    memoKey ?? (memoKey = toMemoKey(schema));
    const [render, compiledProviders] = has(memo, memoKey) ? memo[memoKey] : [createElements(library, schema), providers];
    compiledProviders.forEach((compiledProvider) => {
      compiledProvider(providerCallback, key);
    });
    return () => {
      instanceKey = key;
      return render();
    };
  }
  return createInstance;
}
function useScope(token3, defaultValue) {
  const scopedData = instanceScopes.get(instanceKey) || [];
  let scopedValue = void 0;
  if (scopedData.length) {
    scopedValue = getValue(scopedData, token3.split("."));
  }
  return scopedValue === void 0 ? defaultValue : scopedValue;
}
function slotData(data, key) {
  return new Proxy(data, {
    get(...args) {
      let data2 = void 0;
      const property = args[1];
      if (typeof property === "string") {
        const prevKey = instanceKey;
        instanceKey = key;
        data2 = useScope(property, void 0);
        instanceKey = prevKey;
      }
      return data2 !== void 0 ? data2 : Reflect.get(...args);
    }
  });
}
function createRenderFn(instanceCreator, data, instanceKey2) {
  return instanceCreator(
    (requirements, hints = {}) => {
      return requirements.reduce((tokens, token3) => {
        if (token3.startsWith("slots.")) {
          const slot = token3.substring(6);
          const hasSlot = () => data.slots && has(data.slots, slot) && typeof data.slots[slot] === "function";
          if (hints.if) {
            tokens[token3] = hasSlot;
          } else if (data.slots) {
            const scopedData = slotData(data, instanceKey2);
            tokens[token3] = () => hasSlot() ? data.slots[slot](scopedData) : null;
          }
        } else {
          const value = getRef(token3, data);
          tokens[token3] = () => useScope(token3, value.value);
        }
        return tokens;
      }, {});
    },
    instanceKey2
  );
}
function clean(schema, memoKey, instanceKey2) {
  memoKey ?? (memoKey = toMemoKey(schema));
  memoKeys[memoKey]--;
  if (memoKeys[memoKey] === 0) {
    delete memoKeys[memoKey];
    const [, providers] = memo[memoKey];
    delete memo[memoKey];
    providers.length = 0;
  }
  instanceScopes.delete(instanceKey2);
}
function toMemoKey(schema) {
  return JSON.stringify(schema, (_, value) => {
    if (typeof value === "function") {
      return value.toString();
    }
    return value;
  });
}
var FormKitSchema = /* @__PURE__ */ defineComponent({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: false
    }
  },
  emits: ["mounted"],
  setup(props, context) {
    var _a;
    getCurrentInstance();
    let instanceKey2 = {};
    instanceScopes.set(instanceKey2, []);
    const library = { FormKit: markRaw(FormKit_default), ...props.library };
    let provider = parseSchema(library, props.schema, props.memoKey);
    let render;
    let data;
    watchEffect(() => {
      data = Object.assign(reactive(props.data ?? {}), {
        slots: context.slots
      });
      context.slots;
      render = createRenderFn(provider, data, instanceKey2);
    });
    function cleanUp() {
      clean(props.schema, props.memoKey, instanceKey2);
      if (data.node)
        data.node.destroy();
      data.slots = null;
      data = null;
      render = null;
    }
    onSSRComplete((_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app, cleanUp);
    return () => render ? render() : null;
  }
});
var FormKitSchema_default = FormKitSchema;
var parentSymbol = Symbol("FormKitParent");
var componentSymbol = Symbol("FormKitComponentCallback");
function FormKit(props, context) {
  const node = useInput(props, context);
  if (!node.props.definition)
    error(600, node);
  if (node.props.definition.component) {
    return () => {
      var _a;
      return h(
        (_a = node.props.definition) == null ? void 0 : _a.component,
        {
          context: node.context
        },
        { ...context.slots }
      );
    };
  }
  const schema = ref([]);
  let memoKey = node.props.definition.schemaMemoKey;
  const generateSchema = () => {
    var _a, _b;
    const schemaDefinition = (_b = (_a = node.props) == null ? void 0 : _a.definition) == null ? void 0 : _b.schema;
    if (!schemaDefinition)
      error(601, node);
    if (typeof schemaDefinition === "function") {
      schema.value = schemaDefinition({ ...props.sectionsSchema || {} });
      if (memoKey && props.sectionsSchema || "memoKey" in schemaDefinition && typeof schemaDefinition.memoKey === "string") {
        memoKey = (memoKey ?? (schemaDefinition == null ? void 0 : schemaDefinition.memoKey)) + JSON.stringify(props.sectionsSchema);
      }
    } else {
      schema.value = schemaDefinition;
    }
  };
  generateSchema();
  context.emit("node", node);
  const definitionLibrary = node.props.definition.library;
  const library = {
    FormKit: markRaw(formkitComponent),
    ...definitionLibrary,
    ...props.library ?? {}
  };
  function didMount() {
    node.emit("mounted");
  }
  context.expose({ node });
  return () => h(
    FormKitSchema,
    {
      schema: schema.value,
      data: node.context,
      onMounted: didMount,
      library,
      memoKey
    },
    { ...context.slots }
  );
}
var formkitComponent = /* @__PURE__ */ defineComponent(
  FormKit,
  {
    props: runtimeProps,
    inheritAttrs: false
  }
);
var FormKit_default = formkitComponent;
var rootSymbol = Symbol();
function createPlugin(app, options) {
  app.component(options.alias || "FormKit", FormKit_default).component(options.schemaAlias || "FormKitSchema", FormKitSchema_default);
  return {
    get: getNode,
    setLocale: (locale) => {
      var _a;
      if ((_a = options.config) == null ? void 0 : _a.rootConfig) {
        options.config.rootConfig.locale = locale;
      }
    },
    clearErrors,
    setErrors,
    submit: submitForm,
    reset
  };
}
var optionsSymbol = Symbol.for("FormKitOptions");
var configSymbol = Symbol.for("FormKitConfig");
var plugin = {
  install(app, _options) {
    const options = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof _options === "function" ? _options() : _options
    );
    const rootConfig = createConfig(options.config || {});
    options.config = { rootConfig };
    app.config.globalProperties.$formkit = createPlugin(app, options);
    app.provide(optionsSymbol, options);
    app.provide(configSymbol, rootConfig);
  }
};
var pseudoProps = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
var boolProps = ["disabled", "ignore", "preserve"];
function classesToNodeProps(node, props) {
  if (props.classes) {
    Object.keys(props.classes).forEach(
      (key) => {
        if (typeof key === "string") {
          node.props[`_${key}Class`] = props.classes[key];
          if (isObject(props.classes[key]) && key === "inner")
            Object.values(props.classes[key]);
        }
      }
    );
  }
}
function onlyListeners(props) {
  if (!props)
    return {};
  const knownListeners = ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (listeners, listener) => {
      const name = `on${listener}`;
      if (name in props) {
        if (typeof props[name] === "function") {
          listeners[name] = props[name];
        }
      }
      return listeners;
    },
    {}
  );
  return knownListeners;
}
function useInput(props, context, options = {}) {
  const config = Object.assign({}, inject(optionsSymbol) || {}, options);
  const __root = inject(rootSymbol, ref(void 0));
  const __cmpCallback = inject(componentSymbol, () => {
  });
  const instance = getCurrentInstance();
  const listeners = onlyListeners(instance == null ? void 0 : instance.vnode.props);
  const isVModeled = ["modelValue", "model-value"].some(
    (prop) => prop in ((instance == null ? void 0 : instance.vnode.props) ?? {})
  );
  const value = props.modelValue !== void 0 ? props.modelValue : cloneAny(context.attrs.value);
  function createInitialProps() {
    const initialProps2 = {
      ...nodeProps(props),
      ...listeners,
      type: props.type ?? "text",
      __root: __root.value,
      __slots: context.slots
    };
    const attrs = except(nodeProps(context.attrs), pseudoProps);
    if (!attrs.key)
      attrs.key = token();
    initialProps2.attrs = attrs;
    const propValues = only(nodeProps(context.attrs), pseudoProps);
    for (const propName in propValues) {
      if (boolProps.includes(propName) && propValues[propName] === "") {
        propValues[propName] = true;
      }
      initialProps2[camel(propName)] = propValues[propName];
    }
    const classesProps = { props: {} };
    classesToNodeProps(classesProps, props);
    Object.assign(initialProps2, classesProps.props);
    if (typeof initialProps2.type !== "string") {
      initialProps2.definition = initialProps2.type;
      delete initialProps2.type;
    }
    return initialProps2;
  }
  const initialProps = createInitialProps();
  const parent = initialProps.ignore ? null : props.parent || inject(parentSymbol, null);
  const node = createNode(
    extend(
      config || {},
      {
        name: props.name || void 0,
        value,
        parent,
        plugins: (config.plugins || []).concat(props.plugins ?? []),
        config: props.config || {},
        props: initialProps,
        index: props.index,
        sync: !!undefine(context.attrs.sync || context.attrs.dynamic)
      },
      false,
      true
    )
  );
  __cmpCallback(node);
  if (!node.props.definition)
    error(600, node);
  const lateBoundProps = ref(
    new Set(
      Array.isArray(node.props.__propDefs) ? node.props.__propDefs : Object.keys(node.props.__propDefs ?? {})
    )
  );
  node.on(
    "added-props",
    ({ payload: lateProps }) => {
      const propNames = Array.isArray(lateProps) ? lateProps : Object.keys(lateProps ?? {});
      propNames.forEach((newProp) => lateBoundProps.value.add(newProp));
    }
  );
  const pseudoPropNames = computed(
    () => pseudoProps.concat([...lateBoundProps.value]).reduce((names, prop) => {
      if (typeof prop === "string") {
        names.push(camel(prop));
        names.push(kebab(prop));
      } else {
        names.push(prop);
      }
      return names;
    }, [])
  );
  watchEffect(() => classesToNodeProps(node, props));
  const passThrough = nodeProps(props);
  for (const prop in passThrough) {
    watch(
      () => props[prop],
      () => {
        if (props[prop] !== void 0) {
          node.props[prop] = props[prop];
        }
      }
    );
  }
  watchEffect(() => {
    node.props.__root = __root.value;
  });
  const attributeWatchers = /* @__PURE__ */ new Set();
  const possibleProps = nodeProps(context.attrs);
  watchEffect(() => {
    watchAttributes(only(possibleProps, pseudoPropNames.value));
  });
  function watchAttributes(attrProps) {
    attributeWatchers.forEach((stop) => {
      stop();
      attributeWatchers.delete(stop);
    });
    for (const prop in attrProps) {
      const camelName = camel(prop);
      attributeWatchers.add(
        watch(
          () => context.attrs[prop],
          () => {
            node.props[camelName] = context.attrs[prop];
          }
        )
      );
    }
  }
  watchEffect(() => {
    const attrs = except(nodeProps(context.attrs), pseudoPropNames.value);
    if ("multiple" in attrs)
      attrs.multiple = undefine(attrs.multiple);
    if (typeof attrs.onBlur === "function") {
      attrs.onBlur = oncePerTick(attrs.onBlur);
    }
    node.props.attrs = Object.assign({}, node.props.attrs || {}, attrs);
  });
  watchEffect(() => {
    const messages3 = (props.errors ?? []).map(
      (error3) => /* @__PURE__ */ createMessage({
        key: slugify(error3),
        type: "error",
        value: error3,
        meta: { source: "prop" }
      })
    );
    node.store.apply(
      messages3,
      (message3) => message3.type === "error" && message3.meta.source === "prop"
    );
  });
  if (node.type !== "input") {
    const sourceKey = `${node.name}-prop`;
    watchEffect(() => {
      const inputErrors = props.inputErrors ?? {};
      const keys = Object.keys(inputErrors);
      if (!keys.length)
        node.clearErrors(true, sourceKey);
      const messages3 = keys.reduce((messages4, key) => {
        let value2 = inputErrors[key];
        if (typeof value2 === "string")
          value2 = [value2];
        if (Array.isArray(value2)) {
          messages4[key] = value2.map(
            (error3) => /* @__PURE__ */ createMessage({
              key: error3,
              type: "error",
              value: error3,
              meta: { source: sourceKey }
            })
          );
        }
        return messages4;
      }, {});
      node.store.apply(
        messages3,
        (message3) => message3.type === "error" && message3.meta.source === sourceKey
      );
    });
  }
  watchEffect(() => Object.assign(node.config, props.config));
  if (node.type !== "input") {
    provide(parentSymbol, node);
  }
  let clonedValueBeforeVmodel = void 0;
  node.on("modelUpdated", () => {
    var _a;
    context.emit("inputRaw", (_a = node.context) == null ? void 0 : _a.value, node);
    if (isVModeled && node.context) {
      clonedValueBeforeVmodel = cloneAny(node.value);
      context.emit("update:modelValue", shallowClone(node.value));
    }
  });
  if (isVModeled) {
    watch(
      toRef(props, "modelValue"),
      (value2) => {
        if (!eq(clonedValueBeforeVmodel, value2)) {
          node.input(value2, false);
        }
      },
      { deep: true }
    );
    if (node.value !== value) {
      node.emit("modelUpdated");
    }
  }
  return node;
}
var messages = createSection("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
}));
var message = createSection("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: `$id + '-' + $message.key`,
    "data-message-type": "$message.type"
  }
}));
messages(message("$message.value"));
var summary = createSection("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
}));
var summaryInner = createSection("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
}));
var messages2 = createSection("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
}));
var message2 = createSection("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
}));
var summaryHeader = createSection("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
}));
var messageLink = createSection("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
summary(
  summaryInner(
    summaryHeader("$summaryHeader"),
    messages2(message2(messageLink("$summary.message")))
  )
);
init_defaultConfig();
init_bindings();
const formkitPlugin_pZqjah0RUG = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const config = defaultConfig;
  nuxtApp.hook("app:rendered", (renderContext) => {
    resetCount();
    ssrComplete(nuxtApp.vueApp);
  });
  nuxtApp.vueApp.use(plugin, config);
});
function usePersistedstateCookies(cookieOptions) {
  return {
    getItem: (key) => (cookieOptions == null ? void 0 : cookieOptions.readonly) ? useCookie(key, {
      ...cookieOptions,
      encode: encodeURIComponent,
      decode: decodeURIComponent,
      readonly: true
    }).value : useCookie(key, {
      ...cookieOptions,
      encode: encodeURIComponent,
      decode: decodeURIComponent,
      readonly: false
    }).value,
    setItem: (key, value) => {
      if (cookieOptions == null ? void 0 : cookieOptions.readonly)
        throw new Error("Cannot set a readonly cookie.");
      useCookie(key, {
        ...cookieOptions,
        encode: encodeURIComponent,
        decode: decodeURIComponent,
        readonly: false
      }).value = value;
    }
  };
}
function usePersistedstateLocalStorage() {
  return {
    getItem: (key) => {
      return !useNuxtApp().ssrContext ? localStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!useNuxtApp().ssrContext)
        localStorage.setItem(key, value);
    }
  };
}
function usePersistedstateSessionStorage() {
  return {
    getItem: (key) => {
      return !useNuxtApp().ssrContext ? sessionStorage.getItem(key) : null;
    },
    setItem: (key, value) => {
      if (!useNuxtApp().ssrContext)
        sessionStorage.setItem(key, value);
    }
  };
}
const persistedState = {
  localStorage: usePersistedstateLocalStorage(),
  sessionStorage: usePersistedstateSessionStorage(),
  cookies: usePersistedstateCookies(),
  cookiesWithOptions: usePersistedstateCookies
};
const plugin_AUP22rrBAc = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const {
    cookieOptions,
    debug,
    storage
  } = (/* @__PURE__ */ useRuntimeConfig()).public.persistedState;
  const pinia = nuxtApp.$pinia;
  pinia.use(createPersistedState({
    storage: storage === "cookies" ? persistedState.cookiesWithOptions(cookieOptions) : persistedState[storage],
    debug
  }));
});
function authUsers() {
  const user = useState("users", () => null);
  return {
    user
  };
}
const auth_ANExhJHvcR = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  const { user } = authUsers();
  try {
    const data = ([__temp, __restore] = executeAsync(() => $fetch("/api/auth/me", {
      headers: useRequestHeader(["cookie"])
    })), __temp = await __temp, __restore(), __temp);
    user.value = data;
  } catch (error2) {
    user.value = null;
  }
});
const preLoader_pmzNbQeSb9 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("img", function(el, url) {
    let img = new Image();
    img.src = url.value;
    img.onload = () => {
      el.src = url.value;
      el.classList.add("fadeImg");
    };
  });
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$2,
  revive_payload_server_eJ33V7gbc6,
  plugin$1,
  components_plugin_KR1HBZs4kY,
  formkitPlugin_pZqjah0RUG,
  plugin_AUP22rrBAc,
  auth_ANExhJHvcR,
  preLoader_pmzNbQeSb9
];
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error2 = ref(false);
  const start = () => {
    error2.value = false;
    set2(0);
  };
  function set2(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error2.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error2.value),
    start,
    set: set2,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error: error2, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error: error2,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error2.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const layouts = {
  custom: () => import('./custom-DfQ0A_v2.mjs').then((m) => m.default || m),
  default: () => import('./default-DbiMeSt2.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_1;
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-DZ0SkKhI.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-DEqbfA7j.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    const abortRender = error2.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error2)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error2) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error2) {
      await nuxt.hooks.callHook("app:error", error2);
      nuxt.payload.error = nuxt.payload.error || createError(error2);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, useNuxtApp as a, authUsers as b, useRouter as c, useRoute as d, entry$1 as default, __nuxt_component_2$1 as e, __nuxt_component_0 as f, __nuxt_component_1 as g, __nuxt_component_2 as h, useRequestHeader as i, asyncDataDefaults as j, createError as k, fetchDefaults as l, useRequestFetch as m, defineNuxtRouteMiddleware as n, navigateTo as o, nuxtLinkDefaults as p, injectHead as q, resolveRouteObject as r, resolveUnrefHeadInput as s, defineStore as t, useRuntimeConfig as u, persistedState as v, useRequestEvent as w };
//# sourceMappingURL=server.mjs.map
