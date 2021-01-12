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
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (id) => {
  try {
    const res = await fetch(`${serverURL}/locations/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
