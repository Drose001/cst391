# 🛒 SmartCart Grocery Planner (Angular)

## 👩‍💻 Author
Doreen Rose  
Grand Canyon University  
Bachelor’s in Software Development  

---

## 📌 Overview
SmartCart is a front-end web application built using Angular that allows users to manage grocery items. The application connects to a REST API and supports full CRUD operations (Create, Read, Update, Delete).

---

## 🚀 Features
- View all grocery products
- Add new products
- Edit existing products
- Delete products
- View product details
- Responsive UI using Bootstrap
- Navigation with Angular Router

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
    DB-->>API: Product rows
    API-->>Service: JSON response
    Service-->>UI: Product list
    UI-->>User: Display products
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

### Install dependencies
npm install

### Run Angular
ng serve

### Open browser
http://localhost:4200

---

## 📸 Screenshots

### 🏠 Home Page
![Home](images/home.png)

### 📋 Product List
![Product List](images/product-list.png)

### ➕ Add Product
![Add Product](images/add-product.png)

### ✏️ Edit Product
![Edit Product](images/edit-product.png)

### 🔍 Product Details
![Product Details](images/product-detail.png)

### ❌ Delete Confirmation
![Delete](images/delete.png)

---

## ⚠️ Challenges
- Handling async API calls in Angular
- Fixing two-way binding using ngModel
- Managing data types (boolean vs number)
- Debugging PUT request validation errors

---

## 🐞 Known Issues
| Issue | Description |
|------|------------|
| Form validation | Minimal validation implemented |
| Error handling | Basic console logging |
| UI polish | Can be improved |

---

## 📚 Lessons Learned
- How Angular connects to REST APIs
- Using async/await with Observables
- Angular routing between components
- Debugging frontend and backend integration
- Managing application state

---


## 🎯 Conclusion
This project demonstrates a fully functional Angular front-end application integrated with a backend API. It successfully performs CRUD operations and provides a clean interface for managing grocery items.
