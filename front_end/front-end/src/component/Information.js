import React, { useEffect, useState } from 'react';
import { getCustomerByUsername } from '../service/CustomerService';
import "../info.css"
import { useNavigate } from 'react-router-dom';


function Information() {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState()
    const headers = {
        "Authorization": localStorage.getItem("token")
    }
    const getCustomerByUser = async () => {
        if (localStorage.getItem("role") == "ROLE_CUSTOMER") {
            try {
                const data = await getCustomerByUsername(localStorage.getItem("username"), headers)
                setCustomer(data)
            } catch (e) {
                navigate("/notFound")
            }
        } else {
            navigate("/notFound")
        }
    }
    useEffect(() => {
        document.title = "Thông tin khách hàng"
        getCustomerByUser()
    }, [])

    return (
        <div className='hunglv'>
            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className='col-1'></div>
                            <div className="col-4">
                                <div>
                                    <img
                                        src="https://i.pinimg.com/564x/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                                        alt="Preview Image" id="img-preview" />
                                </div>
                            </div>
                            <div className="col-6">
                                {customer &&
                                    <div className="booking-form">
                                        <div>
                                            <p>Thông Tin Khách Hàng</p>
                                        </div>
                                        <div className="booking-form-padding">

                                            <div className="row">
                                                <div className="form-group">
                                                    <span className="form-label" style={{ paddingLeft: '10px' }}>Họ và tên
                                                    </span>
                                                    <p className="form-control">{customer.nameCustomer}</p>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <span className="form-label" style={{ paddingLeft: '10px' }}>Căn cước công dân
                                                    </span>
                                                    <p className="form-control" name="addressCustomer">{customer.identityCardCustomer}</p>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <span className="form-label" style={{ paddingLeft: '10px' }}>Email
                                                    </span>
                                                    <p className="form-control" name="addressCustomer">{customer.emailCustomer}</p>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <span className="form-label" style={{ paddingLeft: '10px' }}>Số điện thoại
                                                    </span>
                                                    <p className="form-control" name="addressCustomer">{customer.telCustomer}</p>

                                                </div>
                                            </div>


                                        </div>

                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Information