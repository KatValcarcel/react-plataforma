// import "../../../../node_modules/bootstrap/dist/css ";
import { BsSearch } from "react-icons/bs";
import NuevoProceso from "../Envios/NuevoProcesoModal"
import ProcesoView from "./ProcesoView";

export default function EnviosView() {
  return (
    <div>
      <div className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="tittle">Envíos</h3>
            </div>
            <div className="input-group-text col-4">
              <input
                ID="txtBuscar"
                type="Text"
                className="form-control"
                placeholder="Proceso"
              />
              <span className="input-group-btn">
                <button class="btn btn-primary" onclick="buscar()">
                  <BsSearch className="lupa" />
                </button>
              </span>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-around">
              <NuevoProceso />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <ProcesoView />
      </div>
    </div>
  );
}
