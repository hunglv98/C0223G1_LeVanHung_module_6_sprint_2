import axios from "axios"

export const login = async(obj) =>{
    const res = await axios.post("http://localhost:8080/signin",obj)
    return res.data;
}