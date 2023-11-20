import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/home';
import Login from '../src/components/Login/login';
import Registration from '../src/components/Registration/register'
import Navbar from './components/widgets/Navbar/navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
