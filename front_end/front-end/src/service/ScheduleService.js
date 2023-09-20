import axios from "axios"

export const getListDate = async() =>{
    const res = await axios.get("http://localhost:8080/schedule/getAllDate")
    return res.data;
}

export const getListTime = async() =>{
    const res = await axios.get("http://localhost:8080/schedule/getAllTime")
    return res.data;
}

export const getScheduleByDateAndTime = async(date,time) =>{
    const res = await axios.get(`http://localhost:8080/schedule/getSchedule?date=${date}&&time=${time}`)
    return res.data
}

export const getScheduleById = async(id) =>{
    const res = await axios.get(`http://localhost:8080/schedule/${id}`)
    return res.data
}