import React from 'react'
import Navbar from '../widgets/Navbar/navbar'
// import Calendar from './calendar'
// import Sidebar from '../widgets/Sidebar/sidebar'
// import Footer from '../widgets/Footer/footer'
import Calendar from './calendar/calendar'
// import EmployeeTable from '../TablesData/employeeTable'
// import BookingList from '../pages/bookingList'
// import Register from '../Registration/register'
import withNavbar from '../HOC/withNavbar'
// import employeeTable from '../TablesData/employeeTable'
// import EmployeeTable from '../TablesData/employeeTable'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Calendar/>
      {/* <Sidebar/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default withNavbar(Home)
