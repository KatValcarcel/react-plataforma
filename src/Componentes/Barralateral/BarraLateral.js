import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserFriends,
  FaRegFileAlt,
  FaRegFolder,
  FaTelegramPlane,
  FaRegSun,
  FaWhatsapp,
} from "react-icons/fa";

export default function BarraLateral() {
  return (
    <div className="col-2 barralateral">
      <div id="list-panel" className=" list-group-panel ">
        <Link
          to="/bienvenida"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaHome />
          </span>{" "}
          Inicio
        </Link>

        <Link
          to="/perfiles"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaUserFriends />
          </span>{" "}
          Perfiles
        </Link>

        <Link
          to="/listapruebas"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaRegFileAlt />
          </span>{" "}
          Evaluaciones
        </Link>

        <Link
          to="/resultados"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaRegFolder />
          </span>{" "}
          Resultados
        </Link>

        <Link
          to="/envios"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaTelegramPlane />
          </span>{" "}
          Envios
        </Link>

        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaRegSun />
          </span>{" "}
          Administración
        </Link>

        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="list-group-item list-group-item-action"
        >
          <span className="me-3">
            <FaWhatsapp />
          </span>{" "}
          Ayuda
        </Link>
      </div>
    </div>
  );
}
