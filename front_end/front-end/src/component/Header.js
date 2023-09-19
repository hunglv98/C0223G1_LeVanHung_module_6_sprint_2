import React, { useEffect } from 'react';
import "../content.css"


import hle from "../images/zyro-image.png"
import logo from "../images/Untitled.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { payMomo } from '../service/PaymentMomoService';

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const paymentMomo = async () => {
    await payMomo()
  }
  const logout = async () => {
    localStorage.clear();
    navigate("/")
  }
  useEffect(() => {

  }, [location])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{ justifyContent: "normal"}}>
          <div className='col-3' style={{ paddingLeft: "50px" }}>
            <Link to="/" className="navbar-brand" href="#">
              <img src={logo} style={{ "width": "120px" }} class="d-inline-block align-top" alt="" />
            </Link>

          </div>
          <div className='col-6'>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{justifyContent:"space-around"}}>
              <ul className="navbar-nav">

                <li className="nav-item">
                 
                  <span><Link to="/" className="nav-link active" aria-current="page" style={{color:"#0a8d91"}} ><i class="fa-solid fa-house"></i> Trang chủ</Link></span>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" style={{color:"#0a8d91"}}><i class="fa-solid fa-circle-info"></i>Về chúng tôi</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page"  style={{color:"#0a8d91"}}><i class="fa-solid fa-clock"></i>Lịch chạy</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/ticketReturn" className="nav-link active" style={{color:"#0a8d91"}} ><i class="fa-solid fa-rotate-left"></i> Hoàn vé</Link>
                </li>
              </ul>
            </div>

          </div>
          <div className='col-3' style={{paddingLeft:"180px",}}>
            {localStorage.getItem("username") == null ?
              <div className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page"  style={{color:"#0a8d91"}}>Đăng nhập <i class="fa-solid fa-right-to-bracket"></i></Link>
              </div>
              :
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="40"
                    alt="Portrait of a Woman"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Thông tin khách hàng</a></li>
                  <li><Link to="/history" className="dropdown-item" >Lịch sử giao dịch</Link></li>
                  <li><a className="dropdown-item" onClick={() => logout()}>Đăng xuất</a></li>
                </ul>
              </div>
              // <li className="nav-item">
              //   <Link onClick={() => logout()} className="nav-link active" aria-current="page" href="#">Đăng xuất</Link>
              // </li>
            }
          </div>

          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
          </button> */}

        </div>
      </nav>
    </div>
  )
}
export default Header