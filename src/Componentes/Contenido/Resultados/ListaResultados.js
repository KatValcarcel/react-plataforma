import { useState, useEffect } from "react";
import Situacion from "../Perfiles/Tabla/Situacion";
import { LinkResultados } from "./LinkResultados";
import TablaReportes from "./TablaReportes";

export default function ListaResultados() {
const [resultado, setResultado] = useState([])

    const getResultados = async () => {
        try {
            const ResultadosObtenidos = await LinkResultados()
            setResultado(ResultadosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getResultados()
    }, [])
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre del Cargo</th>
                        <th>Area</th>
                        <th>Fecha de Solicitud</th>
                        <th>Días</th>
                        <th>Situación</th>
                        <th>Reportes</th>
                        <th>Ver Reportes</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {resultado.map(({NombredelCargo, Area, FechadeSolicitud, Dias, Reportes}, i) =>(
                        <tr key={i}>
                            <td className="bodytablalistaresultados"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
                            <td className="bodytablalistaresultados">{NombredelCargo}</td>
                            <td className="bodytablalistaresultados">{Area}</td>
                            <td className="bodytablalistaresultados">{FechadeSolicitud}</td>
                            <td className="bodytablalistaresultados">{Dias}</td>
                            <td className="bodytablalistaresultados"><Situacion></Situacion></td>
                            <td className="bodytablalistaresultados">{Reportes}</td>
                            <td className="bodytablalistaresultados"><TablaReportes></TablaReportes></td>
                            <td className="bodytablalistaresultados"><svg xmlns="http://www.w3.org/2000/svg" color="#F28705" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg></td>
                            {/*<td className="bodytablalistaresultados">{Eliminar}</td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
    