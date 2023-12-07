// HOC/withNavbar.js

import React from 'react';
import CustomNavbar from '../widgets/Navbar/navbar';

const withNavbar = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <CustomNavbar />
          <WrappedComponent {...this.props} />
          {/* Add your Footer component here if needed */}
        </div>
      );
    }
  };
};

export default withNavbar;
