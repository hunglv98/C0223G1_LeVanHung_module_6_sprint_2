import React from 'react';
import "../login.css"
function Login(){
    return( 
      <div className='hle'>
            <div className="d-lg-flex half">
              <div className="bg order-1 order-md-2 background" />
              <div className="contents order-2 order-md-1">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7">
                      <h3 style={{"color":"black"}}>Đăng Nhập</h3>
                     
                      <form action="#" method="post">
                        <div className="form-group first">
                          <label htmlFor="username">Tài Khoản</label>
                          <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username" />
                        </div>
                        <div className="form-group last mb-3">
                          <label htmlFor="password">Mật Khẩu</label>
                          <input type="password" className="form-control" placeholder="Your Password" id="password" />
                        </div>
                        <div className="d-flex mb-5 align-items-center">
                          {/* <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                            <input type="checkbox" defaultChecked="checked" />
                            <div className="control__indicator" />
                          </label> */}
                          <span className="ml-auto">Bạn chưa có tài khoản? <a href="#" >Đăng ký ngay</a></span>
                        </div>
                        <button type="submit" defaultValue="Log In" className="btn btn-block btn-primary" >Đăng nhập</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        }

export default Login;