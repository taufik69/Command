const { argv } = require("yargs");
const { MAMABANA, OPEN } = require("./src/command");
const { log } = require("console");
const wholeFunction = require("./src/wholeFunciton");
(() => {
  const { _: Command } = argv;
  switch (Command[0]) {
    case MAMABANA: {
      // log("manabana", argv);
      wholeFunction();
      log("congratulation all done , 0 vourlabilities");
      break;
    }
    default: {
      throw new Error("Command wrong write 'mamabana' ");
    }
  }
})();
