import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Store as AppStore, Store as PlayStore } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import logo from './../images/lyneapp-1-logo.png'; // Import the image

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/*<Link to="/" className="text-3xl font-bold text-orange-600">lyne</Link>*/}
        <Link to="/">
          <img src={logo} alt="lyne logo" className="h-20 w-25" /> {/* Use the image */}
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/about" className="text-gray-600 hover:text-black">About</Link>
          <Link to="/features" className="text-gray-600 hover:text-black">Features</Link>
          <Link to="/help" className="text-gray-600 hover:text-black">Help?</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/*<Link to="/" className="text-2xl font-bold text-orange-600">lyne</Link>*/}
            <Link to="/">
              <img src={logo} alt="lyne logo" className="h-20 w-25" /> {/* Use the image */}
            </Link>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/privacy" className="text-gray-600 hover:text-black">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-black">Terms</Link>
              <Link to="/help" className="text-gray-600 hover:text-black">Contact</Link>
              <Link to="/about" className="text-gray-600 hover:text-black">About Us</Link>
              <Link to="/help" className="text-gray-600 hover:text-black">Support</Link>
              <a href="#" className="text-gray-600 hover:text-black">Blog</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;