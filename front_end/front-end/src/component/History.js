import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getCustomerByUsername } from '../service/CustomerService';
import { getTicketByIdCustomer, returnTicketById } from '../service/TicketService';

function History() {
    const [page, setPage] = useState(0)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [code, setCode] = useState("")
    const [list, setList] = useState()


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
            navigate("/")
            Swal.fire({
                icon: "error",
                title: "Bạn không có quyền vào trang này",
                timer: 2000,
                showConfirmButton: false
            })
        } else {
            const data = await getCustomerByUsername(username);
            setCustomer(data)
        }
    }
    const getListHistory = async () => {
        if (customer) {
            try {
                const data = await getTicketByIdCustomer(page, customer.idCustomer, code, date, time)
                console.log(data);
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
    const searchList = () =>{
        const code = document.getElementById("codeTicket").value
        const date = document.getElementById("date").value
        const time = document.getElementById("time").value
        setCode(code)
        setDate(date)
        setTime(time)
    }

    useEffect(() => {
        getUser()

    }, [location])

    useEffect(() => {
        getListHistory()
    }, [customer,page,code,date,time])

    return (
        <>
        
        <div style={{ minHeight: "80vh", padding: "30px" }} >
            {/* <div className='row'>
                <h1>Lịch sử thanh toán</h1>
            </div> */}
            <div className='row'>
                <div className='col-4'>
                    <h1>Lịch sử thanh toán</h1>
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
                    <button id='codeTicket' className='btn btn-primary' onClick={()=>searchList()}>Tìm kiếm</button>
                </div>

            </div>
            <div className='row'>
                <div class="table-responsive">
                    <table class="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Mã đặt vé</th>
                                <th scope="col">Ngày khởi hành</th>
                                <th scope="col">Giờ khởi hành</th>
                                <th scope="col">Giá vé</th>
                                <th scope="col">Hành động</th>

                            </tr>
                        </thead>

                        <tbody>
                            {tickets.length > 0 && currDate ? tickets.map((i, index) => {
                                return (
                                    <tr class="" key={index}>
                                        <td scope="row">{list.numberOfElements*page +index+1}</td>
                                        <td>{i.codeTicket}</td>
                                        <td>{i.seat.schedule.dateDeparture}</td>
                                        <td>{i.seat.schedule.timeDeparture}</td>
                                        <td>{i.seat.typeSeat.priceSeat}</td>
                                        <td>
                                            <button className='btn btn-warning' onClick={() => returnTicket(i.idTicket)}>Trả vé</button>
                                            {/* <button className='btn btn-primary'>Chi tiết</button> */}


                                        </td>

                                    </tr>
                                )
                            }) :
                                <>
                                    Không tồn tại lịch sử đặt vé
                                </>
                            }
                        </tbody>

                    </table>
                    <div style={{display:"flex",float:"right"}}>
                        {list != null &&
                            <ul className="pagination">

                                {page > 0 &&
                                    <li className="page-item" onClick={() => decreasePage()}><a className="page-link">Previous</a></li>}
                                {list.totalPages > 0 &&
                                    <li className="page-item"><a  className="page-link">{page + 1}/{list.totalPages}</a></li>}
                                {(page + 1) < list.totalPages &&
                                    <li className="page-item" onClick={() => increasePage()}><a className="page-link">Next</a></li>}

                            </ul>
                        }
                    </div>
                </div>

            </div>
        </div>

        </>
    )
}
export default History