import logo from './logo.svg';
import './App.css';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import BasicTabs from './components/BasicTabs';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        {/* Use a dynamic route for tabs to handle different tab indexes */}
        <Route path="/tabs/:tabIndex/:feedbackFrom?" element={<BasicTabs />} />
      </Routes>
    </Router>
  );
};

export default App;


