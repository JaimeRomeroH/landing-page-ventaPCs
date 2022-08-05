import "./App.css";
import BarraNav from "./componentes/barraNav";
import Display from "./componentes/Display";
import Informacion from "./componentes/Informacion";

function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
           <BarraNav />
           <Display />
           <Informacion
            titulo="¿Quienes somos?" 
            texto= "Somos una empresa con 10 años de experiencia en mantenimieto y venta de equipo de computo"/>
           <Informacion
            titulo="¿Que hacemos?" 
            texto= "Brindamos servicios de reparacion y venta de equipos de computo principalmente a las pequeñas y medianas empresas"/>
        </div>
    </div>
  );
}

export default App;
