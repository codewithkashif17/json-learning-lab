const users = require("../data/user.json");

function viewProfile() {
  const user = users[0];

  console.log("\n--- User Profile ---");
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
}

module.exports = {
  viewProfile,
};
