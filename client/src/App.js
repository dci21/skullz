import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import { Welcome, Main, Tombstone } from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tombstone" element={<Tombstone />} />
      </Routes>
    </Router>
  );
}

export default App;
