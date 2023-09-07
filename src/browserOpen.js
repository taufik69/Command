const { exec } = require("child_process");
const browserOpen = (pathUrl) => {
  // Open the file in the default web browser
  exec(pathUrl, (error, stdout) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }

    console.log(`Command output:\n${stdout}`);
  });
};

module.exports = browserOpen;
