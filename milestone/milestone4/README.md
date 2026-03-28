# 🛒 SmartCart Grocery Planner (Angular)

## 👩‍💻 Author
Doreen Rose  
Grand Canyon University  
Bachelor’s in Software Development  

---

## 📌 Overview
SmartCart is a front-end web application built using Angular that allows users to manage grocery items through a browser-based user interface. The application connects to a REST API developed with Node.js and Express, and the data is stored in a MySQL relational database.

The Angular frontend communicates with the backend API using HTTP requests. The backend processes the request and interacts with the database, then returns a JSON response that updates the user interface.

---

## 🚀 Features
- View all grocery products
- Add new products
- Edit existing products
- Delete products
- View product details
- Responsive UI using Bootstrap
- Navigation with Angular Router
- Integration with a REST API

---

## 🛠️ Technologies Used
- Angular
- TypeScript
- HTML
- CSS
- Bootstrap
- Node.js
- Express
- MySQL

---

## 🏗️ Application Architecture

```mermaid
flowchart TD
    A[User] --> B[Angular Frontend]
    B --> C[Product Service]
    C --> D[HTTP Client]
    D --> E[Express REST API]
    E --> F[MySQL Database]
    F --> E
    E --> D
    D --> C
    C --> B
    B --> A
```

### Explanation
This diagram shows how data flows through the system from user to database and back.

---

## 🔄 CRUD Interaction Flow

```mermaid
flowchart LR
    A[User Action] --> B[Angular Component]
    B --> C[Product Service]
    C --> D[HTTP Request]
    D --> E[REST API]
    E --> F[Database]
    F --> E
    E --> D
    D --> C
    C --> B
    B --> G[Updated UI]
```

### Explanation
Each user action follows this path through the system.

---

## ⏱️ Sequence Diagram

```mermaid
sequenceDiagram
    actor User
    participant UI as Angular UI
    participant Service as Product Service
    participant API as Express API
    participant DB as MySQL

    User->>UI: Open Products Page
    UI->>Service: getProducts()
    Service->>API: GET /api/items
    API->>DB: SELECT * FROM items
    DB-->>API: Data
    API-->>Service: JSON
    Service-->>UI: Products
    UI-->>User: Display
```

---

## 📂 Project Structure

```mermaid
graph TD
    A[src/app] --> B[components]
    B --> C[home]
    B --> D[navbar]
    B --> E[product-list]
    B --> F[product-form]
    B --> G[product-detail]
    A --> H[models]
    H --> I[product.ts]
    A --> J[services]
    J --> K[product.ts]
```

---

## 🔗 API Integration

http://localhost:3000/api/items

---

## ▶️ Running the Application

npm install  
ng serve  
http://localhost:4200  

---

## 📸 Screenshots

![Home](images/home.png)
![Product List](images/product-list.png)
![Add Product](images/add-product.png)
![Edit Product](images/edit-product.png)
![Product Details](images/product-detail.png)
![Delete](images/delete.png)

---

## 🎯 Conclusion
This project demonstrates a complete Angular frontend connected to a REST API performing full CRUD operations.

---

## Screencast
https://drive.google.com/file/d/1G7VO2xq0Tj26zrfYw-O0tm57gl_ymV4A/view
