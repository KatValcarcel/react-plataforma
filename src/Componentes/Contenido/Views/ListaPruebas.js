import { useState, useEffect } from "react";
import EditarPruebas from "../Perfiles/Tabla/EditarPruebas";
import Situacion from "../Perfiles/Tabla/Situacion";
import { LinkPruebas } from "../Services/LinkPruebas";


export default function ListaPruebas() {
  const [pruebas, setPruebas] = useState([]);

  const getPruebas = async () => {
    try {
      const pruebasObtenidas = await LinkPruebas();
      setPruebas(pruebasObtenidas); // despues de obtener los datos, actualizamos el estado
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {getPruebas()}, []);

  return (
    <div>
      {/* <h1>Pruebas Utilizadas</h1> */}
      <table className="table ">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Nombre del Cargo</th>
            <th>Área</th>
            <th>Situación</th>
            <th>Pruebas</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {pruebas.map(({ Cargo, Area, Mover }, i) => (
            <tr key={i} >
              
              <td className="boditablalistapruebas"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
              <td className="boditablalistapruebas">{Cargo}</td>
              <td className="boditablalistapruebas">{Area}</td>
              <td className="boditablalistapruebas">   <Situacion></Situacion>      </td>
              <td ><EditarPruebas></EditarPruebas></td>
              <td>          </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
