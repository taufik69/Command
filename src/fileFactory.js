const fs = require("fs");
const path = require("path");

const fileFactoryGenerator = async (ArrfileName, Scaffholding) => {
  const fileName = ArrfileName;

  fs.writeFileSync(fileName, Scaffholding, (err) => {
    if (err) {
      console.error("Error creating folder:", err);
      return;
    } else {
      console.log(`fileName "${fileName}" has been created successfully.`);
    }
  });
};

module.exports = fileFactoryGenerator;
