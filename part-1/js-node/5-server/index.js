const http = require("http");
const path = require("path");
const fs = require("fs");

const HomePath = path.join(__dirname, "views", "home.html");
const AboutPath = path.join(__dirname, "views", "about.html");
const Home = fs.readFileSync(HomePath);
const About = fs.readFileSync(AboutPath);

http
  .createServer((request, response) => {
    const { url } = request;

    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(Home);
    } else if (url === "/about") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(About);
    } else {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("Something went wrong");
    }

    response.end();
  })
  .listen(4000);
