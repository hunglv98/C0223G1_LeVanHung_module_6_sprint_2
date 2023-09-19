import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { returnFromPayment } from '../service/PaymentVNpay';
import { Link, useNavigate } from 'react-router-dom';

function ReturnPage() {
    const navigate = useNavigate()
    const [responseCode, setResponseCode] = useState()
    const [idSeats, setIdSeats] = useState()
    const [tickets, setTickets] = useState([]);
 

    const getURL = () => {
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


    const display = () => {
        if (responseCode == "00") {
            Swal.fire({
                icon: "success",
                timer: 2000,
                title: "Thanh toán thành công",
                showConfirmButton: false
            }).then(async () => {
                const data = await returnFromPayment(localStorage.getItem('username'), idSeats)
                console.log(data);
                setTickets(data)
            
                localStorage.removeItem("listIdSeat")
                // navigate("/")
            })
        } else {
            Swal.fire({
                icon: "error",
                timer: 2000,
                title: "Thanh toán thất bại",
                showConfirmButton: false
            }).then(() => {
                localStorage.removeItem("listIdSeat")
                // navigate("/")
            })
        }
    }

    useEffect(() => {
        document.title = "Trạng thái giao dịch"
        getURL()
        getListSeat()
    }, [])
    useEffect(() => {
        display()
    }, [idSeats])

    return (
        <div className='duthuyen'>
            <div className='row' >
                <div className='col-4'></div>

                <div className='col-4 form-group ticket-return' style={{ backgroundColor: "white",color:"rgb(10, 141, 145)" }}>
                    <h1 style={{textAlign:"center"}}>Thông tin giao dịch</h1>
                    {tickets.length > 0 &&
                        <>
                            <div className='row'>
                                <label htmlFor='ticketCode'>Mã đặt vé</label>
                                {/* {tickets.map((i) => {
                                    return (
                                        <div className='col-3'> 
                                        <span className="form-control" id="ticketCode">{i.codeTicket}</span>
                                        </div>
                                    )
                                })} */}
                                <p className="form-control" id="ticketCode">{tickets.map((i,key)=>key != (tickets.length-1) ? i.codeTicket + ", ":i.codeTicket) }</p>
                            </div>
                            <div className='row'>
                                <label htmlFor='mailCustomer'>Ngày giao dịch</label>
                                <p className="form-control" name="mailCustomer" id="mailCustomer" >{tickets[0].dateBooking}</p>

                            </div>
                            <div className='row'>
                                <label htmlFor='telCustommer'>Tổng tiền</label>
                                <p className="form-control" name="telCustommer" id="telCustommer" >{tickets[0].seat.typeSeat.priceSeat * tickets.length}</p>
                            </div>
                        </>
                    }
                    <div className='row'>

                        <label htmlFor='telCustommer'>Trạng thái</label>
                        {responseCode == "00" ?
                            <p className="form-control" >Thành công</p> :
                            <p className="form-control error-message">Thất bại</p>
                        }
                    </div>

                    <div className='row' style={{ float: "right" }}>
                        <Link to="/" className='btn btn-primary' style={{ minWidth: "150px",backgroundColor:"rgb(10, 141, 145)" }} type='submit' >Quay về trang chủ</Link>
                    </div>

                </div>
                <div className='col-4'></div>
            </div>
        </div>
    )
}
export default ReturnPage;