import React, {useState} from 'react';

function Display(props) {

  return (
    <div className="screen">
      <input
        type="text"
        className="screen-top"
        value={props.value}
        disabled
      />
      <div className="screen-bottom"></div>
    </div>
  );
}

export default Display;
