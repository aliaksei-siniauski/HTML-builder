const fs = require("fs");
const path = require("path");

fs.readdir(__dirname, (err, items) => {
  if (err) throw err;

  // пути до изначальных папок и до итоговой папки
  const pathToSource = path.resolve(__dirname, "styles");
  const pathToDist = path.resolve(__dirname, "project-dist");

  fs.readdir(pathToSource, (err, items) => {
    if (err) throw err;

    fs.access(path.resolve(pathToDist, "bundle.css"), fs.F_OK, (err) => {
      fs.unlink(path.resolve(pathToDist, "bundle.css"), (err) => {});
    });

    items.map((item) => {
      if (item.includes(".css")) {
        const pathToCSSFile = path.resolve(pathToSource, item);

        fs.readFile(pathToCSSFile, "utf8", (err, data) => {
          fs.appendFile(path.resolve(pathToDist, "bundle.css"), data, () => {});
        });
      }
    });
  });
});
