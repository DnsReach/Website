import React from "react";
import BUT from "./components  - hide/featureshide";
import "./setup.css";
import Im from "./image/nae.png";

const Project = () => {
  return (
    <div id="flex-bar">
      <img className="image-logo" src={Im} />
      <div>
        <h1>FILO</h1>
      </div>
      <div className="bar-title-features">
        <BUT />
      </div>
    </div>
  );
};

export default Project;
