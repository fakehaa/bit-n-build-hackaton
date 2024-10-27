import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import EventForm from './components/EventForm/EventForm';
import LoginSignup from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventForm />} />
        <Route path="/auth" element={<LoginSignup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
