import { useState, useEffect } from "react";
import TablaReportes from "./TablaReportes";
import { LinkReportes } from "./LinkReportes";

export default function ListaReportes() {
    const [reportes, setReportes] = useState([]);
  
    const getReportes = async () => {
      try {
        const reportesObtenidos = await LinkReportes();
        setReportes(reportesObtenidos); // despues de obtener los datos, actualizamos el estado
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {getReportes()}, []);
  
    return (
      <div>
        {/*<h1>Reportes</h1>*/}
        <table className="table ">
          <thead className="thead">
            <tr>
              <th>#</th>
              <th>Analista de Contabilidad</th>
              <th>Fecha de Solicitud</th>
              <th>Reportes</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map(({ AnalistadeContabilidad, FechadeSolicitud }, i) => (
              <tr key={i} >
                
                <td className="bodytablalistaresultados"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                <td className="bodytablalistaresultados">{AnalistadeContabilidad}</td>
                <td className="bodytablalistaresultados">{FechadeSolicitud}</td>
                <td>Completa 
                    <svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="20" height="20" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
                      <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                     / Resumida 
                    <svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="20" height="20" fill="currentColor" class="bi bi-kanban-fill" viewBox="0 0 16 16">
                    <path d="M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
                    </svg>
                </td>
                <td className="bodytablalistaresultados"><svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </td>
                {/*<td ><EditarPruebas></EditarPruebas></td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  