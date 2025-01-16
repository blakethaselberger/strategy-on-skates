import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/common/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/common/Footer';
import DraftSimulator from './components/pages/DraftSimulator/DraftSimulator';
import DraftPage from './components/pages/DraftPage/DraftPage';

const App = () => (
  <Router>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          marginTop: '-8px', // Reduce spacing below the header
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/draft-simulator" element={<DraftSimulator />} />
          <Route path="/draft" element={<DraftPage />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  </Router>
);

export default App;