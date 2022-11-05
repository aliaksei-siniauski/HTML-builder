const fs = require("fs");
const readStream = fs.createReadStream("01-read-file/text.txt");
let data = "";

readStream.setEncoding("utf8");
readStream.on("data", (chunk) => {
  data += chunk;
});
readStream.on("end", () => {
  console.log(data);
});

readStream.on("error", (error) => {
  console.log(error.stack);
});
