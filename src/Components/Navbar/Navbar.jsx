import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div class="navbar">
      <a class="nav-link nav-link-ltr" href="/">
        Home
      </a>
      <a class="nav-link nav-link-ltr" href="/">
        About
      </a>
      <a class="nav-link nav-link-ltr" href="/">
        Contact
      </a>
      <a class="nav-link nav-link-ltr" href="/">
        Blog
      </a>
    </div>
  );
};

export default Navbar;
