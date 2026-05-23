/**
 * main.jsx
 *
 * Entry point for the React application.
 * This file mounts the root <App /> component into the #root div defined
 * in index.html. We wrap the whole app in React.StrictMode to catch
 * potential issues early during development (double-invoking render, etc.).
 *
 * Bootstrap CSS is imported here globally so every component can use
 * Bootstrap utility classes without individual imports.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Global Bootstrap styles — imported once here so we don't have to import
// them per-component. Keep this above index.css if you ever need to override
// Bootstrap defaults with our own styles.
import 'bootstrap/dist/css/bootstrap.min.css';

// Mount the application to the #root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
