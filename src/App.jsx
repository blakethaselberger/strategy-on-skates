import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; // Import Box for consistent layout
import Header from './components/common/Header'; // Header Component
import Home from './components/features/Home'; // Home Component
import Footer from './components/common/Footer'; // Footer Component
import DraftSimulator from './components/pages/DraftSimulator/DraftSimulator'; // Draft Simulator Page
import DraftPage from './components/pages/DraftPage/DraftPage'; // Draft Page

const App = () => (
  <Router>
    {/* App Layout */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full height for the viewport
        backgroundColor: 'background.default', // Ensures theme background is applied
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1, // Pushes footer to the bottom if content is short
          padding: 2, // Optional padding for content
        }}
      >
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* Draft Simulator Route */}
          <Route path="/draft-simulator" element={<DraftSimulator />} />
          {/* Draft Page Route */}
          <Route path="/draft" element={<DraftPage />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  </Router>
);

export default App;