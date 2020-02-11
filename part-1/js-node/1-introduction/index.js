// const {
//   sum,
//   sayHello,
//   value } = require("./sum");

const fs = require("fs");
const path = require("path");

const getExtension = foo => {
  const exts = {};
  return;
};

const filePath = path.join(__dirname, "test.txt");

const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

fs.writeFileSync(filePath, "But no!");



// console.log(sum(value, 4));
// console.log(sayHello());

// console.log(global);

/*

Env to run Javascript outside a browser

- open source
- V8 Javascript Engine
- Created by Ryan Dahl in 2009

you can create...

- Tooling
- API's 
- Shareable libraries
- Desktop apps
- IoT

NVM => Node Version Manager
LTS => Long Term Support
REPL => Read Evaluate Print Loop

*/

/*

Browser

- Client side webapps
- DOM
- Window
- Fragmentation

NodeJS

- Server side app
- No GUI (can virtualize)
- Global
- Versioned
- No browser based APIs

*/

/*

Globals



- process
- require
- __dirname
- module
- global

*/

// console.log(module);

// console.log(process);
// console.log(require);
// console.log(__dirname);
// console.log(module);

// console.log(exports)
// console.log(__filename)
