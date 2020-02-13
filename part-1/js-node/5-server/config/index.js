// https://github.com/motdotla/dotenv

module.exports = {
  PORT: process.env.PORT || 5000,
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  API_ENDPOINT: process.env.API_ENDPOINT,
  VISANET_KEY: process.env.VISANET_KEY,
  NODE_ENV: process.env.NODE_ENV || "develop",
};
