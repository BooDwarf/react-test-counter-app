import React from 'react';

const Increase = ({ label, onClick }) => {
  return (
    <button id="increaseButton" onClick={onClick}>
      {label}
    </button>
  );
};

const Decrease = ({ label, onClick }) => {
  return (
    <button id="decreaseButton" onClick={onClick}>
      {label}
    </button>
  );
};

const Reset = ({ label, onClick }) => {
  return (
    <button id="resetButton" onClick={onClick}>
      {label}
    </button>
  );
};

export { Increase, Decrease, Reset };
