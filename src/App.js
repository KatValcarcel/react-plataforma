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
import Resultados from "./Componentes/Contenido/Resultados/Resultados";
import EditarCargoView from "./Componentes/Contenido/Perfiles/CargaCargo/EditarCargoView";
import Intro from "./Componentes/Intro/Intro";
import { AuthContextProvider } from "./Componentes/Context/authContext";
import LoginView from "./Componentes/Context/LoginView";
import CheckOutView from "./Componentes/Context/CheckOutView";
import Navegacion from "./Componentes/Context/Navegacion";
import PrivateRoute from "./Componentes/Context/PrivateRoute";
import EnviosView from "./Componentes/Contenido/Views/EnviosView";


// import CargaMasiva from "./Componentes/Contenido/Perfiles/CargaMasiva/CargaMasiva";

function App() {
  return (
    <>
      <div className="contenedor-plataforma">
        <AuthContextProvider>
          <Navegacion/>
          {/* <Head /> */}
         
          <div className="contenedordeinicio">
            <Routes>
            <Route path="/" element={ <Intro/>} />
            
              <Route path="/login" element={<LoginView/>} />
              <Route  path="/bienvenida" element={<PrivateRoute><BarraLateral/><Bienvenida/></PrivateRoute>} />
              <Route  path="/perfiles" element={<PrivateRoute><BarraLateral/><Contenido/></PrivateRoute>} />
              <Route  path="/listapruebas" element={<PrivateRoute><BarraLateral/><ListaPruebas/></PrivateRoute>} />
              <Route  path="/listacargos" element={<PrivateRoute><BarraLateral/><ListaCargos/></PrivateRoute>} />
              <Route  path="/resultados" element={<PrivateRoute><BarraLateral/><Resultados/></PrivateRoute>} />
              <Route path="/envios" element={<PrivateRoute><BarraLateral/><EnviosView/></PrivateRoute>} />

              

{/* 
              <Route path="/bienvenida" element={<Bienvenida/>} />
              <Route path="/perfiles" element={<Contenido/>} />
              <Route path="/listapruebas" element={<ListaPruebas/>} />
              <Route path="/listacargos" element={<ListaCargos/>} />
              <Route path="/resultados" element={<Resultados/>} /> */}
              <Route path="/editarcargo/:id" element={<EditarCargoView/>} />
            </Routes>
          </div>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
