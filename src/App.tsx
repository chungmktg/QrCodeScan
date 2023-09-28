import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QrScreen from './screen/QRScreen/QrScreen';
import PhoneScreen from './screen/PhoneScreen/PhoneScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QrScreen />} />
          <Route path="/phone" element={<PhoneScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
