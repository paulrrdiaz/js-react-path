// commonJS
// ESM

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "some-notes.txt");

const file = fs.readFileSync(filePath, { encoding: "utf-8" });

fs.writeFileSync(filePath, "But it's just the beginning");
