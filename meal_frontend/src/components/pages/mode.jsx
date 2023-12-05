// Mode.js

import React from 'react';

const Mode = ({ nightMode, toggleNightMode }) => {
  return (
    <div>
      <label>
        Night Mode
        <input type="checkbox" checked={nightMode} onChange={toggleNightMode} />
      </label>
    </div>
  );
};

export default Mode;
