import React, { useEffect, useState } from 'react';
import "../login.css"
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as yup from "yup"
import { login } from '../service/LoginService';
import { Navigate, useNavigate,Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login() {
  const navigate = useNavigate();
 
  useEffect(()=>{
    document.title = "Đăng nhập"
    if(localStorage.getItem("username")!=null){
      navigate("/")
    }else{
      window.scrollTo(0,0)
    }
  },[])
  return (
    <div className='hle' >
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2 background" />
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7" style={{color:"rgb(10, 141, 145)"}}>
                <h3>Đăng Nhập</h3>
                <Formik
                  initialValues={{
                    username: "",
                    password: ""
                  }}
                  validationSchema={yup.object({
                    username: yup.string().required("Mời nhập tài khoản"),
                    password: yup.string().required("Mời nhập mật khẩu")
                  })}
                  onSubmit={ async(values) => { 
                    try{
                      const data = await login(values);
                      console.log(data);
                      const token = data.type + " " + data.token;             
                      const role = data.listRoles[0];
                      localStorage.setItem("token",token);
                      localStorage.setItem("role",role);
                      localStorage.setItem("username",data.username)
                      navigate("/")
                      Swal.fire({
                        icon:"success",
                        timer: 2000,
                        title: "Đăng nhập thành công",
                        showConfirmButton:false
                      })
                    }catch(error){
                      Swal.fire({
                        icon:"error",
                        timer: 2000,
                        title: "Tên đăng nhập hoặc mật khẩu không đúng",
                        showConfirmButton:false
                      })
                    }
                    
                    }}
               >
                <Form>
                  <div className="form-group first">
                    <label htmlFor="username">Tài Khoản</label>
                    <Field type="text" className="form-control" id="username" name='username' />
                    <ErrorMessage name='username' component="div"className='error-message'/>
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Mật Khẩu</label>
                    <Field type="password" className="form-control" id="password" name='password' />
                    <ErrorMessage name='password' component="div" className='error-message'/>
                  </div>
                  <div className="d-flex mb-5 align-items-center">
        
                    <span className="ml-auto">Bạn chưa có tài khoản? <Link to="/signup" >Đăng ký ngay</Link></span>
                  </div>
                  <button type="submit" defaultValue="Log In" className="btn btn-block btn-primary" style={{backgroundColor:"rgb(10, 141, 145)"}}>Đăng nhập</button>
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

export default Login;