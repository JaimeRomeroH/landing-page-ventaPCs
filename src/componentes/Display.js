import React from "react";
import "../estilos/Display.css"

function Display(){
    return(
        <div className="contenedor-imagen">
             <img className="imagen-display" src={require("../imagenes/imagen-pc.jpg")} alt="imagen pc"/>  
        </div>
    );
}

export default Display;