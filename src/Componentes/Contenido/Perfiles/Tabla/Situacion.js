import React from "react";

export default function Situacion() {
  return (
    <div className="textosituacion">
      <label class="form-check-label" for="flexSwitchCheckDefault">Inactivo</label>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">Activo</label>
      </div>
    </div>
  );
}
