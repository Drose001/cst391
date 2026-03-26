# Music Collection Application (Angular)

## Overview
This project is a web-based music collection application built using Angular. The application allows users to browse artists, view albums, display album details, and perform actions such as creating, editing, and deleting albums.

---

## Features
- View a list of artists (from backend API)
- Select an artist to view albums
- View album details:
  - Title
  - Artist
  - Description
  - Year
  - Image
  - Tracks
- Create a new album
- Edit an existing album
- Delete an album

---

## Technologies Used
- Angular
- TypeScript
- HTML / CSS (Bootstrap)
- Node.js (API)
- JSON (local data)

---

## How It Works
- The app uses a **MusicService** to manage data
- Artists are retrieved from a backend API (`http://localhost:3000`)
- Albums are loaded from a local JSON file
- Angular **Input/Output bindings** are used for component communication
- Forms use **ngModel (two-way binding)**

---

## Screenshots

### Main Application Screen
![Main Screen](images/main.png)

### Artist List
![Artist List](images/artists.png)

### Album List
![Album List](images/albums.png)

### Album Details
![Album Details](images/details.png)

### Create Album
![Create Album](images/create.png)

### Edit Album
![Edit Album](images/edit.png)

---

## Running the Application
ng serve --o

## Install dependencies

npm install