import axios from "axios"

export const getCustomerByUsername = async (username,headers) => {
    const res = await axios.get(`http://localhost:8080/customer/${username}`, {headers})
    return res.data;
}

export const getCustomerByEmail = async (email) => {
    const res = await axios.get(`http://localhost:8080/customer?email=${email}`)
    return res.data;
}