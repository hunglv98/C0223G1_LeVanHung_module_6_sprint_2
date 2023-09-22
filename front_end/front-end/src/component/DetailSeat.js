import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCustomerByUsername } from '../service/CustomerService';
import { getListSeatById } from '../service/SeatService';
import Swal from 'sweetalert2';
import { payWithVNpay } from '../service/PaymentVNpay';
import numeral from 'numeral';
import moment from 'moment';
import { Button, Modal } from "react-bootstrap";

function DetailSeat() {
    const params = useParams()
    const [customer, setCustomer] = useState({})
    const [seats, setSeats] = useState([])
    const [amount, setAmount] = useState()
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalOpen = async () => {
        setShowModal(true);
    };

    const headers = {
        "Authorization": localStorage.getItem("token")
    }


    const getListId = async () => {
        try {
            const data = await getListSeatById(params.listId)
            setSeats(data)
        }
        catch (error) {
            navigate("/notFound")
        }
    }

    const getAmount = () => {
        if (seats.length > 0) {
            const amount = seats.reduce((accumulator, i) => {
                return accumulator += i.typeSeat.priceSeat
            }, 0)
            setAmount(amount)
        }
    }

    const getCustomerByUser = async () => {
        if (localStorage.getItem("role") == "ROLE_CUSTOMER") {
            const username = localStorage.getItem("username");
            const data = await getCustomerByUsername(username,headers);
            setCustomer(data)
        } else {
            navigate("/notFound")
        }
    }
    useEffect(() => {
        document.title = "Chi tiết đặt vé"
        getListId()
        getCustomerByUser()
    }, [])

    useEffect(() => {
        getAmount()
    }, [seats])

    const payment = async (total) => {
        Swal.fire({
            icon: "warning",
            title: "Xác nhận thông tin",
            text: "Hãy kiểm tra thông tin trước khi thanh toán",
            showCancelButton: true,
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Hủy"
        }).then(async (res) => {
            if (res.isConfirmed) {
                localStorage.setItem("listIdSeat", params.listId)
                const data = await payWithVNpay(total);
                window.location.href = data;

            } else if (res.dismiss === Swal.DismissReason.cancel) { }
        })
    }
    return (
        <div className='duthuyen'>
            <div className='container' style={{ paddingTop: "100px", color: "rgb(10, 141, 145)" }}>
                {seats.length > 0 && customer &&
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <div className="wrapper">
                                        <div className="row no-gutters">
                                            <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                                <div className="contact-wrap w-100 p-md-5 p-4" style={{ backgroundColor: "white", marginLeft: "-30px" }}>
                                                    <h3 className="mb-4" style={{ textTransform: "uppercase", textAlign: "center" }}>Thông tin lịch trình</h3>
                                                    <div id="form-message-warning" className="mb-4" />

                                                    <div method="POST" id="contactForm" name="contactForm" className="contactForm">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="name">Ngày khởi hành</label>
                                                                    <div className='form-control'> {moment(seats[0].schedule.dateDeparture).format("DD-MM-YYYY")} </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="email">Thời gian khởi hành</label>
                                                                    <div className='form-control'> {seats[0].schedule.timeDeparture} </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="name">Tên tàu</label>
                                                                    <div className='form-control'> {seats[0].schedule.ship.nameShip} </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="email">Số lượng vé </label>
                                                                    <div className='form-control'> {seats.length} </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="email">Danh sách chỗ ngồi  </label>
                                                                    <div className='form-control'> <a style={{ color: "blue" }} onClick={handleModalOpen}>Xem chi tiết</a> </div>
                                                                </div>
                                                            </div>


                                                            <div className='row' style={{ marginTop: "30px" }}>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <h2>Tổng tiền: {numeral(amount).format("")} VND</h2>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group" style={{ float: "right" }}>
                                                                        {/* <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                                <div className="submitting" /> */}
                                                                        <button type='submit' className='btn btn-primary' style={{ backgroundColor: "rgb(10, 141, 145)" }} onClick={() => payment(amount)}>Thanh toán</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="#">Message</label>
                                                                <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                                                            </div>
                                                        </div> */}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-lg-4 col-md-5 d-flex align-items-stretch" >
                                                <div className="info-wrap w-100 p-md-5 p-4" style={{ backgroundColor: "rgb(10, 141, 145)" }}>
                                                    <h3 style={{ "color": "white", textTransform: "uppercase", marginBottom: "30px", justifyContent: "center" }}>Khách hàng</h3>
                                                    {/* <p className="mb-4">We're open for any suggestion or just to have a chat</p> */}
                                                    <div className="dbox w-100 d-flex align-items-start">

                                                        <div className="text pl-3" >
                                                            <p style={{ "color": "white" }}>
                                                                <span><i class="fa-solid fa-user"></i>Họ và tên:</span> {customer.nameCustomer}
                                                            </p>

                                                        </div>
                                                    </div>
                                                    <div className="dbox w-100 d-flex align-items-center">

                                                        <div className="text pl-3">
                                                            <p style={{ "color": "white" }}>
                                                                <span><i class="fa-solid fa-phone" ></i>Số điện thoại:</span> {customer.telCustomer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="dbox w-100 d-flex align-items-center">
                                                        {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane" />
                                            </div> */}
                                                        <div className="text pl-3">
                                                            <p style={{ "color": "white" }}>
                                                                <span><i class="fa-regular fa-envelope"></i>Email:</span> {customer.emailCustomer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="dbox w-100 d-flex align-items-center">
                                                        {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe" />
                                            </div> */}
                                                        <div className="text pl-3">
                                                            <p style={{ "color": "white" }}>
                                                                <span><i class="fa-solid fa-address-card"></i>CCCD: </span>  {customer.identityCardCustomer}
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                }
            </div>
            <div className="text-center mt-4 btn-group p-3 m-l-2">
                <div className="text-center m-auto">
                    <Modal
                        className="modal-xl"
                        show={showModal}
                        onHide={handleModalClose}
                        keyboard={false}
                        centered
                    >

                        <Modal.Body >
                            <div className="d-flex justify-content-between">
                                <h1 style={{ color: "rgb(10, 141, 145)", textAlign: "center" }}>Danh sách chỗ ngồi</h1>
                                <a onClick={() => handleModalClose()}>
                                    <span className="btn btn-success">X
                                    </span>
                                </a>
                            </div>
                            <table className="table table-striped" >
                                <thead>
                                    <tr style={{ textAlign: "start", color: "rgb(10, 141, 145)" }}>
                                        <th className="">STT</th>

                                        <th className="">Số ghế</th>
                                        <th className="">Loại ghế</th>

                                        <th className="">Đơn giá</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {seats.map((i, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{i.nameSeat}</td>
                                                <td>{i.typeSeat.nameTypeSeat}</td>
                                                <td>{numeral(i.typeSeat.priceSeat).format()} VND</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td><h4>Tổng tiền</h4></td>
                                        <td></td>
                                        <td></td>
                                        <td><h4>{numeral(amount).format()} VND</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>

    )
}
export default DetailSeat;