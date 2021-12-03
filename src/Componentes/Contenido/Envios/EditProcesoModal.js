import { useState, useEffect } from "react";
import { BsFillPenFill } from "react-icons/bs";
import { UseModal } from "../useModal";
import { GetProcesoById } from "../../services/ProcesoService";

import Modal from "../cerrarModal";
import FormProceso from "./FormProceso";

export default function EditProcesoModal(id) {
  const [isOpenModal, openModal, closeModal] = UseModal(false);
  const [value, setValue] = useState({
    Nombre: "",
    Descripcion: "",
    // Fechas: [new Date(), new Date()],
    // FechaInicio: "",
    // FechaFin: "",
    Perfil: "",
    Oculto: false,
  });

  const getProceso = async () => {
    try {
      const Proceso = await GetProcesoById(id.id);
      setValue(Proceso);
    } catch (error) {
      throw error;
    }
  };

  // useEffect(() => {
  //   getProceso();
  // }, []);

  return (
    <div>
      <div>
        <button className="boton btn-update" onClick={openModal}>
          <BsFillPenFill />
        </button>
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h5 className="modal-header">Actualizar Proceso</h5>
        <FormProceso value={value} />
        <div className="modal-footer"></div>
      </Modal>
    </div>
  );
}
