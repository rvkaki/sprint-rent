const serverURL = process.env.REACT_APP_SERVER_URL;

export const getCars = async query => {
  try {
    const res = await fetch(`${serverURL}/cars` + query);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilterParams = async param => {
  try {
    const res = await fetch(`${serverURL}/cars/params?t=${param}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCar = async id => {
  try {
    const res = await fetch(`${serverURL}/cars/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocations = async () => {
  try {
    const res = await fetch(`${serverURL}/locations`);
    const data = await res.json();
    return data.sort((a, b) => a.id > b.id);
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async id => {
  try {
    const res = await fetch(`${serverURL}/locations/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSlides = async () => {
  try {
    const res = await fetch(`${serverURL}/carousel`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPrivacyPolicy = async () => {
  try {
    const res = await fetch(`${serverURL}/privacy`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTermsAndConditions = async () => {
  try {
    const res = await fetch(`${serverURL}/terms`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFranchisingBook = async () => {
  try {
    const res = await fetch(`${serverURL}/franchising-book`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHighlights = async () => {
  try {
    const res = await fetch(`${serverURL}/highlights`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOffer = async id => {
  try {
    const res = await fetch(`${serverURL}/offers/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
