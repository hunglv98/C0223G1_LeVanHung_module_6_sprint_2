import axios from "axios"

export const getTicketFromCode = async(code,tel,email) =>{
    const res = await axios.get(`http://localhost:8080/ticketReturn/code?code=${code}&&tel=${tel}&&email=${email}`)
    return res.data;
}

export const returnTicketById = async(id) =>{
    await axios.put(`http://localhost:8080/ticketReturn/${id}`)
}

export const sendEmail =async (email) =>{
    await axios.get(`http://localhost:8080/ticketReturn/forgot?email=${email}`)
}

export const getTicketByIdCustomer = async(page,id,code,date,time) =>{
    const res = await axios.get(`http://localhost:8080/ticket/history?page=${page}&&idCustomer=${id}&&codeTicket=${code}&&dateDeparture=${date}&&timeDeparture=${time}`)
    return res.data
}

export const getTicketByIdTicket = async(id) =>{
    const res = await axios.get(`http://localhost:8080/ticket/${id}`)
    return res.data
}