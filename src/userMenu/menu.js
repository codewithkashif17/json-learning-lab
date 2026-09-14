const menu = require("../data/menu.json");

function showMenu() {
    console.log("\n\n----------Menu-----------");
  menu.forEach((item) => {
    console.log(`${item.id} ${item.name}`);
  });
}

module.exports = showMenu;
