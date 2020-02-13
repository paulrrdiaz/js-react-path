const path = require("path");

const render = (page, response) => {
  return response.sendFile(path.join(__dirname, "../views", `${page}.html`));
};

class HomeController {
  async index(request, response) {
    return render("home", response);
  }
  async about(request, response) {
    return render("about", response);
  }
}

module.exports = new HomeController();
