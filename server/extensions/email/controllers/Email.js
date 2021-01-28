/* eslint-disable */
const _ = require('lodash');

module.exports = {
  send: async ctx => {
    console.log(ctx.request.body);
    let { options } = JSON.parse(ctx.request.body);
    console.log(options);
    try {
      await strapi.plugins.email.services.email.send(options);
    } catch (e) {
      if (e.statusCode === 400) {
        return ctx.badRequest(e.message);
      } else {
        throw new Error(`Couldn't send email: ${e.message}.`);
      }
    }

    // Send 200 `ok`
    ctx.send({});
  },
};
