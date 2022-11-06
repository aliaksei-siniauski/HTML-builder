const promise = require("fs/promises");
const path = require("path");
const source = path.join(__dirname, "files");
const destination = path.join(__dirname, "files-copy");

async function copyDir() {
  try {
    const removingFolder = await promise.rm(
      path.join(__dirname, "files-copy"),
      {
        recursive: true,
        force: true,
      }
    );
    const newFolder = await promise.mkdir(path.join(__dirname, "files-copy"), {
      recursive: true,
    });
    const data = await promise.readdir(source);

    data.forEach((item) => {
      promise.copyFile(path.join(source, item), path.join(destination, item));
    });
  } catch (err) {
    console.log("Something is wrong " + err);
  }
}
copyDir();
