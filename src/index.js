const fs = require("fs");
const path = require("path");

const { prompt, closePrompt } = require("./input/prompt");

const day01 = require("./days/day01");
const day02 = require("./days/day02");
const day03 = require("./days/day03");

const menuFile = path.join(__dirname, "data", "menu.json");

async function main() {
  while (true) {
    console.clear();

    const menuData = JSON.parse(
      fs.readFileSync(menuFile, "utf-8")
    );

    console.log("----------------------------------------");
    console.log(`       ${menuData.application}`);
    console.log(`              v${menuData.version}`);
    console.log("----------------------------------------");

    menuData.days.forEach((day) => {
      console.log(`${day.id}. ${day.title}`);
    });

    console.log("----------------------------------------");
    console.log("0. Exit");
    console.log("----------------------------------------");

    const choice = await prompt("Select Day: ");

    switch (choice) {
      case "1":
        await day01();
        break;

      case "2":
        await day02();
        break;

      case "3":
        await day03();
        break;

      case "0":
        console.log("\nThank you for using JSON Learning Lab.");
        closePrompt();
        return;

      default:
        console.log("\n Invalid input!");
        console.log("Please select a valid day.");

        await prompt("\nPress Enter to continue...");
    }
  }
}

main().catch((error) => {
  console.error("\n Application Error:");
  console.error(error);

  closePrompt();
});
