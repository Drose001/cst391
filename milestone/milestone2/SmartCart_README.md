# 🛒 SmartCart Grocery Planner

A simple full-stack web application that helps users manage their
grocery shopping list.\
Users can add, edit, delete, and search grocery items while organizing
them by category.

This project demonstrates how a modern web application connects the
**frontend, backend, and database**.

------------------------------------------------------------------------

# 📚 Course Information

**Course:** CST-391 JavaScript Web Application Development\
**Author:** Doreen Rose\
**Date:** March 8, 2026

------------------------------------------------------------------------

# 🚀 Project Overview

SmartCart Grocery Planner allows users to track grocery items they need
to purchase.\
The goal is to build a simple but complete web application that
demonstrates how data flows between a client interface, server API, and
database.

The application will be built twice to compare modern frontend
frameworks:

-   Angular
-   React

------------------------------------------------------------------------

# 🧰 Technology Stack

## Development Tools

-   Visual Studio Code
-   GitHub
-   Node Package Manager (NPM)

## Backend

-   Node.js
-   Express.js
-   REST API
-   MySQL Database

## Frontend

-   Angular
-   React

------------------------------------------------------------------------

# 🏗 Application Architecture

``` mermaid
flowchart LR
    User --> Frontend
    Frontend --> API
    API --> Database
    Database --> API
    API --> Frontend
```

**Explanation**

1.  The user interacts with the frontend interface.
2.  The frontend sends requests to the Node.js Express API.
3.  The API communicates with the MySQL database.
4.  Data is returned to the frontend and displayed to the user.

------------------------------------------------------------------------

# 📂 Project Structure

    SmartCart-Grocery-Planner
    │
    ├── backend
    │   ├── controllers
    │   ├── routes
    │   ├── dao
    │   └── app.js
    │
    ├── frontend-angular
    │
    ├── frontend-react
    │
    ├── database
    │   └── schema.sql
    │
    └── README.md

------------------------------------------------------------------------

# 📡 API Endpoints

  Method   Endpoint     Description
  -------- ------------ ------------------------
  GET      /items       Get all grocery items
  GET      /items/:id   Get one grocery item
  POST     /items       Add a new grocery item
  PUT      /items/:id   Update an item
  DELETE   /items/:id   Delete an item

------------------------------------------------------------------------

# 🗄 Database Design

``` mermaid
erDiagram
    PRODUCT {
        int id
        string name
        string category
        int quantity
        decimal price
    }
```

### Product Table

  Field      Type      Description
  ---------- --------- ------------------
  id         INT       Product ID
  name       VARCHAR   Item name
  category   VARCHAR   Grocery category
  quantity   INT       Quantity needed
  price      DECIMAL   Item price

------------------------------------------------------------------------

# 👤 User Stories

-   As a user, I want to **add grocery items** so I can keep track of
    what I need to buy.
-   As a user, I want to **view grocery items** so I can see my full
    shopping list.
-   As a user, I want to **edit grocery items** so I can update the
    quantity or price.
-   As a user, I want to **delete grocery items** so I can remove items
    I no longer need.
-   As a user, I want to **search grocery items** so I can quickly find
    an item.
-   As a user, I want to **organize items by category** to make the list
    easier to read.

------------------------------------------------------------------------

# ⚠️ Project Risks

Possible challenges for this project include:

-   Learning both **Angular and React**
-   Connecting **Express APIs with MySQL**
-   Managing time to complete all course milestones

------------------------------------------------------------------------

# 🔮 Future Improvements

Possible improvements include:

-   User authentication
-   Budget tracking
-   Mobile responsive design
-   Barcode scanning
-   Store location integration

------------------------------------------------------------------------

# 📄 License

This project is created for educational purposes for the **Grand Canyon
University Software Development program**.

------------------------------------------------------------------------

# 🔄 API Request Flow

``` mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant API as Node.js / Express API
    participant DB as MySQL Database

    User->>Frontend: Add / View / Edit / Delete item
    Frontend->>API: Send HTTP request
    Note over Frontend,API: GET, POST, PUT, DELETE
    API->>DB: Execute SQL query
    DB-->>API: Return results
    API-->>Frontend: JSON response
    Frontend-->>User: Updated grocery list displayed
```
