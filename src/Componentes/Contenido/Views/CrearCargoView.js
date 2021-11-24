import { useState } from "react"
import FormCargo from "../Perfiles/CargaCargo/FormCargo"
import { crearCargo } from "../Services/LinkCargos"

export default function CrearCargoView() {
    const [value, setValue] = useState({
        Cargo: "",
        Area: "" 
    })

    const actualizarInput = (e) => {
        console.log(e)
        setValue({
            ...value,[e.target.name]:e.target.value
        })
    }
    
    const manejarSubmit = async (e) => {
        e.preventDefault()
        // console.log("submit Ejecutado")
        try {
            await crearCargo(value)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <FormCargo value={value} actualizarInput={actualizarInput} manejarSubmit={manejarSubmit}/>
        </div>
    )
}
