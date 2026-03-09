# Activity 1


# MusicAPI

## Overview
MusicAPI is a RESTful API built using **Node.js, Express, and TypeScript**.  
The application demonstrates how to build a backend API that connects to a **MySQL database** and returns music-related data such as albums, artists, and tracks.

This project follows the **Model-View-Controller (MVC)** architecture. The router receives incoming requests, controllers handle the request logic, and data access objects (DAO) communicate with the MySQL database.

The API returns JSON responses and can be tested using **Postman** or a web browser.

---

## Screencast

The screencast demonstration of this project can be viewed here:

**Screencast Link:**  
*(https://drive.google.com/file/d/1_Ps4RWpGKtyceTcAiYccckO8GBnbHkUQ/view?usp=sharing)*

The screencast demonstrates:
- Starting the MusicAPI server
- Testing endpoints using Postman
- Retrieving albums and artists
- Demonstrating API functionality
- Explaining one API method including the router, controller, and DAO

---

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MySQL
- dotenv
- cors
- helmet
- nodemon

---

## Project Structure

```
src
│
├── albums
│   ├── albums.controller.ts
│   ├── albums.dao.ts
│   ├── albums.model.ts
│   ├── albums.queries.ts
│   └── albums.routes.ts
│
├── artists
│   ├── artists.controller.ts
│   ├── artists.dao.ts
│   ├── artists.model.ts
│   ├── artists.queries.ts
│   └── artists.routes.ts
│
├── tracks
│   ├── tracks.dao.ts
│   ├── tracks.model.ts
│   └── tracks.queries.ts
│
├── middleware
│   └── logger.middleware.ts
│
├── services
│   └── mysql.connector.ts
│
└── app.ts
```

---

## Installation

Clone the repository:

```
git clone <https://github.com/Drose001/cst391.gitl>
```

Navigate to the project directory:

```
cd MusicAPI
```

Install dependencies:

```
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory.

```
# MySQL Settings
MY_SQL_DB_HOST=127.0.0.1
MY_SQL_DB_USER=root
MY_SQL_DB_PASSWORD=root
MY_SQL_DB_PORT=3306
MY_SQL_DB_DATABASE=music
MY_SQL_DB_CONNECTION_LIMIT=10

# Server Settings
PORT=3000
NODE_ENV=development
GREETING=Hello from the environment file in dev mode
```

---

## Running the Application

Start the server:

```
npm run start
```

or run with automatic reload:

```
npm run start:watch
```

The API will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Get all albums
```
GET /albums
```

### Get album by ID
```
GET /albums?albumId=1
```

### Search albums by artist
```
GET /albums/artist/:artist
```

### Search albums by artist keyword
```
GET /albums/search/:search
```

### Search albums by description
```
GET /albums/description/:search
```

### Create album
```
POST /albums
```

### Update album
```
PUT /albums
```

### Delete album
```
DELETE /albums/:albumId
```

### Get artists
```
GET /artists
```

---

## Example Request

```
GET http://localhost:3000/albums
```

Example JSON response:

```json
[
  {
    "albumId": 1,
    "title": "Thriller",
    "artist": "Michael Jackson",
    "year": 1982
  }
]
```

---

## Architecture

The MusicAPI uses the **MVC pattern**.

**Router**  
Handles API routes and directs requests to the correct controller.

**Controller**  
Processes the request and sends a response back to the client.

**DAO (Data Access Object)**  
Handles communication with the MySQL database.

**Database**  
Stores album, artist, and track data.

---

## Middleware

The project uses several middleware tools:

- **cors** – allows cross-origin requests
- **helmet** – adds security-related HTTP headers
- **logger middleware** – logs request information
- **express.json()** – parses JSON request bodies

---

## Author

Doreen Rose  
Bachelor of Science in Software Development  
Grand Canyon University
