import React from "react";
import "../../App.css";
import NavItem from "./navItem";

function Navbar() {
  return (
    <header className="Header-Container">
      <div>
        <a href="HomePage">Wanderlust</a>
      </div>
      <nav>
        <NavItem />
      </nav>
    </header>
  );
}

export default Navbar;
