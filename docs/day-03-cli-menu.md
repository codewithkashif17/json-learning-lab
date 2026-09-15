# Day 03 — CLI Menu

## Objective

The goal of Day 03 was to build an interactive command-line interface using ```Node.js```.

The project was extended from basic JSON data handling into a menu-driven application where users can interact with the application through the terminal.

## Topics Covered

 - CLI applications

 - User input

 - Node.js readline

 - Interactive menus

 - Menu selection

 - Conditional logic

 - Functions

 - Node.js modules

 - ```require()```

- ```module.exports```

- Separating application logic

- User menu handling

- Application navigation

## Project Structure

The Day 03 project is organized as follows:

```
json-learning-lab/
│
├── package.json
├── README.md
│
├── docs/
│   ├── day-01-json-project-setup.md
│   ├── day-02-json-data-handling.md
│   └── day-03-cli-menu.md
│
└── src/
    ├── index.js
    │
    ├── data/
    │   ├── menu.json
    │   └── user.json
    │
    ├── input/
    │   └── prompt.js
    │
    └── userMenu/
        ├── menu.js
        └── user.js

```

CLI Application

CLI stands for:

```Command Line Interface```

Instead of using a graphical interface, the user interacts with the application through the terminal.

## Example:

JSON Learning Lab

```
1. User Menu
2. Application Menu
3. Exit

Enter your choice:
```

The user enters a number and the application performs the selected action.

```User Input```

```Node.js``` provides the readline module for receiving input from the terminal.

## Example:

```const readline = require("readline");```


An interface can be created using:

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

```


The application can then ask the user a question.

## Prompt Module

Input functionality was separated into:

```
src/input/prompt.js
```

This keeps input-related code separate from the application logic.

The purpose of this separation is to make the project easier to maintain and understand.

## User Menu

The user-related functionality was placed inside:

```
src/userMenu/user.js
```

This module is responsible for user-related operations.

For example, it can display user information loaded from:

```
src/data/user.json
```
## Application Menu

Menu-related functionality was placed inside:

```
src/userMenu/menu.js
```

This module handles the application menu and menu-related operations.

Modular Architecture

Instead of putting all code inside one file, the project separates responsibilities:

```
index.js
   │
   ├── input/
   │     └── prompt.js
   │
   └── userMenu/
         ├── menu.js
         └── user.js

```

This approach makes the application easier to understand and maintain.
```
Node.js Modules
```
JavaScript functionality can be exported from one file and imported into another.

## Example:

```module.exports = myFunction```;


Another file can use it with:

```const myFunction = require("./myFile")```;


This concept was used to separate CLI functionality into multiple files.

## Menu Selection

The application uses user input to determine which action should be performed.

## Example:


```javascript
switch (choice) {
  case "1":
    // User menu
    break;

  case "2":
    // Application menu
    break;

  case "0":
    // Exit
    break;

  default:
    // Invalid input
}
```

This creates a clear menu-driven application flow.

## Invalid Input Handling

A CLI application should not immediately crash when the user enters an invalid option.

## For example:

```
1. User Menu
2. Application Menu
0. Exit

Enter your choice: abc

```
The application should respond with something like:

```
Invalid choice.

Please select a valid option.

```
The menu can then be displayed again.

This improves the user experience and makes the CLI more reliable.

## Application Flow

The Day 03 application follows this basic flow:

```
Start Application
       ↓
Display Menu
       ↓
Receive User Input
       ↓
Check Selection
       ↓
Perform Selected Action
       ↓
Return to Menu
       ↓
Continue
       ↓
Exit
```


## JSON Integration

The CLI application uses the JSON files created during previous learning tasks.

```
src/data/
├── menu.json
└── user.json
```

The JSON data provides the application with structured information.

This demonstrates how JSON, Node.js, and CLI functionality can work together.

Testing

The Day 03 application can be started using:


```node src/index.js```


The application was tested through the terminal.

## Testing included:

```
 -> Opening the main menu.

 -> Selecting user-related options.

 -> Selecting menu-related options.

 -> Entering valid choices.

 -> Entering invalid choices.

 -> Returning between menus.

 -> Exiting the application.

 -> What I Learned

 -> During Day 03, I learned:

 -> How CLI applications work.

 -> How to receive input from users.

 -> How to use Node.js readline.

 -> How to create interactive menus.

 -> How to use switch for menu selection.

 -> How to handle invalid input.

 -> How to separate application logic into modules.

 -> How require() and module.exports work.

 -> How JSON data can be integrated into a CLI application.

 -> How to organize a small Node.js application.

```

## Result

Day 03 was completed successfully.

The project now contains an interactive CLI menu system that works with the JSON data created during Days 01 and 02.

The application logic is separated into different modules, making the project easier to maintain and extend.

```
Learning Progress
Day 01
JSON & Project Setup
       ↓
Day 02
JSON Data Handling
       ↓
Day 03
CLI Menu
       ↓
Future
Complete CLI Lab

```

## Next Step

The next stage of the project will combine the previous days into a larger CLI-based JSON learning application.

Future improvements can include:

Main day-selection menu

Day 01 testing menu

Day 02 testing menu

Day 03 testing menu

Better input validation

Navigation between menus

JSON-based menu configuration

CRUD operations

User management

Error handling

Complete CLI application