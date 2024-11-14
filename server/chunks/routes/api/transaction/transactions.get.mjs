import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const transactions_get = defineEventHandler(async (event) => {
  const { public: { baseUrl } } = useRuntimeConfig();
  const token = getCookie(event, "token");
  try {
    const data = await $fetch(`${baseUrl}/profile/transactions`, {
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

export { transactions_get as default };
//# sourceMappingURL=transactions.get.mjs.map
