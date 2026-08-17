# 🍔 Angla Burger — Food Ordering & Management System

Angla Burger is a **full-stack food ordering and restaurant management system** built to provide customers with a smooth online ordering experience while giving restaurant staff a dedicated dashboard to manage products, categories, orders, and order status.

The system is designed around two connected experiences:

* 🍔 **Customer-facing ordering platform** — browse the menu, add products to a cart, place orders, and track delivery status.
* 📊 **Restaurant management dashboard** — manage products, monitor incoming orders, update order statuses, and view operational information.

The project was built as a real-world full-stack application rather than a simple frontend concept, with authentication, relational database relationships, image management, protected admin routes, order processing, and API communication between the frontend and backend.

---

## 📸 Overview

### Customer Experience

Customers can:

* Browse food categories
* View available products
* Add products to their cart
* Adjust their order before checkout
* Provide delivery information
* Place an order
* View their order details
* Track the progress of their order
* See payment and delivery information

### Restaurant Dashboard

Restaurant staff can:

* Authenticate into the management dashboard
* View incoming orders
* Monitor today's orders
* Update order statuses
* Create new products
* Upload product images
* Organize products by category
* View customer and delivery information
* Manage restaurant inventory through the dashboard

---

# ✨ Features

| Area                   | Description                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Authentication**     | Secure authentication for users and protected admin functionality.                               |
| **Menu**               | Customers can browse food products organized by categories.                                      |
| **Product Management** | Admin users can create and manage restaurant products.                                           |
| **Categories**         | Products are associated with restaurant food categories.                                         |
| **Shopping Cart**      | Customers can add products and manage quantities before checkout.                                |
| **Checkout**           | Customers can review their order and provide delivery information.                               |
| **Order Management**   | Orders are stored in PostgreSQL and associated with users, addresses, products, and order items. |
| **Order Tracking**     | Customers can see the current progress of their order.                                           |
| **Admin Order Status** | Restaurant staff can update order progress from the dashboard.                                   |
| **Image Uploads**      | Product images are uploaded and hosted through ImageKit.                                         |
| **Protected Routes**   | Admin pages are protected so unauthorized users cannot directly access management functionality. |
| **Responsive UI**      | Customer-facing interfaces are designed for different screen sizes.                              |
| **REST API**           | Frontends communicate with the backend through RESTful API endpoints.                            |

---

# 🏗️ Architecture

Angla Burger follows a **client-server architecture** where the customer application and administration dashboard communicate with a centralized Express API.

```text
                         ┌──────────────────────────┐
                         │        Customer          │
                         │       Web Browser        │
                         └────────────┬─────────────┘
                                      │
                                      │ HTTP / JSON
                                      ▼
                         ┌──────────────────────────┐
                         │    Customer Frontend     │
                         │      React + Vite        │
                         └────────────┬─────────────┘
                                      │
                                      │ REST API
                                      ▼
                    ┌────────────────────────────────────┐
                    │          Node.js / Express         │
                    │              REST API              │
                    │                                    │
                    │ Authentication                    │
                    │ Products                           │
                    │ Categories                         │
                    │ Orders                             │
                    │ Order Items                        │
                    │ Addresses                          │
                    │ Admin Operations                   │
                    └───────────────┬────────────────────┘
                                    │
                    ┌───────────────┼───────────────────┐
                    │               │                   │
                    ▼               ▼                   ▼
             ┌────────────┐  ┌──────────────┐   ┌──────────────┐
             │ PostgreSQL │  │   ImageKit   │   │    Clerk     │
             │            │  │              │   │              │
             │ Users      │  │ Product      │   │ Authentication│
             │ Products   │  │ Images       │   │ Sessions      │
             │ Categories │  │ Media        │   │ Admin access  │
             │ Orders     │  │              │   │              │
             │ Addresses  │  └──────────────┘   └──────────────┘
             └────────────┘
                                    ▲
                                    │
                                    │ REST API
                                    │
                         ┌──────────┴───────────┐
                         │   Admin Dashboard    │
                         │     React + Vite     │
                         └──────────────────────┘
```

---

# 🧱 System Architecture

## Frontend

The customer application is built with:

* **React**
* **Vite**
* **React Router**
* **Axios**
* **React Context**
* **SCSS**
* **Material UI Icons**

The frontend is responsible for:

* Rendering the restaurant menu
* Managing customer interactions
* Maintaining cart state
* Communicating with the backend API
* Handling authentication state
* Displaying order information
* Tracking order progress

---

## Admin Dashboard

The restaurant management interface is a separate React application designed for internal operations.

The dashboard provides functionality for:

* Product creation
* Product image uploads
* Category selection
* Order monitoring
* Order status updates
* Customer/order information
* Protected administrative routes

Admin pages are not intended to be publicly accessible. Authentication is checked before allowing access to protected management functionality.

---

# ⚙️ Backend

The backend is built with:

* **Node.js**
* **Express.js**
* **Sequelize**
* **PostgreSQL**
* **Axios**
* Authentication middleware
* REST API architecture

The backend acts as the central layer between the applications and the database.

It handles:

```text
Request
   ↓
Express Route
   ↓
Controller
   ↓
Sequelize Model
   ↓
PostgreSQL
   ↓
Response
```

For example, when a customer places an order:

```text
Customer
   │
   │ POST /api/order/create
   ▼
Express Router
   │
   ▼
Order Controller
   │
   ├── Create Order
   ├── Create Order Items
   ├── Associate Address
   └── Store Payment Information
   │
   ▼
PostgreSQL
   │
   ▼
JSON Response
   │
   ▼
Customer Frontend
```

---

# 🗄️ Database Architecture

The application uses **PostgreSQL** with **Sequelize ORM**.

The main entities include:

```text
User
 │
 ├───────────────┐
 │               │
 ▼               ▼
Orders         Addresses
 │
 ▼
OrderItems
 │
 ▼
Products
 │
 ▼
Category
```

### Main Models

#### User

Stores customer and administrative user information.

```text
User
- id
- email
- role
- authentication information
- timestamps
```

#### Category

Stores restaurant food categories.

```text
Category
- id
- name
- timestamps
```

A category can contain multiple products.

```text
Category
   │
   └── hasMany
          │
          ▼
       Products
```

#### Product

Stores restaurant menu items.

```text
Product
- id
- name
- description
- price
- categoryId
- image
- isAvailable
- timestamps
```

#### Order

Stores the main order information.

```text
Order
- id
- userId
- subtotal
- deliveryFee
- tax
- discount
- total
- showStatus
- paymentMethod
- paymentStatus
- addressId
- timestamps
```

#### OrderItem

Represents individual products inside an order.

```text
OrderItem
- id
- orderId
- productId
- quantity
- priceAtPurchase
- timestamps
```

This allows an order to contain multiple products.

```text
Order
   │
   └── hasMany
          │
          ▼
      OrderItems
          │
          └── belongsTo
                  │
                  ▼
               Product
```

#### Address

Stores delivery information associated with customers/orders.

```text
Address
- id
- userId
- receiverName
- phone
- city
- street
- timestamps
```

---

# 🔗 API Architecture

The backend exposes REST endpoints consumed by both the customer application and admin dashboard.

Example endpoint structure:

```text
/api
 ├── /auth
 ├── /category
 ├── /product
 ├── /order
 ├── /address
 └── /user
```

### Example Product Endpoints

```http
GET    /api/product
GET    /api/product/:id
POST   /api/product
PUT    /api/product/:id
DELETE /api/product/:id
```

### Example Category Endpoints

```http
GET /api/category/list-category
```

### Example Order Endpoints

```http
GET  /api/order/single-order/:id
GET  /api/order/today-orders
GET  /api/order/all-orders
POST /api/order/create
PUT  /api/orders/change-status/:id
```

The exact available endpoints may change as the application evolves.

---

# 🔐 Authentication & Authorization

Authentication is separated from application functionality.

The system uses authentication to determine whether a user can access protected areas of the application.

The general flow is:

```text
User
 │
 ▼
Login
 │
 ▼
Authentication Provider
 │
 ▼
Authenticated Session / Token
 │
 ▼
Frontend
 │
 ▼
Protected Route
 │
 ├── Valid → Dashboard
 │
 └── Invalid → Login
```

Administrative operations are additionally protected at the API level.

This is important because frontend route protection alone is not sufficient.

For example, hiding:

```text
/products/new
```

from the UI does not prevent someone from manually sending:

```http
POST /api/product
```

Therefore sensitive operations should be verified by the backend as well.

---

# 🖼️ Image Management

Product images are uploaded to **ImageKit** rather than being stored directly inside the application server.

The flow is:

```text
Admin Dashboard
      │
      │ Upload image
      ▼
Image Upload Handler
      │
      ▼
ImageKit
      │
      ▼
Hosted Image URL
      │
      ▼
Product Database Record
```

The PostgreSQL database stores the image URL rather than the actual image file.

This keeps the application server lightweight and allows media to be delivered through a dedicated image CDN/storage service.

---

# 🛒 Ordering Flow

The customer ordering process follows this general flow:

```text
Browse Menu
     │
     ▼
Select Category
     │
     ▼
Select Product
     │
     ▼
Add to Cart
     │
     ▼
Review Cart
     │
     ▼
Checkout
     │
     ▼
Delivery Information
     │
     ▼
Create Order
     │
     ▼
Order Stored in Database
     │
     ▼
Restaurant Dashboard
     │
     ▼
Order Processing
     │
     ├── Pending
     ├── Accepted / Preparing
     ├── Complete / Out for Delivery
     └── Delivered
```

---

# 📦 Order Tracking

Orders contain a status field that allows the restaurant and customer applications to represent the current stage of an order.

For example:

```text
Pending
   ↓
Accepted
   ↓
Preparing
   ↓
Out for Delivery
   ↓
Delivered
```

The customer-facing tracking interface visually represents this process, while the admin dashboard provides restaurant staff with the ability to update the order status.

---

# 📊 Admin Order Management

The dashboard includes an order management interface where restaurant staff can see relevant orders and update their status.

A typical order contains:

```text
Order
 ├── Customer
 ├── Product
 ├── Quantity
 ├── Price
 ├── Payment Status
 ├── Delivery Address
 └── Order Status
```

The dashboard can also retrieve orders for specific operational periods, such as orders placed during the restaurant's working window.

---

# 📁 Repository Structure

The project is organized into separate applications for the customer experience, backend API, and administration.

A simplified structure looks like:

```text
angla-burger/
│
├── client-side/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── admin-dashboard/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── server-side/
    │
    ├── src/
    │   ├── controller/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   ├── config/
    │   └── server.js
    │
    ├── package.json
    └── .env
```

> Folder names may differ depending on the current repository structure.

---

# 🛠️ Technology Stack

## Customer Frontend

* React
* Vite
* React Router
* Axios
* React Context API
* SCSS
* Material UI Icons

## Admin Dashboard

* React
* Vite
* React Router
* Axios
* SCSS
* Material UI

## Backend

* Node.js
* Express.js
* Sequelize
* PostgreSQL
* REST API

## Authentication

* Clerk / token-based authentication

## Media

* ImageKit

## Database

* PostgreSQL

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* **Node.js 18+**
* **npm**
* **PostgreSQL**
* A PostgreSQL database
* An **ImageKit** account
* Authentication credentials/configuration

---

# 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd angla-burger
```

---

# 2. Install Backend Dependencies

```bash
cd server-side

npm install
```

---

# 3. Configure Backend Environment Variables

Create a `.env` file inside `server-side`:

```env
PORT=8080

DATABASE_URL=your_postgresql_database_url

# Authentication
CLERK_SECRET_KEY=your_clerk_secret_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

# Other application secrets
JWT_SECRET=your_secret_if_used
```

> Never commit `.env` files or private API keys to GitHub.

---

# 4. Start the Backend

```bash
npm run dev
```

The API will normally be available at:

```text
http://localhost:8080
```

---

# 5. Install Customer Frontend

Open another terminal:

```bash
cd client-side

npm install
```

Create the frontend environment file if required:

```env
VITE_API_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

The Vite development server will normally run at:

```text
http://localhost:5173
```

---

# 6. Install Admin Dashboard

Open another terminal:

```bash
cd admin-dashboard

npm install
```

Configure the API URL:

```env
VITE_API_URL=http://localhost:8080
```

Then:

```bash
npm run dev
```

---

# 🔒 Environment Variables

Environment variables should never be committed to the repository.

Example:

```text
server-side/
└── .env

client-side/
└── .env

admin-dashboard/
└── .env
```

Recommended `.gitignore` entries:

```gitignore
node_modules/
.env
.env.*
dist/
build/
```

---

# 🔄 Data Flow Example

### Customer places an order

```text
React Customer App
       │
       │ POST request
       ▼
Express API
       │
       ▼
Order Controller
       │
       ├── Validate user
       ├── Validate products
       ├── Calculate totals
       ├── Create Order
       └── Create OrderItems
       │
       ▼
PostgreSQL
       │
       ▼
Order Response
       │
       ▼
React
       │
       ▼
Order Confirmation
```

### Admin updates an order

```text
Admin Dashboard
       │
       │ PUT /api/orders/change-status/:id
       ▼
Express API
       │
       ▼
Authentication / Authorization
       │
       ▼
Order Controller
       │
       ▼
PostgreSQL
       │
       ▼
Updated Order
       │
       ▼
Admin Dashboard
```

---

# 🎯 Project Goals

The main goals of Angla Burger were to build a complete restaurant ordering workflow while practicing real-world full-stack development patterns.

The project focuses on:

* Building reusable React components
* Managing application state
* Designing relational database models
* Building REST APIs
* Implementing authentication and authorization
* Working with PostgreSQL
* Using Sequelize associations
* Handling file/media uploads
* Building protected administrative interfaces
* Connecting multiple frontend applications to one backend
* Creating a complete customer-to-order-to-management workflow

---

# 🧠 What This Project Demonstrates

Angla Burger demonstrates experience with a complete full-stack development lifecycle:

```text
UI/UX
  ↓
React Application
  ↓
State Management
  ↓
REST API
  ↓
Express Controllers
  ↓
Sequelize ORM
  ↓
PostgreSQL
  ↓
External Services
```

Rather than treating the project as a static restaurant landing page, Angla Burger was built as an **interactive commerce system** with persistent data and operational management.

---

# 🚧 Future Improvements

Potential future improvements include:

* Real-time order status updates using WebSockets
* Real-time admin order notifications
* Advanced analytics and revenue dashboards
* Inventory quantity tracking
* Discount and coupon management
* Multiple restaurant branches
* Delivery rider management
* More advanced payment integrations
* Order cancellation and refund workflows
* Product reviews and ratings
* Improved mobile experience
* Automated email/SMS order notifications

---

# 📌 Project Status

**Status:** Completed / Portfolio Project

The core customer ordering, backend API, database relationships, product management, media handling, authentication, and order management functionality have been implemented.

---

# 👨‍💻 Author

**Niftalem N.**

Full-Stack Web Developer focused on building modern web applications, e-commerce systems, AI-powered applications, and RESTful backend architectures.

### Core technologies

```text
React
Node.js
Express
PostgreSQL
Sequelize
REST APIs
Authentication
ImageKit
AI / LLM Integration
```

---

## ⭐ If you find this project interesting

Feel free to explore the source code, architecture, and implementation details.

If you're looking for a developer to build a similar **e-commerce, restaurant ordering, management dashboard, or full-stack web application**, feel free to get in touch.
