import { d as defineEventHandler, u as useRuntimeConfig, r as readBody, g as getCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const edit_post = defineEventHandler(async (event) => {
  const { public: { baseUrl } } = useRuntimeConfig();
  const body = await readBody(event);
  const token = getCookie(event, "token");
  try {
    const data = await $fetch(`${baseUrl}/profile/info/edit`, {
      method: "POST",
      body,
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    return data.data;
  } catch (error) {
    return error;
  }
});

export { edit_post as default };
//# sourceMappingURL=edit.post.mjs.map