import { useState, useEffect } from "react";
import EditarPruebas from "../Perfiles/Tabla/EditarPruebas";
import Situacion from "../Perfiles/Tabla/Situacion";
import { LinkCargos } from "../Services/LinkCargos";
import CrearCargoView from "./CrearCargoView";


export default function ListaCargos() {
  const [cargos, setCargos] = useState([]);

  const getCargos = async () => {
    try {
      const pruebasObtenidas = await LinkCargos();
      setCargos(pruebasObtenidas); // despues de obtener los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getCargos()}, []);

  return (
    <div>
        {/* <CrearCargoView></CrearCargoView> */}
      {/* <h1>Pruebas Utilizadas</h1> */}
      <table className="table ">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Nombre del Cargos</th>
            <th>Área</th>
            <th>Situación</th>
            <th>Pruebas</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cargos.map(({ Cargo, Area }, i) => (
            <tr key={i} >
              
              <td className="boditablalistapruebas"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
              <td className="boditablalistapruebas">{Cargo}</td>
              <td className="boditablalistapruebas">{Area}</td>
              <td className="boditablalistapruebas">   <Situacion></Situacion>      </td>
              <td className="boditablalistapruebas"><EditarPruebas></EditarPruebas></td>
              <td className="boditablalistapruebas">          </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}