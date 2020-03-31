import React from "react";
import "../../App.css";
import "./Nav.css";
import NavItem from "./navItem";

function Navbar() {
  return (
    <header className="Header-Container">
      <h1 className="Logo">
        <a href="HomePage">Wanderlust</a>
      </h1>
      <nav>
        <NavItem />
      </nav>
    </header>
  );
}

export default Navbar;