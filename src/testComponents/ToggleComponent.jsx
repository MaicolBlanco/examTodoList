import React, { useState } from 'react';

const ToggleComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <p>El estado está {isActive ? 'activo' : 'inactivo'}.</p>
      <button onClick={toggleState}>Toggle Estado</button>
    </div>
  );
};

export default ToggleComponent;
