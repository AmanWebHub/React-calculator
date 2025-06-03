import React from 'react';
import Button from 'react-bootstrap/Button';

const KeyPad = () => {
  return (
    <>
      <div className="calc-button-row">
        <Button value="C" id="op-backspace" className=" button btn">C</Button>
        <Button value="AC" id="op-clear" className=" button btn">AC</Button>
        <Button value="%" id="op-percentage" className=" button btn">%</Button>
        <Button value="/" id="op-division" className=" button btn">/</Button>
      </div>
      <div className="calc-button-row">
        <Button value="7" className="button btn" id="num-7">7</Button>
        <Button value="8" className="button btn" id="num-8">8</Button>
        <Button value="9" className="button btn" id="num-9">9</Button>
        <Button value="*" className="button btn" id="op-multiply">x</Button>
      </div>
      <div className="calc-button-row">
        <Button value="4" className=" button btn" id="num-4">4</Button>
        <Button value="5" className=" button btn" id="num-5">5</Button>
        <Button value="6" className=" button btn" id="num-6">6</Button>
        <Button value="-" className=" button btn" id="op-Subtract">−</Button>
      </div>
      <div className="calc-button-row">
        <Button value="1" className=" button btn" id="num-1">1</Button>
        <Button value="2" className=" button btn" id="num-2">2</Button>
        <Button value="3" className=" button btn" id="num-3">3</Button>
        <Button value="+" className=" button btn" id="op-Addition">+</Button>
      </div>
      <div className="calc-button-row">
        <Button value="." className=" button btn" id="op-dot">.</Button>
        <Button value="0" className=" button btn" id="num-0">0</Button>
        <Button value="00" className=" button btn" id="num-00">00</Button>
        <Button value="=" className=" button btn" id="op-equal">=</Button>
      </div>
    </>
  );
};

export default KeyPad;
