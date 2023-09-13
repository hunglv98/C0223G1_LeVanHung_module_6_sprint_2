import axios from "axios"

export const payWithVNpay = async (total) =>{
    const res = await axios.post(`http://localhost:8080/vnpay/create?total=${total}`)
    return res.data;
}

export const returnFromPayment = async(username,listIdSeat) =>{
    await axios.put(`http://localhost:8080/vnpay/return/${username}/${listIdSeat}`)
}