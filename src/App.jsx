import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header'; // Ensure the path is correct
import Home from './components/features/Home'; // Ensure the path is correct
import Footer from './components/common/Footer'; // Ensure the path is correct
import DraftSimulator from './components/pages/DraftSimulator'; // Ensure path is correct

const App = () => (
  <Router>
    <div>
      {/* Header Component */}
      <Header />
      {/* Main Content */}
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/* Draft Simulator Route */}
        <Route path="/draft-simulator" element={<DraftSimulator />} />
      </Routes>
      {/* Footer Component */}
      <Footer />
    </div>
  </Router>
);

export default App;