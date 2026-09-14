const menuItems = require("./userMenu/menu");
const { ask } = require("./input/prompt");
const { viewProfile } = require("./userMenu/user");

async function main() {
  menuItems();

  const choice = await ask("Select an option: ");

  if (Number(choice) === 1) {
    viewProfile();

    await ask("\nPress Enter to return to menu...");
    
    main();
  }
}

main();
