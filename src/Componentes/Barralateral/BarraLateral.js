import React from "react";


export default function BarraLateral() {
  return (
    <div className="col-2 barralateral">
        <div id="list-panel" className=" list-group-panel ">
            <a className="list-group-item list-group-item-action" href="#list-item-1" >
                <span className="me-3">
                    <i className="icon bi bi-house-door" />
                </span>{" "}
                    Inicio
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-2">
                <span className="me-3">
                    <i className="icon bi bi-person-circle" />
                </span>{" "}
                    Perfiles
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-3">
                <span className="me-3">
                    <i className="icon bi bi-file-richtext" />
                </span>{" "}
                    Evaluaciones
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-4">
                <span className="me-3">
                    <i className="icon bi bi-folder-check" />
                </span>{" "}
                    Resultados
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-4">
                <span className="me-3">
                    <i className="icon far fa-paper-plane" />
                </span>{" "}
                    Envios
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-4" >
                <span className="me-3">
                    <i className="icon bi bi-gear" />
                </span>{" "}
                    Administración
            </a>

            <a className="list-group-item list-group-item-action" href="#list-item-4" >
                <span className="me-3">
                    <i className="icon bi bi-whatsapp" />
                </span>{" "}
                    Ayuda
            </a>
        </div>
    </div>
  );
}
