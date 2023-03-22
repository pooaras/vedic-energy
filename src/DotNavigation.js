import React, { useState } from 'react';
import './DotNavigation.css';

function DotNavigation({ numberOfDots }) {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  function handleClick(dotIndex) {
    setActiveDotIndex(dotIndex);
  }

  const dots = [];

  for (let i = 0; i < numberOfDots; i++) {
    dots.push(
      <div
        key={i}
        className={`dot-navigation__dot ${activeDotIndex === i ? 'active' : ''}`}
        onClick={() => handleClick(i)}
      />
    );
  }

  return <div className="dot-navigation">{dots}</div>;
}

export default DotNavigation;
