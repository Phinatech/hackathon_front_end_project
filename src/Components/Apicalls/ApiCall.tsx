import axios from "axios"

const localurl = "http://localhost:9000"

export const createUser = async ()=>{
    await axios 
    .post(`${localurl}/api/User`)
}
