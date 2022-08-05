import React from "react";
import "../estilos/Informacion.css"

function Informacion(props) {
     return(
       <div className="info-contenedor-principal">
          <div className="info-contenedor">
             <h2 className="info-titulo">{props.titulo}</h2>
             <p className="info-texto">{props.texto}</p>  
          </div>
        </div>  
     );
}

export default Informacion;