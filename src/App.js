import React, { useState } from 'react';
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Artist from './components/pages/Artists';
import CallbackHandler from './components/CallbackHandler';
import ArtistPage from './components/pages/ArtistPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.add('scroll-to-top');

    const timeoutId = setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search
  const handleSearch = (searchTerm) => {
    // Update state with the search term
    setSearchTerm(searchTerm);
    // Trigger API request with the search term
    // You can add your logic to fetch data based on the search term here
    console.log('Search term:', searchTerm);
  };

  return (
    <Router>
      <Navbar/>
       <ScrollToTop />
      <Routes>
        <Route path="/callback" element={<CallbackHandler />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artists" element={<Artist />} />
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;