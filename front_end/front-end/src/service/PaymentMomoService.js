import axios from "axios"

export const payMomo = async() =>{
    const data = await axios.get("http://localhost:8080/payment")
    // console.log(data);
}