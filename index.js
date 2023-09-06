const fs = require("fs");
const path = require("path");
const { argv } = require("yargs");
const { MakeDir } = require("./src/command");
const { log } = require("console");
(function async() {
  try {
    let pathName = path.resolve(__dirname);
    
    // fs.readdir(pathName, (err, files) => {
    //   if (err) {
    //     console.log("Cant read file ->", err);
    //     return;
    //   } else {
    //     files.forEach((item) => {
    //       log("file List is :", item);
    //     });
    //   }
    // });
  } catch (error) {
    console.log("error :", error);
  }
})();
