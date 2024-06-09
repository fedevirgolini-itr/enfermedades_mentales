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
            <li><a href="/grupo1">Grupo 1</a></li>
            <li><a href="/grupo2">Grupo 2</a></li>
            <li><a href="/grupo3">Grupo 3</a></li>
            <li><a href="/grupo4">Grupo 4</a></li>
            <li><a href="/grupo5">Grupo 5</a></li>
            <li><a href="/grupo6">Grupo 6</a></li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;