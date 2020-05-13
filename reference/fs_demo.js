const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) {
    throw err;
  }
  console.log("Folder created...");
});

// Create and write to file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"),
  "Hello World of nodejs",
  (err) => {
    if (err) {
      throw err;
    }
    // Append to file
    fs.appendFile(path.join(__dirname, "/test", "hello.txt"),
      " I love coding with node and js",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("File created...");
    });
});

// Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8",
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) {
      throw err;
    }
    console.log("File renamed");
});
