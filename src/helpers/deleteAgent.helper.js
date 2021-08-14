import axios from "axios";

export const deleteAgentHelper = (id) => {

    let url = `http://localhost:3000/deleteAgent/`;
    try{
        axios.post(url, {id})
            .then((res) => {console.log(res)})
            .catch(err => console.log(err))
    }catch(err){
        alert('Ha ocurrido un error al eliminar al agente');
    }
}