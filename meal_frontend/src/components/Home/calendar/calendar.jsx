// CalendarPage.js
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button } from 'react-bootstrap';
// import Sidebar from '../../widgets/Sidebar/sidebar'; // Import your Sidebar component
import CustomNavbar from '../../widgets/Navbar/navbar';
import './calendar.css';

const CalendarPage = () => {
  const localizer = momentLocalizer(moment);

  // Sample events
  const events = [
    {
      title: 'Event 1',
      start: new Date(2023, 10, 28, 10, 0),
      end: new Date(2023, 10, 28, 12, 0),
    },
    {
      title: 'Event 2',
      start: new Date(2023, 10, 29, 14, 0),
      end: new Date(2023, 10, 29, 16, 0),
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <CustomNavbar />
      <div
        style={{
          display: 'flex',
          marginTop: '100px',
          padding: '20px',
          flexDirection: 'column', // Adjust for smaller screens
        }}
      >
        {/* Calendar on the top */}
        <div style={{ flex: 1, marginBottom: '20px' }}>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }} // Increase height for a larger calendar
            onSelectEvent={handleEventClick}
          />

          {/* Modal to show event details */}
          {selectedEvent && (
            <div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedEvent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Start: {moment(selectedEvent.start).format('LLLL')}</p>
                  <p>End: {moment(selectedEvent.end).format('LLLL')}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
        </div>

        {/* Sidebar at the bottom for larger screens, or on the right for smaller screens */}
        <div style={{ width: '100%', flex: 1, order: -1 }}>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
