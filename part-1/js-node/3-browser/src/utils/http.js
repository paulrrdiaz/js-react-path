import axios from "axios";

const API_JOKE = "https://official-joke-api.appspot.com/random_joke";
const API_JOKES = "https://official-joke-api.appspot.com/random_ten";

export const jokeGenerator = () => {
  axios.get(API_JOKE).then(({ data }) => {
    console.log(JSON.stringify(data));
  });
};

export const jokesGenerator = () => {
  axios.get(API_JOKES).then(({ data }) => {
    console.log(JSON.stringify(data));
  });
};
