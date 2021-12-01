import { useState, useEffect } from "react"
import { useParams } from "react-router"
import FormCargo from "./FormCargo"
import { obtenerCargoPorId } from "../../Services/LinkCargos";


export default function EditarCargoView() {
    const [value, setValue] = useState({
        Cargo: "",
        Area: "",
      });

    const { id } = useParams() //1. con esto obtenemos el id de la url (mockAPI)
      console.log({ id })

    const getCargo = async () =>{
        try {
            const cargoObtenido = await obtenerCargoPorId(id) //obtenemos el producto por su ID
            setValue(cargoObtenido) // la respuesta de mockAPI la pongo en el estado
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCargo() //3. Ejecutamos con un useEffect, con ello llamamos a la función que me trae un cargo por su ID

    },[])
    return (
        <div>
       
           <FormCargo value={value}/>
        </div>
    )
}
