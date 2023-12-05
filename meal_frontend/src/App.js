import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/home'; // Make sure filenames match the actual filenames
import Login from '../src/components/Login/login';
import Registration from '../src/components/Registration/register';
import CustomNavbar from './components/widgets/Navbar/navbar';
import Sidebar from './components/widgets/Sidebar/sidebar';
import Footer from './components/widgets/Footer/footer';

// Pages
import Employees from './components/pages/employees';
import NewEmp from './components/pages/newEmp';
import NonEmployees from './components/pages/nonEmployees';
import BookingList from './components/pages/bookingList';
import Logout from './components/pages/logout';
import ForgotPassword from './components/pages/forgotpassword';
import Calendar from './components/Home/calendar';

// Mode
import Mode from './components/pages/mode';
import BookingSideBar from './components/widgets/Sidebar/BookingSidebar/bookingSidebar';

const App = () => {
  const [nightMode, setNightMode] = useState(false);

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <div className={nightMode ? 'night-mode' : 'day-mode'}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/newEmp" element={<NewEmp />} />
          <Route path="/nonEmployees" element={<NonEmployees />} />
          <Route path="/bookingList" element={<BookingList />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/navbar" element={<CustomNavbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/addBooking" element={<BookingSideBar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Mode nightMode={nightMode} toggleNightMode={toggleNightMode} />
      </Router>
    </div>
  );
};

export default App;
