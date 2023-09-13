import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerByUsername } from '../service/CustomerService';
import { getListSeatById } from '../service/SeatService';
import Swal from 'sweetalert2';
import { payWithVNpay } from '../service/PaymentVNpay';

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
        <div className='container' style={{"margin":"100px auto" }}>
            {seats.length > 0 && customer &&
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Thông tin lịch trình</h3>
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
                                                                <div className='form-control'> {seats[0].typeSeat.priceSeat}/vé </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <h2>Tổng tiền: {seats[0].typeSeat.priceSeat * seats.length}</h2>
                                                                
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="#">Message</label>
                                                                <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                {/* <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                                <div className="submitting" /> */}
                                                                <button type='submit' className='btn btn-primary' onClick={() => payment(seats[0].typeSeat.priceSeat * seats.length)}>Thanh toán</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch" >
                                            <div className="info-wrap bg-primary w-100 p-md-5 p-4" >
                                                <h3 style={{ "color": "white" }}>Khách hàng</h3>
                                                {/* <p className="mb-4">We're open for any suggestion or just to have a chat</p> */}
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker" />
                                            </div> */}
                                                    <div className="text pl-3" >
                                                        <p style={{ "color": "white" }}>
                                                            <span>Họ và tên:</span> {customer.nameCustomer}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone" />
                                            </div> */}
                                                    <div className="text pl-3">
                                                        <p style={{ "color": "white" }}>
                                                            <span>Số điện thoại:</span> {customer.telCustomer}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane" />
                                            </div> */}
                                                    <div className="text pl-3">
                                                        <p style={{ "color": "white" }}>
                                                            <span>Email:</span> {customer.emailCustomer}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    {/* <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe" />
                                            </div> */}
                                                    <div className="text pl-3">
                                                        <p style={{ "color": "white" }}>
                                                            <span>CCCD: </span>  {customer.identityCardCustomer}
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
    )
}
export default DetailSeat;