// CalendarPage.js
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Button } from 'react-bootstrap';
import CustomNavbar from '../../widgets/Navbar/navbar';
import './calendar.css';

const CalendarPage = () => {
  const localizer = momentLocalizer(moment);

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
        className="container-fluid" // Use Bootstrap container-fluid for a full-width container
        style={{
          marginTop: '100px',
          padding: '20px',
          width: '110%'
        }}
      >
        <div className="row">
          {/* Calendar on the left */}
          <div className="col-lg-8 col-md-12 mb-4">
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              onSelectEvent={handleEventClick}
            />

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

          {/* Sidebar on the right for larger screens */}
          <div className="col-lg-4 d-none d-lg-block">
            <sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
