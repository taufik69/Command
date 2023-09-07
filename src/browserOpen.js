const path = require("path");
const open = require("open");

const browserOpen = (filePath) => {
  // Open the file in the default web browser
  try {
    let givenFilePath = `${path.resolve(__dirname)}\\index.html`;
    open(givenFilePath, { wait: true });
  } catch (error) {
    console.error(`Error opening ${givenFilePath}:`, error);
  }
};

module.exports = browserOpen;
