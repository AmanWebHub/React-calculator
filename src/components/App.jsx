import React, { useEffect, useState } from 'react';
import useEventLestner from './useEventLestner';
import Display from "./Display"
import KeyPad from "./KeyPad"

const App = () => {
  const { displayedValue } = useEventLestner();


  return (
    <div className="container">
      <h1 id="header">React Calculator</h1>
      <div className="calc-body">
        <Display value={displayedValue} />

        <KeyPad />

      </div>
    </div>
  );
};

export default App;
