import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie, s as setCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const me_get = defineEventHandler(async (event) => {
  const { public: { baseUrl } } = useRuntimeConfig();
  const token = getCookie(event, "token");
  try {
    const data = await $fetch(`${baseUrl}/auth/me`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    return data.data;
  } catch (error) {
    if (error.statusCode === 401) {
      setCookie(event, "token", "", {
        httpOnly: true,
        secure: true,
        maxAge: /* @__PURE__ */ new Date(0),
        path: "/"
      });
    }
    return error;
  }
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
