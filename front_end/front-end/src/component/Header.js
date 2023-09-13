import React, { useEffect } from 'react';
import "../content.css"
import logo from "../images/logo.png"
import usericon from "../images/user-icon.png"
import play from "../images/play.png"
import slider from "../images/slider-img.png"

import hle from "../images/zyro-image.png"
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
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
          <img src={hle} style={{"width":"50px","mixBlendMode":"color-burn"}} class="d-inline-block align-top" alt="" />
          </Link>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >Trang chủ</Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link active">Đặt vé</Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" >Lịch chạy</a>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              {localStorage.getItem("username") == null ?
                <li className="nav-item">
                  <Link to="/login" className="nav-link active" aria-current="page" href="#">Đăng nhập</Link>
                </li>
                :
                <li className="nav-item">
                  <Link onClick={() => logout()} className="nav-link active" aria-current="page" href="#">Đăng xuất</Link>
                </li>
              }
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="22"
                    alt="Portrait of a Woman"
                    loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header