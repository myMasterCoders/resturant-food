import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie, s as setCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const logout_post = defineEventHandler(async (event) => {
  const { public: { baseUrl } } = useRuntimeConfig();
  const token = getCookie(event, "token");
  try {
    const data = await $fetch(`${baseUrl}/auth/logout`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    setCookie(event, "token", "", {
      httpOnly: true,
      secure: true,
      maxAge: /* @__PURE__ */ new Date(0),
      path: "/"
    });
    return data.data;
  } catch (error) {
    return error;
  }
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
