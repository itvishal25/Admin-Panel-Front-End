import React from 'react'
import Navbar from '../widgets/Navbar/navbar'
// import Calendar from './calendar'
import Sidebar from '../widgets/Sidebar/sidebar'
// import Footer from '../widgets/Footer/footer'
import Calendar from './calendar'
// import BookingList from '../pages/bookingList'
// import Register from '../Registration/register'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Calendar/>
      <Sidebar/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
