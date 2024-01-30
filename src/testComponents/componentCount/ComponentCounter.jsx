import React from "react";
import "./ComponentCounter.css";

export const ComponentCounter = () => {
  const [count, setCount] = React.useState(0);

  const botonReiniciar = {
    border: "1px solid white",
    borderRadius: "10px",
    backgroundColor: "purple",
    color: "white",
    padding: "5px",
    width: "100px",
    fontSize: "15px",
  };

  const suma = () => {
    setCount(count + 1);
  };

  const reiniciar = () =>{
    setCount(0);
  };

  return (
    <>
      <div className="containerStyle">
        <h2 style={{ color: "white" }}>Contador en un solo Componente</h2>
        <div className="countStyle">{count}</div>
        <button className="botonClic" onClick={suma}>
          Clic
        </button>
        <button style={botonReiniciar} onClick={reiniciar}>Reiniciar</button>
      </div>
    </>
  );
};
