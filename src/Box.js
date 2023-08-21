import React from 'react';
import './Box.css';

const Box = ({ width, height, backgroundColor, removeBox }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${backgroundColor}`,
    removeBox,
  };

  return (
    <div className="Box">
      <div className="Box-box" style={boxStyle}></div>
      <button className="Box-remove" onClick={removeBox}>
        X
      </button>
    </div>
  );
};

export default Box;
