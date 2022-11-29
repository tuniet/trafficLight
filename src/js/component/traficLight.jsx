import React, { useState } from "react";
import ReactDOM from "react-dom";

const TraficLight = (props) => {
  //initilize a count variable at 0, the setCount function
  // will be used to re-set the "count" value.
  const [color, setColor] = useState("");
  return (
    <div className="traficLight">
      <div className="traficTop"></div>
      <div className="traficLightBody">
        <div onClick={() => setColor("red")} className={"red " + ((color == "red") ? "active" : "")}></div>
        <div onClick={() => setColor("yellow")} className={"yellow " + ((color == "yellow") ? "active" : "")}></div>
        <div onClick={() => setColor("green")} className={"green " + ((color == "green") ? "active" : "")}></div>
      </div>
    </div>
  );
};


export default TraficLight