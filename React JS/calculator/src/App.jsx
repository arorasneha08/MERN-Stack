import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="calculator-box p-4 rounded">
        <input
          type="text"
          className="form-control text-end mb-3"
          value={display}
          readOnly
          style={{ fontSize: "2rem", height: "3rem" }}
        />
        
        <div className="row row-cols-4 g-2">
          {["C", "1", "2", "+"].map((key) => (
            <button className="col btn btn-light btn-lg" key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="row row-cols-4 g-2 mt-2">
          {["3", "4", "5", "-"].map((key) => (
            <button className="col btn btn-light btn-lg" key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="row row-cols-4 g-2 mt-2">
          {["6", "7", "8", "*"].map((key) => (
            <button className="col btn btn-light btn-lg" key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}   
        </div>
        <div className="row row-cols-4 g-2 mt-2">
          {["9", "0", ".", "/"].map((key) => (
            <button className="col btn btn-light btn-lg" key={key} onClick={() => handleClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <div className="row row-cols-2 g-2 mt-3">
          <button className="col btn btn-primary btn-lg" onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
