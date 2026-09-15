const fs = require("fs");
const path = require("path");
const { prompt } = require("../input/prompt");

async function day02() {
  const userFile = path.join(__dirname, "..", "data", "user.json");

  while (true) {
    console.clear();

    console.log("--------------------------------");
    console.log("    DAY 02 - JSON HANDLING");
    console.log("--------------------------------");
    console.log("1. Read JSON File");
    console.log("2. Parse JSON");
    console.log("3. Show User Data");
    console.log("4. Update User Age");
    console.log("5. Save JSON File");
    console.log("0. Back to Day Menu");
    console.log("--------------------------------");

    const choice = await prompt("Enter your choice: ");

    switch (choice) {
      case "1": {
        const data = fs.readFileSync(userFile, "utf-8");

        console.log("\nRaw JSON:");
        console.log(data);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "2": {
        const data = fs.readFileSync(userFile, "utf-8");
        const user = JSON.parse(data);

        console.log("\nParsed JavaScript Object:");
        console.log(user);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "3": {
        const user = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        console.log("\nUser Information:");
        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("Age:", user.age);
        console.log("City:", user.city);

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "4": {
        const user = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        user.age += 1;

        console.log("\nAge updated in memory.");
        console.log("New Age:", user.age);

        const updatedData = JSON.stringify(user, null, 2);

        fs.writeFileSync(
          userFile,
          updatedData,
          "utf-8"
        );

        console.log("JSON file saved successfully.");

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "5": {
        const user = JSON.parse(
          fs.readFileSync(userFile, "utf-8")
        );

        const jsonData = JSON.stringify(user, null, 2);

        fs.writeFileSync(
          userFile,
          jsonData,
          "utf-8"
        );

        console.log("\n JSON file saved successfully.");

        await prompt("\nPress Enter to continue...");
        break;
      }

      case "0":
        return;

      default:
        console.log("\n Invalid choice.");
        console.log("Please enter a valid option.");

        await prompt("\nPress Enter to try again...");
    }
  }
}

module.exports = day02;
