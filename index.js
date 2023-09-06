const fs = require("fs");
const path = require("path");
const { argv, command } = require("yargs");
const { log } = require("console");
(async () => {
  try {
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
    const folderName = "js";

     fs.mkdir(folderName, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
        return;
      } else {
        console.log(`Folder "${folderName}" has been created successfully.`);
      }
    })
    

    // Change working directory to the main folder
    process.chdir(folderName);
    console.log("dir :", path.resolve(__dirname));

    // const fileName = "index.html"; // Change this to the name of the folder you want to create
    // // const { _: command } = argv;
    // const htmlScaffholding = `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>

    // </body>
    // </html>`;
    // fs.writeFile(fileName, htmlScaffholding, (err) => {
    //   if (err) {
    //     console.error("Error creating folder:", err);
    //   } else {
    //     console.log(`fileName "${fileName}" has been created successfully.`);
    //   }
    // });
  } catch (error) {
    console.log("error :", error);
  }
})();
