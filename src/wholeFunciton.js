const fs = require("fs");
const fileFactoryGenerator = require("./fileFactory");
const htmlScaffholding = require("./content/htmlScaffholding");
const cssScaffholding = require("./content/cssScaffholding");
const jsScaffholding = require("./content/jsScaffholding");

const wholeFunction = () => {
  try {
    // make css and js file include style.css and main.js

    const folderName = ["js", "css", "images"];
    for (let i = 0; i < folderName.length; i++) {
      fs.mkdirSync(folderName[i], (err) => {
        if (err) {
          console.error("Error creating folder:", err);
          return;
        } else {
          console.log(
            `Folder "${folderName[i]}" has been created successfully.`
          );
        }
      });
    }
    // Change working directory to the main folder
    process.chdir(folderName[0]);
    fileFactoryGenerator("main.js", jsScaffholding);
    process.chdir("..");
    // Change working directory to the main folder
    process.chdir(folderName[1]);
    fileFactoryGenerator("style.css", cssScaffholding);
    process.chdir("..");
    // log("back to root file", process.cwd());
    fileFactoryGenerator("index.html", htmlScaffholding);
  } catch (error) {
    console.log("error from Head function :", error);
  }
};

module.exports = wholeFunction;
