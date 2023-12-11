import React from 'react';

const withCalendar = (WrappedComponent) => {
  return (props) => (
    <div className="calendar-container">
      {/* You can add additional wrapping elements or styling here if needed */}
      <WrappedComponent {...props} />
    </div>
  );
};

export default withCalendar;
