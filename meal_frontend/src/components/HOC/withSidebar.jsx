// withSidebar.js
import React from 'react';
import Sidebar from '../widgets/Sidebar/sidebar'; // Import the Sidebar component

const withSidebar = (Component) => {
  return (props) => {
    return (
      <div className="layout">
        <Sidebar /> 
        <Component {...props} />
      </div>
    );
  };
}

export default withSidebar;