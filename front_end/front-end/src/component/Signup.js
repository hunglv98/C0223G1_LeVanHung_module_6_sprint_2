import React, { useEffect } from 'react';
import "../login.css"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { signup } from '../service/SignupService';

function Signup() {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='hle'>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2 background" />
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row ">
            <div className="col-md-1"></div>
              <div className="col-md-10">
                <h3 style={{ "color": "black","textAlign":"center" }}>Đăng Ký</h3>
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                    nameCustomer: "",
                    telCustomer: "",
                    identityCardCustomer: "",
                    emailCustomer: ""
                  }}
                  validationSchema={yup.object({
                    username: yup.string().required(),
                    password: yup.string().required(),
                    nameCustomer: yup.string().required(),
                    telCustomer: yup.string().required(),
                    identityCardCustomer: yup.string().required(),
                    emailCustomer: yup.string().required()
                  })}
                  onSubmit={ async(values) => {
                    signup(values)
                    navigate("/login")
                    Swal.fire({
                      icon:"success",
                      timer: 2000,
                      title: "Đăng ký thành công",
                      showConfirmButton:false
                    })
                    }}
               >
                <Form>
                  <div className="form-group last mb-3">
                    <label htmlFor="nameCustomer">Họ và tên</label>
                    <Field type="text" className="form-control"  id="nameCustomer" name='nameCustomer' />
                    <ErrorMessage name='nameCustomer' component="div" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="telCustomer">Số điện thoại</label>
                    <Field type="text" className="form-control"  id="telCustomer" name='telCustomer' />
                    <ErrorMessage name='telCustomer' component="div"/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="identityCardCustomer">Căn cước công dân</label>
                    <Field type="text" className="form-control"  id="identityCardCustomer" name='identityCardCustomer' />
                    <ErrorMessage name='identityCardCustomer' identityCardCustomer="div"/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="emailCustomer">Email</label>
                    <Field type="text" className="form-control"  id="emailCustomer" name='emailCustomer' />
                    <ErrorMessage name='emailCustomer' component="div"/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="username">Tài Khoản</label>
                    <Field type="text" className="form-control"  id="username" name='username' />
                    <ErrorMessage name='username' component="div"/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Mật Khẩu</label>
                    <Field type="password" className="form-control"  id="password" name='password' />
                    <ErrorMessage name='password' component="div"/>
                  </div>
                  
                  <div className="d-flex mb-5 align-items-center">
                    {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                            <input type="checkbox" defaultChecked="checked" />
                            <div className="control__indicator" />
                          </label> */}
                    {/* <span className="ml-auto">Bạn chưa có tài khoản? <a href="#" >Đăng ký ngay</a></span> */}
                  </div>
                  <button type="submit" defaultValue="Log In" className="btn btn-block btn-primary" >Đăng Ký</button>
                </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;