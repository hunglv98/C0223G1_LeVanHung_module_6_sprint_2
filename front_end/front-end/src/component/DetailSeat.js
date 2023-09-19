import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerByUsername } from '../service/CustomerService';
import { getListSeatById } from '../service/SeatService';
import Swal from 'sweetalert2';
import { payWithVNpay } from '../service/PaymentVNpay';
import numeral from 'numeral';

function DetailSeat() {
    const params = useParams()
    const [customer, setCustomer] = useState({})
    const [seats, setSeats] = useState([])
    const getListId = async () => {
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
        document.title = "Chi tiết đặt vé"
        getListId()
        getCustomerByUser()
    }, [])

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
                                                <div className="contact-wrap w-100 p-md-5 p-4" style={{ backgroundColor: "white", marginLeft:"-30px" }}>
                                                    <h3 className="mb-4" style={{ textTransform: "uppercase",textAlign:"center" }}>Thông tin lịch trình</h3>
                                                    <div id="form-message-warning" className="mb-4" />

                                                    <div method="POST" id="contactForm" name="contactForm" className="contactForm">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="name">Ngày khởi hành</label>
                                                                    <div className='form-control'> {seats[0].schedule.dateDeparture} </div>
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
                                                                    <label className="label" htmlFor="name">Loại vé </label>
                                                                    <div className='form-control'> {seats[0].typeSeat.nameTypeSeat} </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="label" htmlFor="email">Đơn giá:  </label>
                                                                    <div className='form-control'> {numeral(seats[0].typeSeat.priceSeat).format("")} VND/vé </div>
                                                                </div>
                                                            </div>
                                                            <div className='row' style={{ marginTop: "30px" }}>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <h2>Tổng tiền: {numeral(seats[0].typeSeat.priceSeat * seats.length).format("")} VND</h2>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group" style={{ float: "right" }}>
                                                                        {/* <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                                <div className="submitting" /> */}
                                                                        <button type='submit' className='btn btn-primary' style={{ backgroundColor: "rgb(10, 141, 145)" }} onClick={() => payment(seats[0].typeSeat.priceSeat * seats.length)}>Thanh toán</button>
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
                                                    <h3 style={{ "color": "white", textTransform: "uppercase",marginBottom:"30px", justifyContent:"center" }}>Khách hàng</h3>
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
        </div>
    )
}
export default DetailSeat;