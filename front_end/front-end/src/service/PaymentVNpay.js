import axios from "axios"

export const payWithVNpay = async () =>{
    const res = await axios.post("http://localhost:8080/vnpay/create")
    return res.data;
}