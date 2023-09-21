import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getCustomerByUsername } from '../service/CustomerService';
import { getTicketByIdCustomer, getTicketByIdTicket, returnTicketById } from '../service/TicketService';
import moment from 'moment';
import numeral from 'numeral';
import {Button, Modal} from "react-bootstrap";

function History() {
    const [page, setPage] = useState(0)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [code, setCode] = useState("")
    const [list, setList] = useState()
    const [showModal, setShowModal] = useState(false);
    const [ticket, setTicket] = useState();

    const headers = {
        "Authorization": localStorage.getItem("token")
    }

    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalOpen = async (id) => {
        setShowModal(true);
        try{
            const data = await getTicketByIdTicket(id)
            setTicket(data)

        }catch(error){
            Swal.fire({
                icon:"error",
                title:"Không tìm thấy vé này",
                timer:2000,
                showConfirmButton:false
            })
        }
       
    };

    const [customer, setCustomer] = useState();
    const [tickets, setTickets] = useState([]);
    const [currDate, setCurrDate] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const getUser = async () => {
        var currentDate = new Date(Date.now());
        currentDate.setHours(currentDate.getHours() + 1);
        setCurrDate(currentDate)
        const username = localStorage.getItem("username");
        const role = localStorage.getItem("role");
        if (role != "ROLE_CUSTOMER") {
            navigate("/notFound")
            // Swal.fire({
            //     icon: "error",
            //     title: "Bạn không có quyền vào trang này",
            //     timer: 2000,
            //     showConfirmButton: false
            // })
        } else {
            try{
                const data = await getCustomerByUsername(username,headers);
                setCustomer(data)
            }catch(error){
                navigate("/notFound")
            }
            
        }
    }
    const getListHistory = async () => {
        if (customer) {
            try {
                const data = await getTicketByIdCustomer(page, customer.idCustomer, code, date, time)
                setList(data)
                setTickets(data.content)
            } catch (error) {
                console.log("lỗi");
            }
        }
    }


    const returnTicket = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Bạn có muốn hoàn vé không?",
            text: "Hành động này sẽ không thể hoàn tác!",
            showCancelButton: true,
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Hủy"
        }).then(async (res) => {
            if (res.isConfirmed) {
                try {
                    await returnTicketById(id)
                    Swal.fire({
                        icon: "success",
                        title: "Hoàn vé thành công",
                        timer: 2000,
                        showConfirmButton: false
                    })
                    navigate("/history")
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Đã quá thời hạn hoàn trả vé",
                        text: "Vé phải được trả trước giờ khởi hành một giờ đồng hồ",
                        timer: 2000,
                        showConfirmButton: false
                    })
                }

            } else if (res.dismiss === Swal.DismissReason.cancel) { }
        })


    }

    const increasePage = () => {
        if ((page + 1) < list.totalPages) {
            setPage(page + 1)
        }
    }
    const decreasePage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const searchList = () => {
        const code = document.getElementById("codeTicket").value
        const date = document.getElementById("date").value
        const time = document.getElementById("time").value
        setPage(0)
        setCode(code)
        setDate(date)
        setTime(time)
    }

    useEffect(() => {
        document.title = "Lịch sử giao dịch"
        getUser()

    }, [location])

    useEffect(() => {
        getListHistory()
    }, [customer, page, code, date, time])

    return (
        <>

            <div style={{ minHeight: "80vh", padding: "30px",color:"rgb(10, 141, 145)" }} >
                {/* <div className='row'>
                <h1>Lịch sử thanh toán</h1>
            </div> */}
                <div className='row'>
                    <div className='col-4'>
                        <h1 style={{textTransform:"uppercase"}}>Lịch sử thanh toán</h1>
                    </div>
                    <div className='col-2'>
                        <input type='text' id='codeTicket' placeholder='Mã đặt vé' className='form-control' />
                    </div>
                    <div className='col-2'>
                        <input type='date' id='date' placeholder='Ngày khởi hành' className='form-control' />
                    </div>
                    <div className='col-2'>
                        <input type='text' id='time' placeholder='Giờ khởi hành' className='form-control' />
                    </div>
                    <div className='col-2'>
                        <button id='codeTicket' className='btn btn-primary' style={{backgroundColor:"rgb(10, 141, 145)"}} onClick={() => searchList()}>Tìm kiếm</button>
                    </div>

                </div>
                <div className='row'>
                    <div class="table-responsive" style={{textAlign:"center"}}>
                        <table class="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Mã đặt vé</th>
                                    <th scope="col">Ngày khởi hành</th>
                                    <th scope="col">Giờ khởi hành</th>
                                    <th scope="col">Giá vé</th>
                                    <th scope="col">Hoàn vé</th>
                                    <th scope="col">Chi tiết</th>
                                   
                                </tr>
                            </thead>

                            <tbody>
                                {tickets.length > 0 && currDate ? tickets.map((i, index) => {
                                    return (
                                        <>
                                        <tr class="" key={index}>
                                            <td scope="row">{8 * page + index + 1}</td>
                                            <td>{i.codeTicket}</td>
                                            <td>{moment(i.seat.schedule.dateDeparture).format('DD-MM-YYYY')}</td>
                                            <td>{i.seat.schedule.timeDeparture}</td>
                                            <td>{numeral(i.seat.typeSeat.priceSeat).format("")} VND</td>
                                            <td>
                                                <button className='btn btn-outline-primary' onClick={() => returnTicket(i.idTicket)}><i class="fa-solid fa-rotate-left"></i></button>
                                                {/* <button className='btn btn-primary'>Chi tiết</button> */}


                                            </td>
                                            <td><a onClick={()=>handleModalOpen(i.idTicket)}><i class="fa-solid fa-circle-info"></i></a></td>

                                        </tr>
                                        

                                        </>
                                    )
                                }) :
                                    <>
                                        Không tồn tại lịch sử đặt vé
                                    </>
                                }
                            </tbody>

                        </table>
                        <div style={{ display: "flex", float: "right" }}>
                            {list != null &&
                                <ul className="pagination">

                                    {page > 0 &&
                                        <li className="page-item" onClick={() => decreasePage()}><a className="page-link">Trước</a></li>}
                                    {list.totalPages > 0 &&
                                        <li className="page-item"><a className="page-link">{page + 1}/{list.totalPages}</a></li>}
                                    {(page + 1) < list.totalPages &&
                                        <li className="page-item" onClick={() => increasePage()}><a className="page-link">Sau</a></li>}
                                
                                </ul>
                            }
                        </div>
                    </div>

                </div>
                <div className="text-center m-auto">
            <Modal
                className="modal-l"
                show={showModal}
                onHide={handleModalClose}
                keyboard={false}
                centered
            >

                <Modal.Body >
                    {ticket != null &&
                        <div className='row' style={{display:"flex",color:"rgb(10, 141, 145)"}}>
                            <h2 style={{textAlign:"center",fontSize:"30px"}}>CHI TIẾT ĐẶT VÉ</h2>
                            <div className='col-6 form-group'>
                                <label>Mã đặt vé</label>
                                <div className='form-control'>{ticket.codeTicket}</div>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Đơn giá</label>
                                <div className='form-control'>{numeral(ticket.seat.typeSeat.priceSeat).format()} VND</div>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Ngày khởi hành</label>
                                <div className='form-control'>{moment(ticket.seat.schedule.dateDeparture).format('DD-MM-YYYY')} </div>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Giờ khởi hành</label>
                                <div className='form-control'>{ticket.seat.schedule.timeDeparture}</div>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Số ghế</label>
                                <div className='form-control'>{ticket.seat.nameSeat}</div>
                            </div>
                            <div className='col-6 form-group'>
                                <label>Loại ghế</label>
                                <div className='form-control'>{ticket.seat.typeSeat.nameTypeSeat}</div>
                            </div>
                            
                            <div className='col-6 form-group'>
                                <label>Ngày đặt vé</label>
                                <div className='form-control'>{moment(ticket.dateBooking).format("DD-MM-YYYY HH:MM:SS")}</div>
                            </div>
                            
                            <div className='col-6 form-group'>
                                <label>Tên tàu</label>
                                <div className='form-control'>{ticket.seat.schedule.ship.nameShip}</div>
                            </div>
                           
                        </div>
}
                </Modal.Body>
            </Modal>
        </div>
            </div>

        </>
    )
}
export default History