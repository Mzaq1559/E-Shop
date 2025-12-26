# E-Shop React Application

A fully functional, responsive e-commerce platform rebuilt using **React.js** and **Vite**. This project mimics a real-world shopping experience with features like product browsing, cart management, simulated user authentication, and an administrative dashboard.

## ⚡ Features

### 🛍️ Customer Features
- **Dynamic Product Browsing**: Filter products by category on the Shop page.
- **Shopping Cart**: Add/remove items, adjust quantities, and view live total calculations.
- **User Authentication (Simulated)**: Login and Sign Up functionality (persisted via Local Storage).
- **Responsive Design**: Fully responsive layout using **React Bootstrap**.
- **Information Pages**: About Us, Contact Us, and FAQs.

### 👨‍💻 Admin Features
- **Admin Dashboard**: Accessible via `admin@eshop.com`.
- **Product Management**: Add new products with image URLs and prices.
- **Delete Products**: Remove items from the store.
- **Statistics**: View total products and simulated sales data.

## 🛠️ Technologies Used

- **Frontend**: React.js, Vite
- **Styling**: Bootstrap 5, React Bootstrap, Custom CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Icons**: FontAwesome, Bootstrap Icons

## 📂 Project Structure

```bash
E-Shop/
├─ public/           # Static assets (images)
├─ src/
│  ├─ components/    # Reusable UI components (Navbar, Footer, ProductCard)
│  ├─ context/       # Global State (ShopContext)
│  ├─ data/          # Initial product data
│  ├─ pages/         # Page components (Home, Shop, Cart, AdminDashboard)
│  ├─ App.jsx        # Main application component with Routing
│  └─ main.jsx       # Entry point
└─ index.html        # HTML entry
```

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mzaq1559/E-Shop.git
    cd E-Shop
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open the App:**
    Click the URL shown in the terminal (usually `http://localhost:5173`).

## 🔑 Admin Access (Demo)

To test the Admin Panel:
1.  Click **Login** in the navbar.
2.  Email: `admin@eshop.com`
3.  Password: (Any password works)
4.  Go to **Hello, Admin > Admin Dashboard**.

## 🔮 Future Enhancements

- Integrate a real backend (Node.js/Express or Firebase).
- Implement real payment processing (Stripe/PayPal).
- Add user order history.
