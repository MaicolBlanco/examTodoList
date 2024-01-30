import React from "react";
import "./Testimonios.css";

export const Testimonios = (props) => {
  return (
    <>
      <div className="card-description">
        <img
          src="https://media.istockphoto.com/id/1191874983/es/foto/hombre-finnaly-de-pie-en-la-roca-y-disfrutar-de-la-vista-de-la-monta%C3%B1a-niebla.jpg?s=1024x1024&w=is&k=20&c=8wyBROZsK8vFSlwMnHFBwR5EhUs442IPmK1ZxIISHD0="
          style={{ width: "200px" }}
        />
        <div>
          <p>
            <strong>{props.name}</strong> en {props.country}
          </p>
          <p>
            {props.position} en <b>{props.company}</b>
          </p>
          <p>"{props.text}"</p>
        </div>
      </div>
    </>
  );
};
