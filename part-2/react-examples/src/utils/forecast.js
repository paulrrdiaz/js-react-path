import axios from "axios";
const { REACT_APP_WEATHER_API_KEY: key, REACT_APP_WEATHER_API_URL: api } = process.env;

export default async (lat, lng) => {
  try {
    const url = `${api}/${key}/${lat},${lng}?lang=es`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
