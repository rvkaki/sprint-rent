import { getPrice } from './functions';

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
Total: ${numDays} x ${getPrice(carInfo, { startDate })}€ = ${
    numDays * getPrice(carInfo, { startDate })
  }€`;

  const emailTo = pickup.emails[0].email;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: emailTo,
        cc: 'reservas@sprinttravelrentacar.com',
        from: 'reservas@sprinttravelrentacar.com',
        subject: 'Pedido de Reserva',
        text: messageBody,
      },
    }),
  });

  return res;
};

export const sendOrderOfferEmail = async (
  name,
  email,
  contact,
  date,
  offer
) => {
  const messageBody = `Nome: ${name}
Email: ${email}
Contacto: ${contact}
Data: ${date.toLocaleDateString()}
Oferta: ${offer.title}
Total: ${offer.price}€`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'reservas@sprinttravelrentacar.com',
        from: 'reservas@sprinttravelrentacar.com',
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
        to: 'franchising@sprinttravelviagens.com',
        from: 'franchising@sprinttravelviagens.com',
        subject: `Franchising: ${subject}`,
        text: messageBody,
      },
    }),
  });

  return res;
};

export const sendNumberEmail = async number => {
  const messageBody = `Pedido de contacto de ${number}`;

  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/email`, {
    method: 'POST',
    body: JSON.stringify({
      options: {
        to: 'reservas@sprinttravelrentacar.com',
        from: 'reservas@sprinttravelrentacar.com',
        subject: `Pedido de contacto Rent a Car`,
        text: messageBody,
      },
    }),
  });

  return res;
};
