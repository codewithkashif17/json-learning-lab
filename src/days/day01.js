const fs = require("fs");
const path = require("path");
const { prompt } = require("../input/prompt");

async function day01() {
  const userFile = path.join(__dirname, "..", "data", "user.json");

  while (true) {
    console.clear();

    console.log("--------------------------------");
    console.log("       DAY 01 - JSON");
    console.log("--------------------------------");
    console.log("1. Show User JSON");
    console.log("2. Show User Name");
    console.log("3. Show User Email");
    console.log("4. Show User City");
    console.log("0. Back to Day Menu");
    console.log("--------------------------------");

    const choice = await prompt("Enter your choice: ");

    switch (choice) {
      case "1": {
        const data = fs.readFileSync(userFile, "utf-8");

        console.log("\nUser JSON:");
        console.log(data);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "2": {
        const data = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        console.log("\nUser Name:", data.name);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "3": {
        const data = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        console.log("\nUser Email:", data.email);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "4": {
        const data = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        console.log("\nUser City:", data.city);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "0":
        return;

      default:
        console.log("\nError: Invalid choice.");
        console.log("Please select a valid option.");

        await prompt("\nPress Enter to try again...");
    }
  }
}

module.exports = day01;
