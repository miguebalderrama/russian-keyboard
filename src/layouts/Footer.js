import React from "react";

function Footer() {
  return (
    <div style={{ fontSize : '13px' ,paddingTop: '20px'}}>
      <p>
        {" "}
        Hecho con
        <span role="img" aria-label="amor">
          💖
        </span>
        y{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJs
        </a> 
        {" "} by Epruso 2022.
      </p>{" "}
    </div>
  );
}

export default Footer;
