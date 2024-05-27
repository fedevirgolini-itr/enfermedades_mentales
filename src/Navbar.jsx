import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="LogoITR-60.jpeg" alt="Instituto Técnico Renault" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Grupo 1</a></li>
            <li><a href="/">Grupo 2</a></li>
            <li><a href="/">Grupo 3</a></li>
            <li><a href="/">Grupo 4</a></li>
            <li><a href="/">Grupo 5</a></li>
            <li><a href="/">Grupo 6</a></li>
            <li><a href="/">Grupo 7</a></li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;