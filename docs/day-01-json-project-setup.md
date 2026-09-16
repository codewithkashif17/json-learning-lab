# Day 01 — JSON & Project Setup

## Objective

The goal of Day 01 was to understand the basic structure of a Node.js project and learn the fundamentals of JSON data.

This day focused on creating the project structure, understanding JSON objects and arrays, learning key-value pairs, reading JSON data from files, and accessing specific user information using an ID.

## Topics Covered

- Node.js project setup

- Project folder organization

- JSON basics

- JSON objects

- JSON arrays

- Key-value pairs

- Nested JSON data

- Reading JSON data in Node.js

- Parsing JSON using JSON.parse()

- Accessing JSON properties

- Accessing user data using an ID

- Using fs.readFileSync()

- Using path.join()

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
    ├── data/
    │   ├── menu.json
    │   └── user.json
    │
    ├── days/
    │   └── day01.js
    │
    └── input/
        └── prompt.js

```

## Understanding JSON

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

name is the key.

Ali is the value.

User JSON

The project contains a user.json file for storing user information.

The user data is stored as an array containing multiple user objects.

## Example

```json
[
  {
    "id": 0,
    "name": "Ali",
    "email": "ali@example.com",
    "age": 22,
    "city": "Kohat"
  },
  {
    "id": 1,
    "name": "Ahmed",
    "email": "ahmed@example.com",
    "age": 24,
    "city": "Peshawar"
  },
  {
    "id": 2,
    "name": "Usman",
    "email": "usman@example.com",
    "age": 21,
    "city": "Islamabad"
  }
]

```

This data contains:

User ID

User name

User email

User age

User city

Reading JSON Data

Node.js can read a JSON file using the fs module.

## Example:

```const fs = require("fs");```

```const data = fs.readFileSync(userFile, "utf-8");```


The ```fs.readFileSync()``` method reads the JSON file as text.

Because the result is a string, it needs to be converted into a JavaScript object or array.

Parsing JSON

The JSON string can be converted into JavaScript data using ```JSON.parse()```.

## Example:

```js
const data = JSON.parse(
  fs.readFileSync(userFile, "utf-8")
);

```


After parsing, the JSON data can be accessed using JavaScript.

Accessing User Data

Because user.json contains an array of users, individual users can be accessed using their array index.

## For example:

```js
console.log(data[0].name);
console.log(data[1].name);
console.log(data[2].name);
```

This allows the program to access the name of a specific user.

Accessing User Data Using ID

A new feature was added to Day 01 that allows the user to enter an ID and then display information for that user.

The program currently supports displaying:

User name

User email

User city

## Example — User Name
```js
const choice = await prompt("Enter ID: ");

if (choice === "0") {
  console.log(data[0].name);
} else if (choice === "1") {
  console.log(data[1].name);
} else if (choice === "2") {
  console.log(data[2].name);
}

```

The user enters an ID and the program displays the corresponding user's name.

## Example — User Email

```js
const choice = await prompt("Enter ID: ");

if (choice === "0") {
  console.log(data[0].email);
} else if (choice === "1") {
  console.log(data[1].email);
} else if (choice === "2") {
  console.log(data[2].email);
}

```

## Example — User City

```js
const choice = await prompt("Enter ID: ");

if (choice === "0") {
  console.log(data[0].city);
} else if (choice === "1") {
  console.log(data[1].city);
} else if (choice === "2") {
  console.log(data[2].city);
}

```

This introduced the basic concept of selecting a specific item from an array and then accessing one of its properties.

# Menu Options

The Day 01 program provides the following options:
```
1. Show User JSON
2. Show User Name
3. Show User Email
4. Show User City
0. Back to Day Menu
```

```Option 1 — Show User JSON```

Displays the complete user.json file.

```Option 2 — Show User Name```

Asks for a user ID and displays the corresponding user's name.

```Option 3 — Show User Email```

Asks for a user ID and displays the corresponding user's email.

```Option 4 — Show User City```

Asks for a user ID and displays the corresponding user's city.

```Option 0 — Back to Day Menu```

Returns to the main day menu.

## Menu JSON

The project also contains a menu.json file.

# Example

```js
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

# Arrays

Objects inside arrays

Nested JSON structures

Reading JSON in Node.js

Testing

The project was tested using Node.js from the terminal.

Run the project using:

node src/index.js


The Day 01 menu can then be opened and tested.

## For example:

# DAY 01 - JSON


```
1. Show User JSON
2. Show User Name
3. Show User Email
4. Show User City
0. Back to Day Menu

```

A user can select options 2, 3, or 4 and enter an ID to display information for the selected user.

What I Learned

During Day 01, I learned:

How to create a Node.js project structure.

What JSON is.

How JSON objects work.

How JSON arrays work.

How nested JSON data is structured.

How to store application data in JSON files.

How Node.js can read JSON data.

How to parse JSON using JSON.parse().

How to access JSON properties using JavaScript.

How to access array elements using indexes.

How to use an ID to select a specific user.

How to display a user's name, email, and city.

# Day 01 Update

An additional feature was implemented during Day 01.

Previously, the program could display JSON data, but specific user information was not selected through an ID.

The program was updated so that the user can enter an ID and retrieve:

```
User Name
User Email
User City
```

This was an important step toward understanding how JSON arrays and objects can be accessed programmatically.

# Result

Day 01 was completed successfully.

The project now has a basic Node.js structure and JSON files that can be used as application data.

The Day 01 program can read user data from user.json and display specific user information based on the entered ID.

This created the foundation for Day 02, where JSON data handling and file operations will be introduced.

Next Step
Day 02 — JSON Data Handling

The next task focuses on reading, parsing, modifying, converting, and writing JSON data using Node.js.