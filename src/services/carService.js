import axios from "axios";

const handleCreateNewCarServie=(data)=>{
    console.log('data from service',data)
    return axios.post('/api/create-new-car',data)
}

export{ handleCreateNewCarServie}