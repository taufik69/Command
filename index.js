const fs = require("fs");
const path = require("path");
const { argv, command } = require("yargs");
const { log } = require("console");
(async () => {
  try {
    // let pathName = path.resolve(__dirname);
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
    const folderName = ["js", "css"];
    for (let i = 0; i < folderName.length; i++) {
      fs.mkdir(folderName[i], (err) => {
        if (err) {
          console.error("Error creating folder:", err);
        } else {
          console.log(
            `Folder "${folderName[i]}" has been created successfully.`
          );
        }
      });
    }

    const fileName = "index.html"; // Change this to the name of the folder you want to create
    const { _: command } = argv;
    const htmlScaffholding = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;
    fs.writeFile(fileName, htmlScaffholding, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
      } else {
        console.log(`fileName "${fileName}" has been created successfully.`);
      }
    });
  } catch (error) {
    console.log("error :", error);
  }
})();
