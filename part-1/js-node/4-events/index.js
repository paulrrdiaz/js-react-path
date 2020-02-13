// const Emitter = require("./emitter");
const { EventEmitter } = require("events");

// system modules fs path
// third party
// own modules

const onSaveEmitter = new EventEmitter();
const onLoadEmitter = new EventEmitter();
const emitter = new EventEmitter();

emitter.on("click", () => {
  console.log("Click 1");
});

emitter.emit("click");

onSaveEmitter.on("save", () => {
  console.log("I'm saving 1");
});

onSaveEmitter.on("save", () => {
  console.log("I'm saving 2");
});

onSaveEmitter.on("download", () => {
  console.log("I'm downloading 2");
});

onLoadEmitter.on("load", () => {
  console.log("I'm loading 1");
});

onSaveEmitter.emit("save");
onLoadEmitter.emit("load");
// onLoadEmitter.emit("foo");
