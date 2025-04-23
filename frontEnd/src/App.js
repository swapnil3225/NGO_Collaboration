import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import NgoCollaboration from './NGO-collaboration';
import Users from './Users';
import NGOs from './NGOs';
import UserRegister from './userRegister';
import NgoRegister from './ngoRegister';
import Event from './Event';
import UserViewEvents from './viewEvent';
import Contact from './Contact'; 
import FAQs from './FAQs';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<NgoCollaboration />} />

        
        <Route path="/users" element={<Users />} />
        <Route path="/ngos" element={<NGOs />} />

        
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/ngoRegister" element={<NgoRegister />} />

        
        <Route path="/event" element={<Event />} />
        <Route path="/viewEvent" element={<UserViewEvents />} />

        
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
