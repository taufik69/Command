const fs = require("fs");
const path = require("path");
const { argv } = require("yargs");
const { log } = require("console");
const fileFactoryGenerator = require("./src/fileFactory");
(() => {
  try {
    
    const folderName = ["js", "css"];
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
    const jsScaffholding = `use strict`;
    fileFactoryGenerator("main.js", jsScaffholding);

    process.chdir("..");
    // Change working directory to the main folder
    process.chdir(folderName[1]);
    const cssScaffholding = `
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  ul,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img{
      vertical-align: middle;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  p,
  li {
    padding: 0;
    margin: 0;
  }
    `;
    fileFactoryGenerator("style.css", cssScaffholding);
    process.chdir("..");
    // log("back to root file", process.cwd());
    const htmlScaffholding = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        <script src="js/main.js"></script>
      </body>
    </html>
    `;
    fileFactoryGenerator("index.html", htmlScaffholding);
  } catch (error) {
    console.log("error from Head function :", error);
  }
})();
