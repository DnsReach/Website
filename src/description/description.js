import React from "react";
import Files from "./desc-files";
import IMG from "../image/icon-security.svg";
import "./description.css";

const Description = () => {
  return (
    <>
      <div className="desc-text">
        <h1>
          All your files in one secure location,
          <br />
          acessible the anywhere.
        </h1>
        <h4>
          Fylo stores all your most important files in one secure location.{" "}
          <br />
          Acess them wherever you need, share and collaborate with friends
          family, and co-workers.
        </h4>
        <button id="button-started">GET STARTED</button>
      </div>
      <div id="grid">
        <nav>
          <img className="security-image" src={IMG} />
          <h1 style={{ marginLeft: 100 }}>Security you can trust</h1>
          <div style={{ marginLeft: 20 }}>
            <p>
              {" "}
              2-factor authentication and user-controlled encryption are just a
            </p>
            <p>
              couple of the security features we allow to help secure your
              files.{" "}
            </p>
          </div>
        </nav>
        <Files />
      </div>
    </>
  );
};

export default Description;
