import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, g as getCookie, s as setCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const otp_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { public: { baseUrl } } = useRuntimeConfig();
  const loginToken = getCookie(event, "login_token");
  try {
    const data = await $fetch(`${baseUrl}/auth/check-otp`, {
      method: "POST",
      body: {
        ...body,
        login_token: loginToken
      },
      headers: {
        "Accept": "application/json"
      }
    });
    setCookie(event, "token", data.data.token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/"
    });
    setCookie(event, "login_token", "", {
      httpOnly: true,
      secure: true,
      maxAge: /* @__PURE__ */ new Date(0),
      path: "/"
    });
    return data.data.user;
  } catch (error) {
    return error;
  }
});

export { otp_post as default };
//# sourceMappingURL=otp.post.mjs.map
