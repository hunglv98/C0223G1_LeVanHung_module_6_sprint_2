import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { returnFromPayment } from '../service/PaymentVNpay';
import { Link, useNavigate } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import {Button, Modal} from "react-bootstrap";


function ReturnPage() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalOpen = async () => {
        setShowModal(true);
    };


    const [responseCode, setResponseCode] = useState()
    const [idSeats, setIdSeats] = useState()
    const [tickets, setTickets] = useState([]);
    const [amount,setAmount] = useState()

    const getAmount = () =>{
        if(tickets.length >0){
        const amount = tickets.reduce((accumulator,i)=>{
            return accumulator +=i.seat.typeSeat.priceSeat 
        },0)
        setAmount(amount)
    }
    }
 

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

    useEffect(()=>{
        getAmount()
    },[tickets])

    return (
        <div className='duthuyen'>
            <div className='row' >
                <div className='col-4'></div>

                <div className='col-4 form-group ticket-return' style={{ backgroundColor: "white",color:"rgb(10, 141, 145)" }}>
                    <h1 style={{textAlign:"center"}}>Thông tin giao dịch</h1>
                    {tickets.length > 0 &&
                        <>
                            <div className='row'>
                                <label htmlFor='ticketCode'>Danh sách vé đã đặt</label>
                                {/* {tickets.map((i) => {
                                    return (
                                        <div className='col-3'> 
                                        <span className="form-control" id="ticketCode">{i.codeTicket}</span>
                                        </div>
                                    )
                                })} */}
                                <a onClick={handleModalOpen} className="form-control" id="ticketCode" style={{color:"blue"}}>Xem chi tiết</a>
                            </div>
                            <div className='row'>
                                <label htmlFor='mailCustomer'>Ngày giao dịch</label>
                                <p className="form-control" name="mailCustomer" id="mailCustomer" >{moment(tickets[0].dateBooking).format("DD-MM-YYYY")}</p>

                            </div>
                            <div className='row'>
                                <label htmlFor='telCustommer'>Tổng tiền</label>
                                <p className="form-control" name="telCustommer" id="telCustommer" >{numeral(amount).format("")} VND</p>
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
            <div className="text-center m-auto">
            <Modal
                className="modal-xl"
                show={showModal}
                onHide={handleModalClose}
                keyboard={false}
                centered
            >

                <Modal.Body style={{textAlign:"center"}}>
                    <div className="d-flex justify-content-between">
                        <h1 style={{color:"rgb(10, 141, 145)",textAlign:"center"}}>Danh sách vé đã đặt</h1>
                        <a onClick={() => handleModalClose()}>
                            <span className="btn btn-success">X
                            </span>
                        </a>
                    </div>
                    <table className="table table-striped" >
                        <thead>
                        <tr style={{color:"rgb(10, 141, 145)"}}>
                            <th className="">STT</th>
                            <th className="">Mã đặt vé</th>
                            <th className="">Số ghế</th>
                            <th className="">Loại ghế</th>
                            <th className="">Ngày khởi hành</th>
                            <th className="">Giờ khởi hành</th>    
                            <th className="">Đơn giá</th>    
                        </tr>
                        </thead>
                        <tbody>
                            {tickets.length >0 && tickets.map((i,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{i.codeTicket}</td>
                                        <td>{i.seat.nameSeat}</td>
                                        <td>{i.seat.typeSeat.nameTypeSeat}</td>
                                        <td>{moment(i.seat.schedule.dateDeparture).format("DD-MM-YYYY")}</td>
                                        <td>{i.seat.schedule.timeDeparture}</td>
                                        <td>{numeral(i.seat.typeSeat.priceSeat).format()} VND</td>
                                    </tr>
                                )
                            })}
                            
                        
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </div>
        </div>
    )
}
export default ReturnPage;