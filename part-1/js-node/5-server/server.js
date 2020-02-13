const express = require("express");
const { PORT } = require("./config");
const server = express();
const { HomeRoute } = require("./routes");

server.use("/", HomeRoute);

server.listen(PORT, () => {
  console.log(`Server is running || ${PORT}`);
});
