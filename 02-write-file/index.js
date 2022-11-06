const fs = require("fs");
const readline = require("readline");
const path = require("path");
const process = require("process");

const pathToFile = path.join("02-write-file", "text.txt");
const textFile = fs.createWriteStream(pathToFile);

console.log("Hello, What's your name?");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (text) => {
  if (text === "exit") process.exit();

  textFile.write(text + "\n");
});

rl.on("error", (err) => console.log(err));
process.on("exit", () => console.log("See you next time!"));
