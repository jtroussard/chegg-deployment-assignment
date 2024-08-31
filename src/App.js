import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/content/*" element={<MainContent />} />
        <Route path="/" element={<Navigate to="/content/profile" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
