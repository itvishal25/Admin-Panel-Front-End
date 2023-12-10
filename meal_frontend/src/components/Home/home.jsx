import React from 'react'
// import Calendar from './calendar'
// import Footer from '../widgets/Footer/footer'
import Calendar from './calendar/calendar'
// import EmployeeTable from '../TablesData/employeeTable'
// import BookingList from '../pages/bookingList'
// import Register from '../Registration/register'
import withNavbar from '../HOC/withNavbar'
import DataVisualize from '../pages/dataVisualize'
// import employeeTable from '../TablesData/employeeTable'
// import EmployeeTable from '../TablesData/employeeTable'

const Home = () => {
  return (
    <div>
      <Calendar />
      <DataVisualize/>
      {/* <Footer /> */}
    </div>
  )
}




export default withNavbar(Home)
