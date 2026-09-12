import fs from "fs";

const data = fs.readFileSync("./data/user.json", "utf-8");
const user = JSON.parse(data);
console.log(`
    name: ${user.name},
    age: ${user.age}
    email: ${user.email},
    phone: ${user.phone}
    address: ${user.address},
    isActive: ${user.isActive}
    hobbies: ${user.hobbies}
`);
