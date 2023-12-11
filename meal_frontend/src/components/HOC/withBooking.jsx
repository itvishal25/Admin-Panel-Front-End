import React from 'react';
import EmployeeTable from '../TablesData/employeeTable';

const withBooking = (WrappedComponent) => {
  // This HOC returns a new component
  return class WithBooking extends React.Component {
    // Add any shared functionality, state, or methods here

    render() {
      // Render the wrapped component with additional props or behavior
      return (
        <div>
          <EmployeeTable />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withBooking;
