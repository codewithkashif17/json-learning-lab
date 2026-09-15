# Day 02 — JSON Data Handling

## Objective

The goal of Day 02 was to learn how to work with JSON files using Node.js file system operations.

The focus was on 
```
-> reading JSON files,
-> converting JSON strings into JavaScript objects, 
-> modifying data, 
-> converting objects back into JSON,
-> and saving the updated data.
```
# Topics Covered

- Node.js fs module

- Node.js path module

- Reading files

- File encoding

- JSON.parse()

- JavaScript objects

- Modifying JSON data

- JSON.stringify()

- Writing files

- JSON data persistence


# Project Structure

Day 02 builds on the structure created during Day 01.

```
json-learning-lab/
│
├── package.json
├── README.md
│
├── docs/
│   ├── day-01-json-project-setup.md
│   └── day-02-json-data-handling.md
│
└── src/
    ├── index.js
    ├── day02.js
    │
    └── data/
        ├── menu.json
        └── user.json

```
Node.js File System Module

Node.js provides the built-in fs module for working with files.

It can be imported using:

```javascript
const fs = require("fs");

```


The fs module can be used to:
```
Read files

Write files

Update files

Delete files

Check file information
```

## Path Module

The path module can be used to create file paths.

## Example:

```javascript

const path = require("path");
```

A path to the user JSON file can be created using:

```javascript
const userFile = path.join(
  __dirname,
  "data",
  "user.json"
);

```


Using ```javascript path.join() ``` makes file paths easier to manage.

### Reading JSON Files

The JSON file can be read using:

```javascript
const jsonData = fs.readFileSync(
  userFile,
  "utf-8"
);

```

The result is returned as a string.

## For example:

```json
{
  "id": 1,
  "name": "Ali",
  "age": 22
}

```

At this point the data is still a JSON string.

```javascript
JSON.parse()
```

To convert the JSON string into a JavaScript object, JSON.parse() is used.

```javascript
const user = JSON.parse(jsonData);
```

### The flow is:

```
JSON File
   ↓
readFileSync()
   ↓
JSON String
   ↓
JSON.parse()
   ↓
JavaScript Object

```

After parsing, JavaScript properties can be accessed normally:

```javascript
console.log(user.name);
console.log(user.email);
console.log(user.age);
```
## Modifying Data

Once JSON has been converted into a JavaScript object, the data can be modified.

## Example:

```javascript
user.age = user.age + 1;
```

### Another example:

```javascript
user.city = "Islamabad";
```

This modification happens to the JavaScript object in memory.

```javascript
JSON.stringify()
```

After modifying the JavaScript object, it can be converted back into JSON.

```javascript
const updatedJson = JSON.stringify(
  user,
  null,
  2
);
```

The null and 2 arguments format the JSON with indentation.

This makes the resulting JSON easier to read.

Writing Data to the JSON File

## The updated JSON can be saved using:

```javascript
fs.writeFileSync(
  userFile,
  updatedJson,
  "utf-8"
);
```

## The complete process is:

```
JSON File
   ↓
readFileSync()
   ↓
JSON String
   ↓
JSON.parse()
   ↓
JavaScript Object
   ↓
Modify Data
   ↓
JSON.stringify()
   ↓
JSON String
   ↓
writeFileSync()
   ↓
Updated JSON File
```

## Example

A basic Day 02 implementation:

```javascript
const fs = require("fs");
const path = require("path");

const userFile = path.join(
  __dirname,
  "data",
  "user.json"
);

const jsonData = fs.readFileSync(
  userFile,
  "utf-8"
);

const user = JSON.parse(jsonData);

console.log("User:", user);

user.age = user.age + 1;

const updatedJson = JSON.stringify(
  user,
  null,
  2
);

fs.writeFileSync(
  userFile,
  updatedJson,
  "utf-8"
);

console.log("User data updated successfully.");

```

## Testing

The Day 02 implementation was tested using:

```
node src/day02.js
```

The application successfully:

Read the JSON file.

Converted the file content into a JavaScript object.

Displayed user information.

Modified user data.

Converted the object back to JSON.

Saved the updated JSON file.

Important Concepts
```readFileSync()```

Used to read file content.


```fs.readFileSync(file, "utf-8");```

```JSON.parse()```

Converts JSON text into a JavaScript object.

```JSON.parse(jsonData);```

```JSON.stringify()```

Converts a JavaScript object into JSON text.

```JSON.stringify(user, null, 2);```

```writeFileSync()```

Writes data into a file.

```fs.writeFileSync(file, data, "utf-8");```

What I Learned

During Day 02, I learned:

How to use Node.js fs.

How to read files.

How to use ```JSON.parse()```.

How to work with JavaScript objects.

How to modify JSON data.

How to use ```JSON.stringify()```.

How to write data to JSON files.

How JSON can be used as persistent application data.

Result

Day 02 was completed successfully.

The project can now read and write JSON data using Node.js.

This provided the foundation for the CLI application developed during Day 03.

## Next Step

```
Day 03 — CLI Menu
```
The next task focuses on user input, interactive menus, application navigation, and separating CLI logic into different modules.