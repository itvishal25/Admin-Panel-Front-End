import React from 'react';
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
// import Employees from './components/pages/employees';
// import NewEmp from './components/pages/newEmp';
// import NonEmployees from './components/pages/nonEmployees';
import BookingList from './components/pages/bookingList';
import Logout from './components/pages/logout';
import ForgotPassword from './components/pages/forgotpassword';
import Calendar from './components/Home/calendar/calendar';

// Mode
import BookingSideBar from './components/widgets/BookingSidebar/bookingSidebar';
import EmployeeTable from './components/TablesData/employeeTable';
import NonEmployeeTable from './components/TablesData/nonEmployeeTable';
import NewEmployeeTable from './components/TablesData/newEmployeeTable';

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* <Route path="/employees" element={<Employees />} /> */}
          {/* <Route path="/newEmp" element={<NewEmp />} /> */}
          {/* <Route path="/nonEmployees" element={<NonEmployees />} /> */}
          <Route path="/bookingList" element={<BookingList />} />
          <Route path="/calendar" element={<Calendar />} />

          <Route path="/navbar" element={<CustomNavbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/addBooking" element={<BookingSideBar />} />
          <Route path="/footer" element={<Footer />} />

          {/* For table data */}

          <Route path="/employeeTable" element={<EmployeeTable />} />
          <Route path="/nonEmployeeTable" element={<NonEmployeeTable />} />
          <Route path="/addEmployeeTable" element={<NewEmployeeTable />} />

        
        </Routes>
      </Router>
    </div>
  );
};

export default App;
