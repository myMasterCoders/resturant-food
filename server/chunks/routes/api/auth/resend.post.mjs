import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie, s as setCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const resend_post = defineEventHandler(async (event) => {
  const { public: { baseUrl } } = useRuntimeConfig();
  const loginToken = getCookie(event, "login_token");
  try {
    const data = await $fetch(`${baseUrl}/auth/resend-otp`, {
      method: "POST",
      body: {
        login_token: loginToken
      },
      headers: {
        "Accept": "application/json"
      }
    });
    setCookie(event, "login_token", data.data.login_token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/"
    });
    return data;
  } catch (error) {
    return error;
  }
});

export { resend_post as default };
//# sourceMappingURL=resend.post.mjs.map
