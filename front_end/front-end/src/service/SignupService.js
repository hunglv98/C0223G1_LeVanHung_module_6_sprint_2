import axios from "axios"

export const signup = async(obj) =>{
   await axios.post("http://localhost:8080/signup",obj)
}