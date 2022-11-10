const fs = require("fs");
const path = require("path");
const pathToFolder = path.join(__dirname, "secret-folder");

fs.readdir(pathToFolder, { withFileTypes: true }, function (err, items) {
  if (err) {
    return console.log("Something is wrong: " + err);
  }
  items.forEach((item) => {
    if (item.isFile()) {
      fs.stat(
        path.resolve(__dirname, "secret-folder", item.name),
        (err, status) => {
          [item, extension] = item.name.split(".");
          console.log(`${item} - ${extension} - ${status.size}kb\n`);
        }
      );
    }
  });
});
