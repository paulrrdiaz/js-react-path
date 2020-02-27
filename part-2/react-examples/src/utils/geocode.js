import axios from "axios";
const { REACT_APP_MAP_API_KEY: key, REACT_APP_MAP_API_URL: api } = process.env;

export default async location => {
  try {
    const url = `${api}/${location}.json?access_token=${key}&limit=1`;
    const {
      data: { features },
    } = await axios.get(url);
    return features[0].center;
  } catch (error) {
    console.log(error);
  }
};
