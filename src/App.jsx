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

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questions" element={<FAQs />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Add other routes as placeholders or redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
