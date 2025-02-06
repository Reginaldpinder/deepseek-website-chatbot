import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="fixed top-0 w-full bg-white shadow-sm z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <img 
                  className="h-8 w-auto"
                  src="https://via.placeholder.com/150x40?text=TechBridge+Solutions"
                  alt="TechBridge Solutions Logo"
                />
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
                <a href="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Get in Touch
              </button>
            </div>
          </nav>
        </header>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
