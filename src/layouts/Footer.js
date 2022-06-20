import React from "react";

function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  return (
   
    <div style={{ fontSize : '13px' ,paddingTop: '20px', color:"white", paddingBottom: '10px'}}>
      <p style={{ margin : '0'}}>
        {" "}
        Hecho con
        <span role="img" aria-label="amor">
          💖
        </span>
        &{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJs
        </a> 
        {" "} by Epruso {year}.
      </p>{" "}
    </div>
  );
}

export default Footer;
