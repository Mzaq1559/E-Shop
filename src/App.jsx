/**
 * App.jsx
 *
 * Root component of the E-Shop application.
 *
 * Responsibilities:
 *  - Wraps the entire app in ShopContextProvider so that all child
 *    components have access to the global cart, user, and product state.
 *  - Sets up client-side routing via React Router's <BrowserRouter>.
 *  - Renders the persistent Navigation and Footer around every page route.
 *  - Defines a catch-all "*" route that falls back to the Home page so
 *    we never end up on a blank screen for unknown URLs.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ShopContextProvider } from './context/ShopContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import AdminDashboard from './pages/AdminDashboard';

/**
 * App
 *
 * Top-level component. ShopContextProvider must sit above <Router> so that
 * navigation-aware children (like the cart badge in Navigation) can also
 * consume context without any ordering issues.
 */
function App() {
  return (
    <div className="App">
      {/* Provide global shop state (cart, user, products) to the whole tree */}
      <ShopContextProvider>
        <Router>
          {/* Navigation is rendered on every page above the route content */}
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questions" element={<FAQs />} />
            {/* Admin route — access is guarded inside AdminDashboard itself */}
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Fallback: unknown paths redirect to Home instead of a 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
          {/* Footer is rendered on every page below the route content */}
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
