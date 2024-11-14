import { d as defineEventHandler, r as readBody, u as useRuntimeConfig, s as setCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { public: { baseUrl } } = useRuntimeConfig();
  try {
    const data = await $fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body,
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

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
