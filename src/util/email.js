export const sendOrderEmail = async (
  name,
  email,
  contact,
  carInfo,
  startDate,
  endDate,
  pickup,
  delivery,
  numDays
) => {
  const messageBody = `Nome: ${name}
Email: ${email}
Contacto: ${contact}
Carro: ${carInfo.brand} ${carInfo.model}
Data: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}
Recolha: ${pickup.title}
Entrega: ${delivery.title}
Total: ${numDays} x ${carInfo.price}€ = ${numDays * carInfo.price}€`;

  const emailTo = pickup.emails[0].email;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'main@ricardovieira.me',
        from: 'main@ricardovieira.me',
        subject: 'Pedido de Reserva',
        text: messageBody,
      },
    }),
  });

  return res;
};

export const sendFranchiseEmail = async (
  name,
  email,
  contact,
  area,
  subject,
  message
) => {
  const messageBody = `Nome: ${name}
Email: ${email}
Contacto: ${contact}
Zona: ${area}
${message}`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'main@ricardovieira.me',
        from: 'main@ricardovieira.me',
        subject: `Franchising: ${subject}`,
        text: messageBody,
      },
    }),
  });

  return res;
};
