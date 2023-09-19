import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as yup from "yup"
import { getTicketFromCode, returnTicketById } from '../service/TicketService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function TicketReturn() {
    const [isOpen, setIsOpen] = useState(true);
    const [ticket, setTicket] = useState()

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const returnTicket = async (id) => {
        Swal.fire({
            icon: "warning",
            title: "Bạn có muốn hoàn trả vé?",
            text: "Hành động này sẽ không được hoàn tác!",
            showCancelButton: true,
            confirmButtonText: "Xác nhận",
            cancelButtonText: "Hủy"
        }).then(async (res) => {
            if (res.isConfirmed) {
                try {
                    await returnTicketById(id)

                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Đã quá thời hạn trả vé quy định!",
                        timer: 2000,
                        showConfirmButton: false
                    })
                } finally {
                    closeModal()
                }
            } else if (res.dismiss === Swal.DismissReason.cancel) { }
        })
    }
    useEffect(()=>{
        document.title = "Hoàn vé"
    },[])

    return (
        <div className='duthuyen'>
            <div className='row'>
                <Formik
                    initialValues={{
                        ticketCode: "",
                        mailCustomer: "",
                        telCustommer: ""
                    }}
                    validationSchema={yup.object({
                        ticketCode: yup.string().required("Mời bạn nhập mã đặt vé"),
                        mailCustomer: yup.string().required("Mời bạn nhập email"),
                        telCustommer: yup.string().required("Mời bạn nhập số điện thoại")
                    })}
                    onSubmit={async (values) => {
                        try {
                            const data = await getTicketFromCode(values.ticketCode, values.telCustommer, values.mailCustomer)
                            console.log(data);
                            setTicket(data)
                            openModal()
                        } catch (error) {
                            Swal.fire({
                                title: "Không tìm thấy vé theo thông tin đã nhập",
                                icon: "error",
                                timer: 2000,
                                showConfirmButton: false
                            })
                        }

                    }}
                >
                    <Form>
                        <div className='row' >
                            <div className='col-4'></div>
                            <div className='col-4 form-group ticket-return' style={{ backgroundColor: "white", color:"#0a8d91" }}>
                                <h1 style={{textAlign:"center",textTransform:'uppercase'}}>Thông tin đặt vé</h1>
                                <div className='row'>
                                    <label htmlFor='ticketCode'>Mã đặt vé</label>
                                    <Field className="form-control" name="ticketCode" id="ticketCode" />
                                    <ErrorMessage name='ticketCode' component="div" className='error-message' />
                                </div>
                                <div className='row'>
                                    <label htmlFor='mailCustomer'>Địa chỉ email</label>
                                    <Field className="form-control" name="mailCustomer" id="mailCustomer" />
                                    <ErrorMessage name='mailCustomer' component="div" className='error-message' />
                                </div>
                                <div className='row'>
                                    <label htmlFor='telCustommer'>Số điện thoại</label>
                                    <Field className="form-control" name="telCustommer" id="telCustommer" />
                                    <ErrorMessage name='telCustommer' component="div" className='error-message' />
                                </div>
                                <div className='row'>
                                    <Link to="/forgotCode" >Bạn đã quên mã đặt vé?</Link>
                                </div>
                                <div className='row' style={{ float: "right" }}>
                                    <button className='btn btn-primary' style={{ width: "150px",backgroundColor:"#0a8d91"}} type='submit' >Tìm vé</button>
                                </div>

                            </div>
                            <div className='col-4'></div>
                        </div>
                    </Form>
                </Formik>

            </div>

            <div className='row'>
                {(isOpen && ticket) &&
                    <div className="modal">
                        <div className="modal_overlay">
                        </div>
                        <div className="modal_body">
                            <div className='title' >
                                <h3 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#0a8d91', minHeight: "70px",paddingTop:"20px" }}>
                                    Thông tin mã vé {ticket.codeTicket}  </h3>
                            </div>
                            <div className="modal_inner" style={{ padding: "20px" }}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Ngày khởi hành: </label>
                                            <p className='form-control'> {ticket.seat.schedule.dateDeparture} </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        <div className="form-group">
                                            <label className="form-label">Giờ khởi hành: </label>
                                            <p className='form-control'> {ticket.seat.schedule.timeDeparture} </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Số ghế: </label>
                                            <p className='form-control'> {ticket.seat.nameSeat} </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Loại ghế: </label>
                                            <p className='form-control'> {ticket.seat.typeSeat.nameTypeSeat} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Ngày đặt vé: </label>
                                            <p className='form-control'> {ticket.dateBooking} </p>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Giá vé: </label>
                                            <p className='form-control'> {ticket.seat.typeSeat.priceSeat} </p>
                                            <span className="select-arrow" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-btn">
                                    <div className="row">
                                        <div className="col-6">
                                            <button style={{backgroundColor:"#0a8d91"}} className="submit-btn home-btn" onClick={() => returnTicket(ticket.idTicket)}>Xác nhận</button>
                                        </div>
                                        <div className="col-6">
                                            <button style={{backgroundColor:"#0a8d91"}} onClick={() => closeModal()} className="submit-btn back-btn">Trở về
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default TicketReturn;