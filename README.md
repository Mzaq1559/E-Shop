# 🛒 E-Shop — React E-Commerce Platform

A fully functional, responsive e-commerce application built with **React.js** and **Vite**. Designed to mimic a real-world shopping experience with product browsing, cart management, simulated authentication, and an admin dashboard.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## ✨ Live Demo

> Clone and run locally — see [Getting Started](#-getting-started) below.

---

## 📸 Features at a Glance

### 🛍️ Customer Experience

| Feature | Description |
|---|---|
| Product Browsing | Browse and filter products by category on the Shop page |
| Shopping Cart | Add/remove items, adjust quantities, view real-time totals |
| Authentication | Simulated login & sign-up, persisted via `localStorage` |
| Responsive Design | Fully adaptive layout using React Bootstrap |
| Info Pages | About Us, Contact, and FAQs included |

### 👨‍💻 Admin Dashboard

| Feature | Description |
|---|---|
| Admin Access | Log in with `admin@eshop.com` (any password) |
| Add Products | Upload new products with image URLs and prices |
| Delete Products | Remove items from the store instantly |
| Stats Panel | View total products and simulated sales data |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React.js 18 + Vite |
| Styling | Bootstrap 5, React Bootstrap, Custom CSS |
| Routing | React Router DOM v6 |
| State Management | React Context API |
| Icons | FontAwesome, Bootstrap Icons |

---

## 📂 Project Structure

```
E-Shop/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── components/         # Reusable UI — Navbar, Footer, ProductCard, etc.
│   ├── context/
│   │   └── ShopContext.jsx # Global state: cart, auth, products
│   ├── data/
│   │   └── products.js     # Initial product seed data
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── FAQs.jsx
│   ├── App.jsx             # Root component with route definitions
│   └── main.jsx            # Vite entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (comes with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mzaq1559/E-Shop.git
cd E-Shop

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open the URL shown in your terminal — typically `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint source files with ESLint |

---

## 🔑 Admin Access (Demo)

To explore the admin panel:

1. Click **Login** in the navbar
2. Enter email: `admin@eshop.com`
3. Enter any password
4. Navigate to **Hello, Admin → Admin Dashboard**

> **Note:** Authentication is simulated and stored in `localStorage`. No real backend is involved.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────┐
│             React App               │
│                                     │
│   ┌─────────────────────────────┐   │
│   │      ShopContext (Global)   │   │
│   │  • products  • cart         │   │
│   │  • user      • auth state   │   │
│   └──────────────┬──────────────┘   │
│                  │                  │
│   ┌──────────────▼──────────────┐   │
│   │      React Router DOM       │   │
│   └──┬──────┬──────┬────────────┘   │
│      │      │      │                │
│   Home   Shop    Cart   Admin ...   │
└─────────────────────────────────────┘
```

State flows top-down from `ShopContext` into all route-level page components via `useContext`. No prop drilling.

---

## 🔮 Roadmap

- [ ] **Real backend** — Node.js/Express REST API or Firebase
- [ ] **Payment processing** — Stripe or PayPal integration
- [ ] **Order history** — User-specific order tracking
- [ ] **Product search** — Full-text search with filters and sorting
- [ ] **Image uploads** — Replace URL inputs with file upload + cloud storage
- [ ] **Reviews & ratings** — Per-product review system
- [ ] **Email confirmations** — Order confirmation emails via SendGrid or Resend
- [ ] **PWA support** — Offline mode + installable app

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

```bash
# Fork → create a feature branch → commit → open a PR
git checkout -b feature/your-feature-name
```

---

## 📄 License

Distributed under the [MIT License](LICENSE).

---

> Built with ❤️ using React + Vite
