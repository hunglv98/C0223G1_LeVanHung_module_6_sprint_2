import React, { useEffect } from 'react';
import { getCustomerByEmail } from '../service/CustomerService';
import Swal from 'sweetalert2';
import { sendEmail } from '../service/TicketService';
import { RotatingLines } from "react-loader-spinner"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ForgotCode() {
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate()
    useEffect(()=>{
        
    },[flag])
    const sendCodeToEmail = async () => {
        const email = document.getElementById("email").value
        try {        
            const customer = await getCustomerByEmail(email)
            console.log(customer);
            try {
                setFlag(true)
                await sendEmail(email)
                Swal.fire({
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    title: "Mã đặt chỗ đã được gửi về email của bạn"
                })
                navigate("/ticketReturn")
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Không tìm thấy mã đặt chỗ theo email này",
                    timer: 2000,
                    showConfirmButton: false
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Không tìm thấy email này",
                timer: 2000,
                showConfirmButton: false
            })
        }

    }
    return (
        <div className='duthuyen'>
            <div className='row '>
                <div className='col-4'></div>
                <div className='col-4 ticket-return' style={{ color: "#0a8d91" }}>
                    <div className='row'>
                        <label className='form-label'>Nhập vào Email của bạn</label>
                        <input id='email' type='text' className='form-control'></input>

                    </div>
                    <div style={{ float: "right" }}>
                        {flag ?
                        <RotatingLines />:
                        <button className='btn btn-primary' style={{ backgroundColor: "#0a8d91" }} onClick={() => sendCodeToEmail()}>Xác nhận</button>}
                    </div>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    )
}
export default ForgotCode;