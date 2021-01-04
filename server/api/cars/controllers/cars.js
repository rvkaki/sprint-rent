'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getParams: async ctx => {
    const { t } = ctx.query;
    const attr = Object.keys(strapi.models.cars.attributes);
    if (attr.includes(t)) {
      let entities = await strapi.services.cars.find();
      entities = entities.map(e => e[t]);
      const res = new Set(entities);
      return Array.from(res);
    } else {
      ctx.response.status = 400;
      ctx.response.message = "Couldn't fulfill your request";
    }
  },
};
