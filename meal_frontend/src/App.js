import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/home';
import Login from '../src/components/Login/login';
import Registration from '../src/components/Registration/register'
import Navbar from './components/widgets/Navbar/navbar';
import Sidebar from './components/widgets/Sidebar/sidebar';

//pages
import Employees from './components/pages/employees';
import NewEmp from './components/pages/newEmp';
import NonEmployees from './components/pages/nonEmployees';
//end

import Logout from './components/pages/logout';
import ForgotPassword from './components/pages/forgotpassword';
import Calendar from './components/Home/calendar';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" exact element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/newEmp" element={<NewEmp />} />
          <Route path="/nonEmployees" element={<NonEmployees />} />

          <Route path="/Calendar" element={<Calendar />} />

          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
