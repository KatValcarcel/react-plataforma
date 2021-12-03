import axios from "axios";

const URL = "https://61a686308395690017be931e.mockapi.io/Proceso";

const GetProcesos = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw error;
  }
};
const CreateProceso = async (nuevoProceso) => {
  try {
    const headers = {
      "Content-type": "application/json",
    };
    const { data } = await axios.post(URL, nuevoProceso, { headers });
    return data;
  } catch (error) {
    throw error;
  }
};

const GetProcesoById = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
const UpdateProceso = async (id, proceso) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`${URL}/${id}`, proceso, { headers });
    return; //resolve
  } catch (error) {
    throw error;
  }
};

const DeleteProceso = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
    return "proceso eliminado";
  } catch (error) {
    throw error;
  }
};
export {
  GetProcesos,
  CreateProceso,
  GetProcesoById,
  UpdateProceso,
  DeleteProceso,
};
