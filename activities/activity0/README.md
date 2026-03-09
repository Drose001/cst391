
# CST-391 Activity 0

![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Supported-blue)
![NPM](https://img.shields.io/badge/npm-Package%20Manager-red)
![License](https://img.shields.io/badge/license-Educational-lightgrey)

## Overview

This project demonstrates the setup and validation of a Node.js development environment.
It includes verification of Node.js and npm installations, a simple console application,
an Express web server, and a TypeScript implementation.

---

# Table of Contents

- Overview
- Technologies Used
- Environment Setup
- Project Structure
- Screenshots and Validation
- API Request Flow
- Running the Project
- Author

---

# Technologies Used

- Node.js
- npm
- Express.js
- TypeScript
- Nodemon
- Visual Studio Code

---

# Environment Setup

The development environment was validated by confirming the installation of the following tools:

| Tool | Purpose |
|-----|------|
| Node.js | JavaScript runtime |
| npm | Package manager |
| Express | Web server framework |
| Nodemon | Auto restart development server |
| TypeScript | Typed JavaScript |

---

<<<<<<< HEAD
## Project Structure
=======
# Project Structure

```
MusicAPI
│
├── src
│   └── app.ts
│
├── app.js
├── package.json
├── tsconfig.json
└── README.md
```

---

# Screenshots and Validation


---

# Screenshots and Validation

## 1. Node.js Version

![Node Version](MusicAPI/images/node-version.png)

*This screenshot shows the installed Node.js version using the command `node -v`. This confirms that Node.js is installed correctly.*

---

## 2. NPM Version

![NPM Version](MusicAPI/images/npm-version.png)

*This screenshot shows the installed npm version using the command `npm -v`. This verifies that the Node Package Manager is installed and working.*

---

## 3. Hello World Console Application

![Hello World Console](MusicAPI/images/hello-console.png)

*This screenshot shows the simple Node.js console application running `app.js` and printing **Hello World** in the terminal.*

---

## 4. Express Hello World in Browser

![Express Hello World](MusicAPI/images/express-browser.png)

*This screenshot shows the Express server running and displaying the **Hello World** message in the browser.*

URL:  
`http://localhost:3000`

---

## 5. Hello World with Nodemon

![Nodemon Running](MusicAPI/images/nodemon-running.png)

*This screenshot shows the application running using the **nodemon utility**, which automatically restarts the server when code changes are made.*

---

## 6. TypeScript Hello World in Browser

![TypeScript Hello World](MusicAPI/images/typescript-browser.png)

*This screenshot shows the Node.js web service written in **TypeScript** running successfully in the browser.*

---

## 7. Commented app.ts File

![Commented TypeScript Code](MusicAPI/images/app-ts-comments.png)

*This screenshot shows the `app.ts` TypeScript file with descriptive comments explaining each line of code.*

---

# API Request Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant ExpressServer
    participant NodeApp

    User->>Browser: Enter http://localhost:3000
    Browser->>ExpressServer: HTTP Request
    ExpressServer->>NodeApp: Process Route
    NodeApp-->>ExpressServer: Return Response
    ExpressServer-->>Browser: Send Hello World
    Browser-->>User: Display Page
# API Request Flow

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant ExpressServer
    participant NodeApp

    User->>Browser: Enter http://localhost:3000
    Browser->>ExpressServer: HTTP Request
    ExpressServer->>NodeApp: Process Route
    NodeApp-->>ExpressServer: Return Response
    ExpressServer-->>Browser: Send Hello World
    Browser-->>User: Display Page
```

---

# Running the Project

Install dependencies:

```
npm install
```

Run application:

```
node app.js
```

Run with nodemon:

```
npm run start
```

Run TypeScript version:

```
npx ts-node src/app.ts
```

---

# Author

Doreen Rose  
Bachelor's in Software Development  
Grand Canyon University

Skills:
- Python
- Java
- JavaScript
- C#
- SQL
- Web Development
 
>>>>>>> 152ebe5 (Fix README image paths)
