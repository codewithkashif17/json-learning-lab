# Day 03 — CLI Menu
Today's Goal

Build a simple interactive CLI menu in Node.js using JSON data and user input.

```
Project Structure
src/
├── data/
│   ├── menu.json
│   └── user.json
│
├── input/
│   └── prompt.js
│
├── userMenu/
│   ├── menu.js
│   └── user.js
│
└── index.js
```
## 1. Reading Menu Data from JSON

The menu is stored in **menu.json**.

**Node.js** can directly load JSON using **require()**:

```javascript
const menu = require("../data/menu.json");
```

There is no need to use JSON.parse() because Node.js automatically parses the JSON file when using require().

## 2. Displaying the Menu

The menu items are displayed using **forEach()**:

```javascript
const menuItems = require("./userMenu/menu");

async function main() {
  menuItems();

}

main();

```



# Example output:

```
1 View Profile
2 View Orders
3 Settings
4 Logout
```

## 3. map() vs forEach()

Initially, I used map() like this:

```javascript
const menuItems = menu.map((item) => {
  console.log(`${item.id} ${item.name}`);
});

```


This resulted in undefined values because the callback did not return anything.

map() is used when we want to create a new array:

```javascript
const names = menu.map((item) => {
  return item.name;
});

```

forEach() is better when we simply want to perform an action for every item:

```javascript
menu.forEach((item) => {
  console.log(item.name);
});

```

Rule
forEach() → perform an action
map() → create a new array
find() → find one item
filter() → find multiple items
4. Creating a Reusable Input Function

I created input/prompt.js to handle terminal input.

```javascript
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

module.exports = { ask };

```

Now the function can be used anywhere in the application.


```javascript
const { ask } = require("./input/prompt");

const choice = await ask("Select an option: ");

```

## 5. Separating User Profile Logic

The profile functionality is kept in **userMenu/user.js**.

```javascript
const user = require("../data/user.json");

function viewProfile() {
  console.log("\n--- User Profile ---");
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
}

module.exports = {
  viewProfile,
};

```

This keeps index.js from becoming too large.

## 6. Handling the Selected Option

The selected input is a string, so it can be converted to a number:

```javascript
const choice = await ask("Select an option: ");

if (Number(choice) === 1) {
  viewProfile();
}

```

When the user enters 1, the profile is displayed.

Example:
```
----------Menu-----------
1 View Profile
2 View Orders
3 Settings
4 Logout

Select an option: 1

--- User Profile ---
Name: Ali
Email: ali@example.com

```

## 7. Waiting Before Returning to the Menu

After displaying the profile, the application can wait for the user:

```javascript
await ask("\nPress Enter to return to menu...");
```

This allows the user to read the profile before continuing.

# What I Learned
 - How to load JSON data with require().
 - Why JSON.parse() is not required after require() for JSON files.
 - The difference between map() and forEach().
 - Why undefined appeared when using map() without return.
 - How to create reusable modules.
 - How module.exports and require() work.
 - How to take terminal input using Node.js readline.
 - How to handle a selected menu option.
 - How to separate user profile logic into its own module.
 - Next Task

Improve the **CLI** menu using a while loop so that the menu keeps running until the user selects Logout.

## Planned options:
```
1 View Profile
2 View Orders
3 Settings
4 Logout
```