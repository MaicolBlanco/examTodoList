import React from "react";
import "./styles/Boton.css"

function Boton(props) {
  return (
    <button
      className={props.esBoton ? "clic" : "reiniciar"}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export { Boton };
