import axios from "axios";

const URL="https://619fa4d91ac52a0017ba49a7.mockapi.io/Resultados/Reportes"

const LinkReportes = async () => {
    try {
        const {data} = await axios.get(URL)
        return data  //Esto es como un resolve
    } catch (error) {
        throw error  // esto es como un reject
    }
}

export {LinkReportes}