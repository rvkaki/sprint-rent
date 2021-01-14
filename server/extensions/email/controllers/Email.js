/* eslint-disable */
const _ = require('lodash');

const emailTemplate = {
  subject: 'A sua reserva',
  text: `Olá <%= user.name %>!
      A sua reserva está a ser processada. Entraremos em contacto consigo para a confirmar.
      Aqui fica o resumo da mesma: `,
  html: `<h1>Welcome on mywebsite.fr!</h1>
      <p>Your account is now linked with: <%= user.email %>.<p>`,
};

module.exports = {
  send: async ctx => {
      console.log(ctx.request.body);
    let { options, user } = ctx.request.body;
    try {
      await strapi.plugins.email.services.email.sendTemplatedEmail(
        options,
        emailTemplate,
        {
          user: _.pick(user, ['name', 'email']),
        }
      );
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
