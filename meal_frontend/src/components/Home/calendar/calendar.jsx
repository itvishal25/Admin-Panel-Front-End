import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './calendar.css';
import withNavbar from '../../HOC/withNavbar';

const Calendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    // Handle logic when a date is clicked
    const clickedDate = arg.date;
    setSelectedDate(clickedDate);

    // For example, you can log the selected date
    console.log('Selected Date:', clickedDate);

    // Navigate to another route (e.g., '/data-visualize')
    navigate('/data-visualize');
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: 'prev,next',
          center: 'title',
          end: '',
        }}
        height="80vh"
        eventClick={handleDateClick}
      />

      {/* Display the selected date */}
      {selectedDate && (
        <div>
          <h2>Selected Date</h2>
          <p>{selectedDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default withNavbar(Calendar);
