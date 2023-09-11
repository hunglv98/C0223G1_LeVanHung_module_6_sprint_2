import axios from "axios"

export const getSeatSearch = async(id) =>{
    const res = await axios.get(`http://localhost:8080/seat/${id}`)
    return res.data;
}

export const getPageSearch = async(page, idSchedule, idTypeSeat) =>{
    const res = await axios.get(`http://localhost:8080/seat/search?page=${page}&&idSchedule=${idSchedule}&&idTypeSeat=${idTypeSeat}`)
    return res.data.content
}

export const getListSeatById = async(listId) =>{
    const res = await axios.get(`http://localhost:8080/seat/detail/${listId}`)
    return res.data
}
