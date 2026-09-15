const { prompt } = require("../input/prompt");
const menu = require("../userMenu/menu");
const user = require("../userMenu/user");

async function day03() {
  while (true) {
    console.clear();

    console.log("--------------------------------");
    console.log("       DAY 03 - CLI MENU");
    console.log("--------------------------------");

    console.log("1. User Menu");
    console.log("2. Application Menu");
    console.log("0. Back to Day Menu");
    console.log("--------------------------------");

    const choice = await prompt("Enter your choice: ");

    switch (choice) {
      case "1":
        await user();
        break;

      case "2":
        await menu();
        break;

      case "0":
        return;

      default:
        console.log("\n Invalid choice.");

        await prompt("\nPress Enter to try again...");
    }
  }
}

module.exports = day03;
