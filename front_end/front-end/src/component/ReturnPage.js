import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { returnFromPayment } from '../service/PaymentVNpay';
import { useNavigate } from 'react-router-dom';

function ReturnPage (){
    const navigate = useNavigate()
    const [responseCode,setResponseCode] = useState()
    const [idSeats,setIdSeats]= useState()
 

    const getURL= () =>{
        const urlParams = new URLSearchParams(window.location.search);
        const responseCode = urlParams.get('vnp_ResponseCode');
        console.log(responseCode);
        setResponseCode(responseCode)
    }
    const getListSeat = () => {
        const listSeat = localStorage.getItem("listIdSeat")
        console.log(listSeat);
        setIdSeats(listSeat)
    }
    

    const display = () =>{
        if (responseCode == "00") {
            Swal.fire({
                icon:"success",
                timer:2000,
                title:"Thanh toán thành công",
                showConfirmButton:false
            }).then( async()=>{
                await returnFromPayment(localStorage.getItem('username'),idSeats)
                localStorage.removeItem("listIdSeat")
                navigate("/")
            })
        }else{
            Swal.fire({
                icon:"error",
                timer:2000,
                title:"Thanh toán thất bại",
                showConfirmButton:false
            }).then(()=>{
                localStorage.removeItem("listIdSeat")
                navigate("/")
            })
        }
    }

    useEffect(()=>{
        getURL()
        getListSeat()
    },[])
    useEffect(()=>{
        display()
    },[idSeats])

    return(
        <>
        <p>Trang kết quả</p>
        </>
    )
}
export default ReturnPage;