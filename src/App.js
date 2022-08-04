import "./App.css";
import BarraNav from "./componentes/barraNav";
import Display from "./componentes/Display";

function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
           <BarraNav />
           <Display />
        </div>
    </div>
  );
}

export default App;
