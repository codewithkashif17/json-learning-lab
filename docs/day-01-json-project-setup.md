# Day 01 — JSON & Project Setup

## Objective

The goal of **Day 01**  was to understand the basic structure of a **Node.js** project and learn the fundamentals of **JSON data**.

This day focused on creating the project structure, understanding JSON objects and arrays, and learning how JSON data can be accessed from JavaScript.

## Topics Covered

- Node.js project setup

- Project folder organization

- JSON basics

- JSON objects

- JSON arrays

- Key-value pairs

- Nested JSON data

- Reading JSON data in Node.js

- Accessing JSON properties

## Project Structure

 The project was organized as follows:
```

json-learning-lab/
│
├── package.json
├── README.md
│
├── docs/
│   └── day-01-json-project-setup.md
│
└── src/
    ├── index.js
    │
    └── data/
        ├── menu.json
        └── user.json

```

### Understanding JSON

JSON stands for:

                JavaScript Object Notation

JSON is a lightweight format used to store and exchange structured data.

A simple JSON object looks like:
```json
{
  "name": "Ali",
  "age": 22,
  "city": "Kohat"
}
```

JSON uses key-value pairs.

## For example:

```json
"name": "Ali"
```

Here:

**name** is the **key**.

**Ali** is the **value**.

User JSON

The project contains a user.json file for storing user information.

## Example:

```json
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "age": 22,
  "city": "Kohat"
}

```


This data contains:

- User ID

- User name

- User email

- User age

- User city

- Menu JSON

The project also contains a menu.json file.

## Example:

```json
{
  "application": "JSON Learning Lab",
  "version": "1.0.0",
  "menu": [
    {
      "id": 1,
      "name": "Show User",
      "action": "showUser"
    },
    {
      "id": 2,
      "name": "Show Menu",
      "action": "showMenu"
    },
    {
      "id": 3,
      "name": "Exit",
      "action": "exit"
    }
  ]
}

```

This introduced the concept of:

 - Arrays

 - Objects inside arrays

 - Nested JSON structures

 - Reading JSON in Node.js

 - Node.js can load a JSON file using require().

## Example:

```javascript
const user = require("./data/user.json");
```

The JSON data becomes available as a JavaScript object.

Properties can then be accessed using dot notation:

```javascript
console.log(user.name);
console.log(user.email);
console.log(user.city);

```
## Example

```javascript
const user = require("./data/user.json");

console.log("User Name:", user.name);
console.log("User Email:", user.email);
console.log("User Age:", user.age);
console.log("User City:", user.city);
```

## Testing

The project was tested using Node.js from the terminal.

## Example:

```

node src/index.js
```

The JSON files were successfully loaded and their data was accessible from JavaScript.

## What I Learned

# During Day 01, I learned:

- How to create a Node.js project structure.

- What JSON is.

- How JSON objects work.

- How JSON arrays work.

- How nested JSON data is structured.

- How to store application data in JSON files.

- How Node.js can read JSON data.

- How to access JSON properties using JavaScript.

## Result


Day 01 was completed successfully.


The project now has a basic Node.js structure and JSON files that can be used as application data.

This created the foundation for Day 02, where JSON data handling and file operations were introduced.

## Next Step

```
Day 02 — JSON Data Handling

The next task focuses on reading, parsing, modifying, converting, and writing JSON data using Node.js.
```