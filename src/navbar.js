import React from "react";
import img2 from "./image/sda.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="site-branding logo-left"><a href="/">
        <img src={img2} style={{width: "160px",height: "65px"}}></img></a>
      </div>

<div className="navbar-links">
 <b> <a className="navbar-link" href="/">Home</a>
  <a className="navbar-link" href="/about">About Us</a>
  <a className="navbar-link" href="/login">Login</a>
  <a className="navbar-link" href="/signup">Create an Account</a></b>
</div>

    </nav>
  );
}

export default Navbar;
