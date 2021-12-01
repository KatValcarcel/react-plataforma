import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Head from "./Componentes/Head/Head";
import BarraLateral from "./Componentes/Barralateral/BarraLateral";
import Contenido from "./Componentes/Contenido/Perfiles/Contenido";
import Bienvenida from "./Componentes/Contenido/Bienvenida/Bienvenida";
import ListaPruebas from "./Componentes/Contenido/Views/ListaPruebas";
import ListaCargos from "./Componentes/Contenido/Views/ListaCargos";
import { Routes, Route } from "react-router-dom";
import Resultados from "./Componentes/Contenido/Resultados/Resultados"
import EditarCargoView from "./Componentes/Contenido/Perfiles/CargaCargo/EditarCargoView";

// import CargaMasiva from "./Componentes/Contenido/Perfiles/CargaMasiva/CargaMasiva";

function App() {
  return (
    <>
      <div className="contenedor-plataforma">
        <Head />
         <BarraLateral/>
        <Routes>
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/perfiles" element={<Contenido />} />
          <Route path="/listapruebas" element={<ListaPruebas />} />
          <Route path="/listacargos" element={<ListaCargos />} />
          <Route path="/resultados" element={<Resultados/>} />
          <Route path="/editarcargo/:id" element={<EditarCargoView/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
