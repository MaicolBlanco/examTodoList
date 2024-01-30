import React from "react";
import "./styles/Counter.css";
import { Boton } from "./Boton";
import Contador from "./Contador";

function Counter() {
  const [count, setCount] = React.useState(0);

  const handleClickSuma = () => {
    setCount(count + 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container-global">
        <h1 className="title-principal">Contador</h1>
        <div className="container-principal">
          <Contador contador={count} />
          <Boton text="Clic" handleClick={handleClickSuma} esBoton={true} />
          <Boton
            text="Reiniciar"
            handleClick={handleClickReset}
            esBoton={false}
          />
        </div>
      </div>
    </>
  );
}

export default Counter;
