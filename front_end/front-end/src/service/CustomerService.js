import axios from "axios"

export const getCustomerByUsername = async(username)=>{
    const res= await axios.get(`http://localhost:8080/customer/${username}`)
    return res.data;
}

export const getCustomerByEmail = async(email) =>{
    const res = await axios.get(`http://localhost:8080/customer?email=${email}`)
    return res.data;
}