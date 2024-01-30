import React, { useState } from "react";

export const Zpruebas = (props) => {
  const [contador, setContador] = useState(0);

  const [isclicked, setIsclicked] = useState(false);

  const changeColor = () => {
    setIsclicked(!isclicked);
    setContador(contador + 1);
  };
  return (
    <>
      <h4
        style={{
          color: isclicked ? "red" : "gray",
          fontSize: isclicked ? "26px" : "16px",
        }}
      >
        God help please and remember that I love my children: {props.names} whit
        all my love
      </h4>
      <button
        style={{ color: "green", background: "silver" }}
        onClick={changeColor}
      >
        click
      </button>
      <p>{contador}</p>
      <h1 style={{ display: isclicked ? "none" : "block" }}>Hey World</h1>
    </>
  );
};
