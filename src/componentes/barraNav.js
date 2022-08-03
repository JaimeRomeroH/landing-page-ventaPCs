import React from "react";
import logo from "../imagenes/logo.jpg"
import "../estilos/BarraNav.css"

function BarraNav(){

   return(
    <div className="contenedor-barraNav">
      <nav className="barraNavegacion">
        <img className="logo" src={logo} alt="logo"/>
        <a href="">¿Quienes somos?</a>
        <a href="">¿Que hacemos?</a>
      </nav>
    </div> 
   ); 
   
}

export default BarraNav;