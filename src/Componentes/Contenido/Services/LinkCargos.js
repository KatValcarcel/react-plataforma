import axios from "axios";
// Con el axios podremos hacer peticiones a servidores externos, suele usarse para BackEnd. Con esto traeremos la lista de información desde mockAPI
//https://616b5eb216c3fa0017171680.mockapi.io/cargos
const URL =`${process.env.REACT_APP_API}cargos`

const LinkCargos = async () => {
    try {
        const {data} = await axios.get(URL)
        return data  //Esto es como un resolve
    } catch (error) {
        throw error  // esto es como un reject
    }
}


const crearCargo = async (nuevoCargo) =>{
    try {
        const headers = {
            "Content-Type" : "application/json"
        }
        const { data } = await axios.post(URL, nuevoCargo, { headers } )
        return data
    } catch (error) {
        throw error
    }
}

export { LinkCargos, crearCargo}