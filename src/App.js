import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Head from "./Componentes/Head/Head";
import BarraLateral from "./Componentes/Barralateral/BarraLateral";
import Contenido from "./Componentes/Contenido/Perfiles/Contenido";

// import CargaMasiva from "./Componentes/Contenido/Perfiles/CargaMasiva/CargaMasiva";

function App() {
  return (
    <>
      <div >
        <Head></Head>
      </div>
      <div className="container">
        <div className="row">
          <BarraLateral></BarraLateral>
          <Contenido></Contenido>
        </div>
      </div>
    </>
  );
}

export default App;
