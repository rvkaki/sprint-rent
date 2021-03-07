'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    let highlights;
    if (ctx.query._q)
      highlights = await strapi.query.highlights.search(ctx.query);
    else highlights = await strapi.services.highlights.find(ctx.query);

    const offers = [];

    highlights.ofertas.forEach(entity => {
      const offer = sanitizeEntity(entity, { model: strapi.models.highlights });
      if (new Date().getTime() > new Date(entity.validUntil).getTime()) {
        console.log(offer.title);
        strapi.query('offers').delete({ id: offer.id });
      } else offers.push(offer);
    });

    return { ...highlights, ofertas: offers };
  },
};
