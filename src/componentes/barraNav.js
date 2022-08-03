import React from "react";
import logo from "../imagenes/logo.jpg"
import "../estilos/BarraNav.css"

function BarraNav(){

   return(
    <div className="contenedor-barraNav">
      <nav className="barraNavegacion">
        <img className="logo" src={logo} alt="logo"/>
        <a className="link-barra" href="">¿Quienes somos?</a>
        <a className="link-barra" href="">¿Que hacemos?</a>
      </nav>
    </div> 
   ); 
   
}

export default BarraNav;