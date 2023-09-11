import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerByUsername } from '../service/CustomerService';
import { getListSeatById } from '../service/SeatService';
import Swal from 'sweetalert2';
import { payWithVNpay } from '../service/PaymentVNpay';

function DetailSeat() {
    const params = useParams()
    const [customer, setCustomer] = useState({})
    const [seats,setSeats] = useState([])
    const getListId = async() => {
        const data = await getListSeatById(params.listId)
        console.log(data);
        setSeats(data)
    }

    const getCustomerByUser = async () => {
        const username = localStorage.getItem("username");
        const data = await getCustomerByUsername(username);
        setCustomer(data)
    }
    useEffect(() => {
        getListId()
        getCustomerByUser()
    }, [])

    const payment = async() =>{
        Swal.fire({
            icon:"warning",
            title:"Xác nhận thông tin",
            text:"Hãy kiểm tra thông tin trước khi thanh toán",
            showCancelButton:true,
            confirmButtonText:"Xác nhận",
            cancelButtonText:"Hủy"
        }).then(async(res)=>{
            if(res.isConfirmed){
               const data = await payWithVNpay();
               window.location.href=data;
               
            }else if(res.dismiss === Swal.DismissReason.cancel){}
        })
    }
    return (
        <>
            
            <div className='row'>
                <h2 style={{"display":"flex","justifyContent":"center"}}>Thông tin khách hàng</h2>
                {customer && 
                <>
                <span>Họ và tên: {customer.nameCustomer} </span>
                <span>Số điện thoại: {customer.telCustomer} </span>
                <span>Căn Cước Công Dân: {customer.identityCardCustomer} </span>
                <span>Email: {customer.emailCustomer} </span>            
                </>
                }
            </div>
            <div className='row'>
                <h2 style={{"display":"flex","justifyContent":"center"}}>Thông tin lịch trình</h2>
                {seats.length >0 && 
                    <>
                        <span>Ngày khởi hành: {seats[0].schedule.dateDeparture} </span>
                        <span>Thời gian khởi hành: {seats[0].schedule.timeDeparture} </span>
                        <span>Tên tàu: {seats[0].schedule.ship.nameShip} </span>
                        <span>Số lượng vé: {seats.length} </span>
                        <span>Loại vé: {seats[0].typeSeat.nameTypeSeat} </span>
                        <span>Đơn giá: {seats[0].typeSeat.priceSeat}/vé </span>
                        <span>Tổng tiền giá: {seats[0].typeSeat.priceSeat*seats.length}/vé </span>   
                    </>
                }
            </div>
            <div className='row'>
                <button className='btn btn-outline-primary' onClick={()=>payment()}>Thanh toán VNpay</button>
            </div>

        </>
    )
}
export default DetailSeat;