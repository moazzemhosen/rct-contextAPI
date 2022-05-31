import React from 'react'

const Theme = ({ theme, toggle }) => {
  return (
    <div>
      <button onClick={toggle}>Theme</button>
    </div>
  );
};

export default Theme